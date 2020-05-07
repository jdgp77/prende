import React from 'react';
import './Footer.scss';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import Logo from './Logo';
import { Link } from "gatsby"

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

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root,"section-footer"}>
      <Grid className="rowGrid" container direction="row" justify="space-between" alignItems="flex-start" spacing={2}>
        <Grid item xs={12} sm={6} md={3} className="grid">
          <Paper className={classes.paper, "gridPaper"} id="logo">
              <Logo />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="grid">
          <Paper className={classes.paper, "gridPaper"}>
            <Typography variant="h5">Barrio Fiel</Typography>
            <List className="gridContenido">
              <li>
                <Link to='/' >
                  <ListItemText primary="Inicio" />
                </Link>
              </li>
              <li>
                <Link to='/buscar' >
                  <ListItemText primary="Buscar tienda" />
                </Link>
              </li>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="grid">
          <Paper className={classes.paper, "gridPaper"}>
            <Typography variant="h5">Nosotros</Typography>
            <List className="gridContenido">
              <li>
                <Link to='/quienes-somos' >
                  <ListItemText primary="Quienes somos" />
                </Link>
              </li>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} className="grid">
          <Paper className={classes.paper, "gridPaper"}>
            <Typography variant="h5">Contacta a<br/>BarrioFiel Verbenal</Typography>
            <List className="gridContenido icons">
              <Typography className="text">Siguenos o comunicate con nosotros:</Typography>
              <Container wrap="nowrap">
                <li>
                  <Link to='/#' >
                    <ListItemIcon> <WhatsAppIcon className="ico-whats" /> </ListItemIcon>
                  </Link>
                </li>
                <li>
                  <a href="https://www.facebook.com/Barrio-Fiel-109953560704094/?__tn__=%2Cd%2CP-R&eid=ARAL5lJ5UENVvhZcyNd6VW5qqHjH_CMOP1r6rcKvdAxcsdYJzGtvFHHEu9Uurp15bEdKACCMiXnY6v9d" target="_black" >
                    <ListItemIcon> <FacebookIcon className="ico-faceb" /> </ListItemIcon>
                  </a>
                </li>
                <li>
                  <Link to='/#' >
                    <ListItemIcon> <TwitterIcon className="ico-twitt" /> </ListItemIcon>
                  </Link>
                </li>
                <li>
                  <Link to='/#' >
                  </Link>
                  <a href="https://www.instagram.com/barrio_fiel/" target="_black" >
                    <ListItemIcon> <InstagramIcon className="ico-instag" /> </ListItemIcon>
                  </a>
                </li>
              </Container>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
