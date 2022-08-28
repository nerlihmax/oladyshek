#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/..

TYPESCRIPT_CONSUMERS=( \
    "./recepies-service" \
    "./gql-gateway-service" \
)

for d in ${TYPESCRIPT_CONSUMERS[@]} ; do
    DEST=${d}/proto-gen

    echo "generating typescipt defenitions for ${d}"
    rm -rf ${DEST}
    mkdir -p ${DEST}

    npx proto-loader-gen-types \
        --defaults \
        --grpcLib=@grpc/grpc-js \
        --outDir=${DEST} \
        ./proto/*.proto
done
