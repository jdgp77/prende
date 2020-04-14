#!/bin/bash
if [ "$(uname)" == "Darwin" ]
then
    docker exec -it prende_gatsby_1 sh /app/$1/prende-scripts/indocker--start.sh $1
else
    docker exec -it --user $(id -u):$(id -g) prende_gatsby_1 sh /app/$1/prende-scripts/indocker--start.sh $1
fi