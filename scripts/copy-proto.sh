#!/usr/bin/env bash

BASEDIR=$(dirname "$0")
cd ${BASEDIR}/..

for d in *-service ; do
    cd ${d}

    echo "coping /proto/ for ${d}"
    cp -r ../proto proto

    cd ..
done