#!/bin/bash
if [ "$(uname)" == "Darwin" ]
then
    docker exec -it prende_gatsby_1 sh /app/$1/prende-scripts/indocker--start-local.sh
else
    docker exec -it --user $(id -u):$(id -g) prende_gatsby_1 sh /app/$1/prende-scripts/indocker--start-local.sh
fi