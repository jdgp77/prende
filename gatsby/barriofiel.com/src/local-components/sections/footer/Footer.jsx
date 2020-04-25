import React, { Component } from 'react';
import './Footer.scss';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Logo from './Logo';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  img: {
    width: '100%',
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root, "section-footer"}>
      <Grid className="rowGrid" container direction="row" justify="space-evenly" spacing={2}>
        <Grid item xs={12} sm={6} md={3} className="grid">
          <Paper className={classes.paper, "gridPaper"}>
              <Logo />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="grid">
          <Paper className={classes.paper, "gridPaper"}>
            <Typography variant="h5">Nosotros</Typography>
            <List className="gridContenido">
              <ListItemLink href="#">
                <ListItemText primary="Buscar tienda" />
              </ListItemLink>
              <ListItemLink href="#">
                <ListItemText primary="Quienes somos" />
              </ListItemLink>
              <ListItemLink href="#">
                <ListItemText primary="Misión & Visión" />
              </ListItemLink>
              <ListItemLink href="#">
                <ListItemText primary="¿Lo que quieres en tu barrio?" />
              </ListItemLink>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="grid">
          <Paper className={classes.paper, "gridPaper"}>
            <Typography variant="h5">Plataforma</Typography>
            <List className="gridContenido">
              <ListItemLink href="#">
                <ListItemText primary="Descarga para Android" />
              </ListItemLink>
              <ListItemLink href="#">
                <ListItemText primary="Descarga para Iphone" />
              </ListItemLink>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="grid">
          <Paper className={classes.paper, "gridPaper"}>
            <Typography variant="h5">Contactanos</Typography>
            <List className="gridContenido icons">
              <ListItemLink href="#">
                <ListItemIcon> <WhatsAppIcon className="ico-whats" /> </ListItemIcon>
              </ListItemLink>
              <ListItemLink href="#">
                <ListItemIcon> <FacebookIcon className="ico-faceb" /> </ListItemIcon>
              </ListItemLink>
              <ListItemLink href="#">
                <ListItemIcon> <TwitterIcon className="ico-twitt" /> </ListItemIcon>
              </ListItemLink>
              <ListItemLink href="#">
                <ListItemIcon> <InstagramIcon className="ico-instag" /> </ListItemIcon>
              </ListItemLink>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
