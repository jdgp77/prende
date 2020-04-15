#!/bin/bash
if [ "$1" = "drupal" ]
then
  if [ "$2" = "composer" ]
  then
    if [ "$3" = "require" ]
    then
      PRENDE_BASESCRIPT="docker exec -it --user drupaluser prende_drupal_1 composer require '${4}' $5 $6 $7 $8 $9"
      PRENDE_NUMFILE=$(($(od -An -N1 -i /dev/random) % 100))
      PRENDE_NAMEFILE="personalscript-${PRENDE_NUMFILE}.sh"
      echo "#!/bin/bash" > $PRENDE_NAMEFILE
      echo $PRENDE_BASESCRIPT >> $PRENDE_NAMEFILE
      chmod +x $PRENDE_NAMEFILE
      sh $PRENDE_NAMEFILE
      rm $PRENDE_NAMEFILE
    else
      sh prende.sh drupal command $2 $3 $4 $5 $6 $7 $8 $9
    fi
  fi
  
  if [ "$2" = "drush" ]
  then
    echo "$2"
    sh prende.sh drupal command $2 $3 $4 $5 $6 $7 $8 $9
  fi
  if [ "$2" = "command" ]
  then
    echo "docker exec -it --user drupaluser prende_drupal_1 $3 $4 $5 $6 $7 $8 $9"
    PRENDE_BASESCRIPT="docker exec -it --user drupaluser prende_drupal_1 $3 $4 $5 $6 $7 $8 $9"
    PRENDE_NUMFILE=$(($(od -An -N1 -i /dev/random) % 100))
    PRENDE_NAMEFILE="personalscript-${PRENDE_NUMFILE}.sh"
    echo "#!/bin/bash" > $PRENDE_NAMEFILE
    echo $PRENDE_BASESCRIPT >> $PRENDE_NAMEFILE
    chmod +x $PRENDE_NAMEFILE
    sh $PRENDE_NAMEFILE
    rm $PRENDE_NAMEFILE
  fi
  if [ "$2" = "install:with-mysql" ]
  then
    sh prende.sh drupal composer run-script install:with-mysql
  fi
  if [ "$2" = "bash" ]
  then
    sh drupal/prende-scripts/bash.sh
  fi
  if [ "$2" = "install" ]
  then
    sh drupal/prende-scripts/install.sh
  fi
  if [ "$2" = "create-project" ]
  then
    echo "\$sites['${3}'] = '${3}';" >> drupal/web/sites/sites.php
    echo "\$sites[local.'${3}'] = '${3}';" >> drupal/web/sites/sites.php
    mkdir drupal/web/sites/${3}
    cp -r drupal/web/sites/default/files drupal/web/sites/${3}/files
    mkdir -p drupal/web/sites/${3}/files/modules
    mkdir -p drupal/web/sites/${3}/files/themes
    cp -r drupal/web/sites/default/services.yml drupal/web/sites/${3}/services.yml
    cp -r drupal/web/sites/default/settings.php drupal/web/sites/${3}/settings.php
    cp db/dump/dump.sql db/dump/${3}.sql

    
   fi

  if [ "$2" = "-h" ] || [ "$2" = "--help" ]
  then
    echo "prende drupal create-project <nombre-proyecto> [ERROR FALTA PROBAR]  [Entrar a la consola de este proyecto]"
  fi
fi

if [ "$1" = "react-web" ]
then
  if [ "$2" = "bash" ]
  then
    sh react-web/prende-scripts/bash.sh
  fi 
  if [ "$2" = "start" ]
  then
    sh react-web/prende-scripts/start.sh
  fi
  if [ "$2" = "install" ]
  then
    sh prende.sh react-web command npm install
    sh prende.sh react-web command mv build $3docker
  fi
  if [ "$2" = "start-local" ]
  then
    sh react-web/prende-scripts/start-local.sh
  fi
  if [ "$2" = "command" ]
  then
    PRENDE_BASESCRIPT="docker exec -it prende_react_1 $3 $4 $5 $6 $7 $8 $9"
    PRENDE_NUMFILE=$(($(od -An -N1 -i /dev/random) % 100))
    PRENDE_NAMEFILE="personalscript-${PRENDE_NUMFILE}.sh"
    echo "#!/bin/bash" > $PRENDE_NAMEFILE
    echo $PRENDE_BASESCRIPT >> $PRENDE_NAMEFILE
    chmod +x $PRENDE_NAMEFILE
    sh $PRENDE_NAMEFILE
    rm $PRENDE_NAMEFILE
  fi
  if [ "$2" = "build" ]
  then
    sh prende.sh react-web command npm run-script build
    sh prende.sh react-web command mv build $3
  fi

  if [ "$2" = "-h" ] || [ "$2" = "--help" ]
  then
    echo "prende start                        [Para iniciar el docker con MySQL, Drupal y react]"
    echo "prende react-web start              [Para iniciar react en el puerto 23000]"
  fi
