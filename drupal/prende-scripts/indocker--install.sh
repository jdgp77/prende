#!/bin/bash
cd /var/www/html
composer install
cd /var/www/html/web
# Cambia el password de admin por admin
drush upwd admin admin