#!/bin/bash
if [ "$(uname)" == "Darwin" ]
then
    PRENDE_BASESCRIPT="docker exec -it prende_drupal_1 $1"
else
    PRENDE_BASESCRIPT="docker exec -it --user $(id -u):$(id -g) prende_drupal_1 $1"
fi

PRENDE_NUMFILE=$(($(od -An -N1 -i /dev/random) % 1000000000))
PRENDE_NAMEFILE="personalscript-${PRENDE_NUMFILE}.sh"
echo "#!/bin/bash" > $PRENDE_NAMEFILE
echo $PRENDE_BASESCRIPT >> $PRENDE_NAMEFILE
chmod +x $PRENDE_NAMEFILE
sh $PRENDE_NAMEFILE
rm $PRENDE_NAMEFILE