fi
echo "a01"
if [ "$1" = "gatsby" ]
then
  if [ "$2" = "create-project" ]
  then
    cp -r gatsby/eduint gatsby/$3
    rm -r gatsby/$3/public/global-images
    cp -r gatsby/eduint/public/global-images gatsby/$3/public/global-images
    rm -r gatsby/$3/src/global-components
    cp -r gatsby/eduint/src/global-components gatsby/$3/src/global-components
    rm -r gatsby/$3/src/global-sass
    cp -r gatsby/eduint/src/global-sass gatsby/$3/src/global-sass
  fi
  if [ "$2" = "update-project" ]
  then
  echo "a02"
    rm -rf gatsby/$3/public/global-images
    ln -s ../../eduint/public/global-images gatsby/$3/public/global-images
    rm -rf gatsby/$3/src/global-components
    ln -s ../../eduint/src/global-components gatsby/$3/src/global-components
    rm -rf gatsby/$3/src/global-sass
    ln -s ../../eduint/src/global-sass gatsby/$3/src/global-sass
  else
    if [ "$3" = "bash" ]
    then
      sh gatsby/${2}/prende-scripts/bash.sh ${2}
    fi 
    if [ "$3" = "start" ]
    then
      sh gatsby/${2}/prende-scripts/start.sh ${2}
    fi
    if [ "$3" = "install" ]
    then
      sh prende.sh gatsby ${2} command npm install
      sh prende.sh gatsby ${2} command mv build docker
    fi
    if [ "$3" = "start-local" ]
    then
      sh gatsby/${2}/prende-scripts/start-local.sh ${2}
    fi
    if [ "$3" = "command" ]
    then
      PRENDE_BASESCRIPT="docker exec -it prende_gatsby_1 $4 $5 $6 $7 $8 $9"
      PRENDE_NUMFILE=$(($(od -An -N1 -i /dev/random) % 100))
      PRENDE_NAMEFILE="personalscript-${PRENDE_NUMFILE}.sh"
      echo "#!/bin/bash" > $PRENDE_NAMEFILE
      echo "#cd ${2}" > $PRENDE_NAMEFILE
      echo $PRENDE_BASESCRIPT >> $PRENDE_NAMEFILE
      echo "#cd .." >> $PRENDE_NAMEFILE
      chmod +x $PRENDE_NAMEFILE
      sh $PRENDE_NAMEFILE
      rm $PRENDE_NAMEFILE
    fi
    if [ "$3" = "build" ]
    then
      sh prende.sh gatsby-web ${2} command npm run-script build
      #sh prende.sh gatsby-web ${2} command mv build $3
    fi
    if [ "$2" = "-h" ] || [ "$2" = "--help" ]
    then
      echo "prende gatsby create-project <nombre-proyecto> [ERROR FALTA]  [Entrar a la consola de este proyecto]"
      echo "prende gatsby <nombre-proyecto> bash                          [Entrar a la consola de este proyecto]"
      echo "prende gatsby <nombre-proyecto> start                         [Inicia gatsby]"
      echo "prende gatsby <nombre-proyecto> install                       [Instala los comandos]"
      echo "prende gatsby <nombre-proyecto> start-local                   [Inicia gatsby apuntando a local]"
      echo "prende gatsby <nombre-proyecto> command <comando>             [Ejecutar comandos dentro del proyecto]"
      echo "prende gatsby <nombre-proyecto> build [ERROR FALTA]           [Genera el Build para gatsby]"
    fi
  fi 
fi

