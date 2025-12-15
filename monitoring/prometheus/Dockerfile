FROM prom/prometheus:latest

RUN mkdir -p /etc/prometheus

COPY prometheus.yml /etc/prometheus/prometheus.yml

CMD ["--config.file=/etc/prometheus/prometheus.yml"]
