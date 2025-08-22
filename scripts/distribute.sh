#!/bin/bash
rimraf dist

tsc --project tsconfig.dist.json
tsc-alias --project tsconfig.dist.json

sass --no-source-map ./src/lib/styles/index.scss ./dist/styles/index.css

cp -R ./src/lib/assets ./dist
