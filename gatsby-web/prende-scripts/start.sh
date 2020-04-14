#!/bin/bash
if [ "$(uname)" == "Darwin" ]
then
    docker exec -it prende_gatsby_1 sh /app/prende-scripts/indocker--start.sh
else
    docker exec -it --user $(id -u):$(id -g) prende_gatsby_1 sh /app/prende-scripts/indocker--start.sh
fi