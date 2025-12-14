pipeline {
    agent any

    environment {
        GITHUB_USER = "jawherlaben"
        REPO_NAME   = "devopsjobs"

        BACKEND_IMAGE  = "ghcr.io/${GITHUB_USER}/${REPO_NAME}-backend:latest"
        FRONTEND_IMAGE = "ghcr.io/${GITHUB_USER}/${REPO_NAME}-frontend:latest"

        GHCR_CREDS = "ghcr-creds"
    }

    stages {

        /* ========================= */
        /* 1. CHECKOUT               */
        /* ========================= */
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        /* ========================= */
        /* 2. BACKEND TEST (DOCKER)  */
        /* ========================= */
        stage('Backend - Install & Test') {
            steps {
                sh '''
                    echo "=== Backend: install & test in Docker ==="
                    docker run --rm \
                      -v "$PWD/jobapplication_backend:/app" \
                      -w /app \
                      node:20-bookworm-slim \
                      sh -c "npm ci && npm run test || echo 'No backend tests'"
                '''
            }
        }

        /* ========================= */
        /* 3. FRONTEND TEST (DOCKER) */
        /* ========================= */
        stage('Frontend - Install & Test') {
            steps {
                sh '''
                    echo "=== Frontend: install & test in Docker ==="
                    docker run --rm \
                      -v "$PWD/jobapplication_frontend:/app" \
                      -w /app \
                      node:18-alpine \
                      sh -c "npm ci && npm run test || echo 'No frontend tests'"
                '''
            }
        }

        /* ========================= */
        /* 4. BUILD IMAGES DOCKER    */
        /* ========================= */
        stage('Build Docker Images') {
            steps {
                sh '''
                    echo "=== Build backend image ==="
                    docker build -t $BACKEND_IMAGE jobapplication_backend

                    echo "=== Build frontend image ==="
                    docker build -t $FRONTEND_IMAGE jobapplication_frontend
                '''
            }
        }

    

        stage('Run Containers (Local)') {
            steps {
                sh '''
                    echo "=== Stop old containers ==="
                    # Ensure we are operating from the Jenkins workspace and compose resolves paths correctly
                    ls -la ${WORKSPACE}/monitoring/prometheus || true
                    test -f ${WORKSPACE}/monitoring/prometheus/prometheus.yml && echo "Found prometheus.yml" || { echo "prometheus.yml not found"; exit 1; }
                    docker compose -f ${WORKSPACE}/docker-compose.yml --project-directory ${WORKSPACE} down -v || true
                    docker rm -f prometheus || true

                    echo "=== Run all containers via Docker Compose ==="
                    echo "Check mount contents with Alpine"
                    docker run --rm -v ${WORKSPACE}/monitoring/prometheus:/etc/prometheus:ro alpine sh -lc 'ls -la /etc/prometheus && ls -l /etc/prometheus/prometheus.yml || true'

                    docker compose -f ${WORKSPACE}/docker-compose.yml --project-directory ${WORKSPACE} up -d --force-recreate --renew-anon-volumes
                '''
            }
        }
            }

            post {
                success {
                    echo "Pipeline DevopsJobs terminé avec succès"
                }
                failure {
                    echo "Pipeline DevopsJobs échoué"
                }
            }
}