if [ "$1" = "gatsby-web" ]
then
  if [ "$2" = "bash" ]
  then
    sh gatsby-web/prende-scripts/bash.sh
  fi 
  if [ "$2" = "start" ]
  then
    sh gatsby-web/prende-scripts/start.sh
  fi
  if [ "$2" = "install" ]
  then
    sh prende.sh gatsby-web command npm install
    sh prende.sh gatsby-web command mv build $3docker
  fi
  if [ "$2" = "start-local" ]
  then
    sh gatsby-web/prende-scripts/start-local.sh
  fi
  if [ "$2" = "command" ]
  then
    PRENDE_BASESCRIPT="docker exec -it prende_gatsby_1 $3 $4 $5 $6 $7 $8 $9"
    PRENDE_NUMFILE=$(($(od -An -N1 -i /dev/random) % 100))
    PRENDE_NAMEFILE="personalscript-${PRENDE_NUMFILE}.sh"
    echo "#!/bin/bash" > $PRENDE_NAMEFILE
    echo $PRENDE_BASESCRIPT >> $PRENDE_NAMEFILE
    chmod +x $PRENDE_NAMEFILE
    sh $PRENDE_NAMEFILE
    rm $PRENDE_NAMEFILE
  fi
  if [ "$2" = "build" ]
  then
    sh prende.sh gatsby-web command npm run-script build
    sh prende.sh gatsby-web command mv build $3
  fi
  
  if [ "$2" = "-h" ] || [ "$2" = "--help" ]
  then
    echo "prende start                        [Para iniciar el docker con MySQL, Drupal y react]"
    echo "prende react-web start              [Para iniciar react en el puerto 23000]"
  fi
fi

if [ "$1" = "db" ]
then
  if [ "$2" = "actualizar" ]
  then
    echo "Actualizando BD"
  fi
fi

if [ "$1" = "firebase" ]
then
  if [ "$2" = "deploy" ]
  then
    cd firebase
    cp .firebaserc_org .firebaserc
    sed -i "s/eduintgd/${4}/g" .firebaserc
    cp -r "../gatsby/${3}/build" public
    firebase deploy
    rm .firebaserc
    rm -rf public
    cd ..
  fi
fi

if [ "$1" = "create-project" ]
then
  sh prende.sh drupal create-project $2
  sh prende.sh gatsby create-project $2
fi

if [ "$1" = "start" ]
then
  sh prende-scripts/start-docker.sh
fi

if [ "$1" = "install" ]
then
  sh drupal/prende-scripts/install.sh
  sh react-web/prende-scripts/install.sh
fi

if [ "$1" = "init" ]
then
  sudo cp prende-scripts/prende.sh /usr/bin/prende
  sudo chmod +x /usr/bin/prende
fi

if [ "$1" = "-h" ] || [ "$1" = "--help" ]
then
  echo "  prende start                             [Para iniciar el docker con MySQL, Drupal y react]"
  echo "  prende react-web start                   [Para iniciar react en el puerto 23000]"
  echo "  prende install                           [Para instalar la plataforma]"
  echo ""
  echo "  prende drupal composer <comandos>               [Ejecuta comandos de composer]"
  echo "  prende drupal drush <comandos>                        [Ejecuta comandos de composer]"
  echo ""
  echo "  prende drupal install:with-mysql                             [Instala drupal con base de datos]"
  echo ""
  echo "  prende gatsbt build <nombrecarpeta>                          [Realiza el build pero en la carpeta nombrecarpeta]";
  echo "  prende firebase deploy <nombrecarpeta> <proyecto-firebase>   [Sube a firebase el deploy nombrecarpeta]"
  echo ""
  echo ""
  echo "  Ejemplos:"
  echo "  ========"
  echo "  "
  echo "  Como arrancarlo:"
  echo "  ----------------"
  echo "  prende start                           [Realiza el build pero en la carpeta nombrecarpeta]";
  echo "  (En otra terminal)"
  echo "  prende react-web start                 [Arranca react apuntando a prod]"
  echo "  "
  echo "  Como instalarlo:"
  echo "  ----------------"
  echo "  prende start                           [Realiza el build pero en la carpeta nombrecarpeta]";
  echo "  (En otra terminal)"
  echo "  prende install                         [Para instalar la plataforma]"
  echo "  (Si quieren arrancarlo)"
  echo "  prende react-web start                 [Arranca react apuntando a prod]"
  echo "  "
  echo "  Vamos a generar la de la pagina principal:"
  echo "  ------------------------------------------"
  echo "  prende react-web build eduintgd        [Realiza el build pero en la carpeta nombrecarpeta]";
  echo "  prende firebase deploy eduintgd        [Sube a firebase el deploy nombrecarpeta]"
fi