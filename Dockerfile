FROM ghcr.io/zapomatic/bitwatch:v1.7.2@sha256:bfc7522e0953c212010e189fdf6bd060168fb9ed283f59512600b0da0c98bd3b
USER root 

ARG PLATFORM 

RUN apk add --no-cache \
    jq \
    yq 

ADD ./docker_entrypoint.sh /usr/local/bin/docker_entrypoint.sh

RUN chmod a+x /usr/local/bin/*.sh

#USER 1000:1000

ENTRYPOINT ["/usr/local/bin/docker_entrypoint.sh"]

