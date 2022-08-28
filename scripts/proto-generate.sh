#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/..

for d in ./*-service ; do
    DEST=${d}/proto-gen

    rm -rf ${DEST}
    mkdir -p ${DEST}

    npx proto-loader-gen-types \
        --defaults \
        --grpcLib=@grpc/grpc-js \
        --outDir=${DEST} \
        ./*-service/**/*.proto
done