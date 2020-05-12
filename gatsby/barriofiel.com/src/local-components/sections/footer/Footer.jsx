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
                  <a href="https://api.whatsapp.com/send?phone=573153951726&amp;text=Hola!!,%20señores%20de%20barriofiel.com%20quiero%20preguntar%20algo.%20Espero%20su%20respuesta,%20gracias." target="_blank" rel="nofollow noopener" >
                    <ListItemIcon> <WhatsAppIcon className="ico-whats" /> </ListItemIcon>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/BarrioFielOficial/" target="_blank" rel="nofollow noopener" >
                    <ListItemIcon> <FacebookIcon className="ico-faceb" /> </ListItemIcon>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/barriofiel/" target="_blank" rel="nofollow noopener" >
                    <ListItemIcon> <TwitterIcon className="ico-twitt" /> </ListItemIcon>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/barrio_fiel/" target="_blank" rel="nofollow noopener" >
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
