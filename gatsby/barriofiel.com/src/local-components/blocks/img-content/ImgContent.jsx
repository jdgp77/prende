import React from 'react';
import './ImgContent.scss';
import Grid from '@material-ui/core/Grid';
import TitleElement from '../../elements/title/TitleElement';
import Typography from '@material-ui/core/Typography';
import Banner from './Banner';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
  },
}));

export default function ImgContent() {
  const classes = useStyles();
  return (
    <div className={classes.root, "p-banner-platform"}>
      <div>
        <Grid container direction="row" justify="space-around" alignItems="center" spacing={3}>
          <Grid item xs sm md>
            <Paper className={classes.paper} id="contec-index">
              <TitleElement type="h1" >Compra dentro de Verbenal</TitleElement>
              <div className="p-text" >
                <Typography variant="body1" >Verbenal tiene muchisimos tipos de negocios, y queremos que te conectes con todos: Papelerias, tiendas o arreglo de equipos.</Typography>
                <Typography variant="body1" >Si tu tienes un negocio, y no sabes como vender en linea contactate con nosotros y te ayudaremos.</Typography>
              </div>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={6} className="p-banner" >
            <Paper className={classes.paper} id="logo-index">
              <Banner />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}