#!/bin/bash

cd apps/viewer;
node  -e "const { configureRuntimeEnv } = require('next-runtime-env/build/configure'); configureRuntimeEnv();"
cd ../..;

NODE_OPTIONS=--no-node-snapshot HOSTNAME=${HOSTNAME:-0.0.0.0} PORT=${PORT:-3001} node apps/viewer/server.js;