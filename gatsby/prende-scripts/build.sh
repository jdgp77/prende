#!/bin/bash
if [ "$(uname)" == "Darwin" ]
then
    docker exec -it prende_gatsby_1 sh /app/prende-scripts/indocker--build.sh $1
else
    docker exec -it --user $(id -u):$(id -g) prende_gatsby_1 sh /app/prende-scripts/indocker--build.sh $1
fi