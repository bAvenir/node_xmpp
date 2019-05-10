#!/bin/sh

WORKDIR=${PWD}

# BUILD VAS
docker kill xmpp_node >/dev/null 2>&1
docker rm xmpp_node >/dev/null 2>&1
# docker rmi xmpp_node >/dev/null 2>&1
docker build -f ${WORKDIR}/Dockerfile.xmpp_node -t xmpp_node ${WORKDIR}

# CREATE FOLDERS
mkdir -p -m 755 ~/docker_data/logs/
mkdir -p -m 777 ~/docker_data/logs/xmpp_node

docker run -d -p 9997:9997 \
        --rm \
        --network dockernet \
        --name xmpp_node \
        -v ~/docker_data/logs/xmpp_node:/home/app/logs \
        xmpp_node:latest
