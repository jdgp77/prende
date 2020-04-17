#!/bin/bash
if [ "$(uname)" == "Darwin" ]
then
    docker exec -it prende_gatsby_1 sh /app/$1/prende-scripts/indocker--install.sh
else
    docker exec -it prende_gatsby_1 sh /app/$1/prende-scripts/indocker--install.sh
    sudo chown $(id -u):$(id -g) -R node_modules
fi