#!/bin/bash
if [ "$(uname)" == "Darwin" ]
then
    docker exec -it prende_react_1 sh /app/prende-scripts/indocker--start-local.sh
else
    docker exec -it --user $(id -u):$(id -g) prende_react_1 sh /app/prende-scripts/indocker--start-local.sh
fi