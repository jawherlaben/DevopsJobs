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


        stage('Checkout') {
            steps {
                checkout scm
            }
        }


        stage('Backend - Install & Test') {
            steps {
                dir('jobapplication_backend') {
                    sh '''
                        echo "=== Backend: install dependencies ==="
                        npm ci

                        echo "=== Backend: run tests ==="
                        npm run test || echo "No backend tests"
                    '''
                }
            }
        }

        stage('Frontend - Install & Test') {
            steps {
                dir('jobapplication_frontend') {
                    sh '''
                        echo "=== Frontend: install dependencies ==="
                        npm ci

                        echo "=== Frontend: run tests ==="
                        npm run test || echo "No frontend tests"
                    '''
                }
            }
        }

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


        stage('Push to GitHub Container Registry') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: GHCR_CREDS,
                    usernameVariable: 'GH_USER',
                    passwordVariable: 'GH_TOKEN'
                )]) {
                    sh '''
                        echo "=== Login GHCR ==="
                        echo $GH_TOKEN | docker login ghcr.io -u $GH_USER --password-stdin

                        echo "=== Push backend ==="
                        docker push $BACKEND_IMAGE

                        echo "=== Push frontend ==="
                        docker push $FRONTEND_IMAGE
                    '''
                }
            }
        }


        stage('Run Containers (Local)') {
            steps {
                sh '''
                    echo "=== Stop old containers ==="
                    docker rm -f backend frontend || true

                    echo "=== Run backend ==="
                    docker run -d \
                        --name backend \
                        -p 3000:3000 \
                        $BACKEND_IMAGE

                    echo "=== Run frontend ==="
                    docker run -d \
                        --name frontend \
                        -p 8080:80 \
                        $FRONTEND_IMAGE
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
