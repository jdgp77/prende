import React from 'react';
import './shopPage.scss';

import Layout from "../../layout"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { filterTextFormat } from '../../../global-services/rest/connect';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    width: '100%',
  },
  img: {
    width: '100%',
    margin: 'auto',
    display: 'block',
    maxWidth: '50%',
  },
}));

export default function TiendaDetalle(props) {
  const classes = useStyles();

  return (
    <Layout>
      <div className={classes.root, "tienda-detalle-page page-shop content"}>
        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
          <Grid item xs={12} sm={8} md={8} id="contec-detalleTienda" className="p-contec-detalletienda" >
            <Paper elevation={0} className={'p-principal'}>
              <h1 className="p" >{props.pageContext.title}</h1>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <img className={classes.image, 'p-w100'} alt="complex" src={props.pageContext.image[0]} />
                  <div className="p-description" dangerouslySetInnerHTML={{__html: filterTextFormat(props.pageContext.body) }} ></div>
                </Grid>

                <Grid item xs={12} id="contacFooter-storeDetail">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={4} md={4}>
                      <img className={classes.img, 'p-w100'} alt="complex" src="https://i.pinimg.com/originals/89/34/fe/8934fe9034e62c3f9ef4f02eea2c56ab.png" />
                      <h2>{props.pageContext.title}</h2>
                    </Grid>
                    <Grid item xs={8}>
                      <h3>¿Como comprar?</h3>
                      <List >
                        <ListItem >
                          <Link className="icon-what" href="https://api.whatsapp.com/send?phone=573015407389&amp;text=Hola,%20me%20gustaria%20daber%20si%20tienes%20domicilio.%20Espero%20su%20respuesta,%20gracias." target="_blank">
                            <WhatsAppIcon />
                            <Typography className="text"><span>WhatsApp:</span> 3015407389</Typography>
                          </Link>
                        </ListItem>
                        <ListItem >
                          <ListItemIcon className="icon-phone"> <PhoneIcon /> </ListItemIcon>
                          <Typography className="text"><span>Telefono:</span> 8405083</Typography>
                        </ListItem>
                        <ListItem >
                          <ListItemIcon className="icon-location"> <LocationOnIcon /> </ListItemIcon>
                          <Typography className="text"><span>Tienda:</span> Calle 187 # 15 - 42</Typography>
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} sm={4} md={4} id="contac-detalleTienda">
            <Paper className={classes.paper} id="conten">
              <img className={classes.img, 'p-w100'} alt="complex" src="https://i.pinimg.com/originals/89/34/fe/8934fe9034e62c3f9ef4f02eea2c56ab.png" />
              <h2>{props.pageContext.title}</h2>
              <h3>¿Como comprar?</h3>
              <List>
                <ListItem >
                  <Link className="icon-what" href="https://api.whatsapp.com/send?phone=573015407389&amp;text=Hola,%20me%20gustaria%20daber%20si%20tienes%20domicilio.%20Espero%20su%20respuesta,%20gracias." target="_blank"> <WhatsAppIcon />
                    <Typography className="text"><span>WhatsApp:</span> 3015407389</Typography>
                  </Link>
                </ListItem>
                <ListItem >
                  <ListItemIcon className="icon-phone"> <PhoneIcon /> </ListItemIcon>
                  <Typography className="text"><span>Telefono:</span> 8405083</Typography>
                </ListItem>
              </List>

              <h4>Estado:</h4>
              <p className="contenido"><b>VENTA SOLO PORDOMICILIO</b></p>
              <p className="contenido"><span>Apoyalos,</span> esta el local y solo el local esta cerrado por la cuarentena, pero ellos <b>siguen trabajando en sus casas.</b></p>

              <h4>Donde esta</h4>
              <List >
                <ListItem >
                  <ListItemIcon className="icon-location"> <LocationOnIcon /> </ListItemIcon>
                  <Typography className="text"><span>Tienda:</span> Calle 187 # 15 - 42</Typography>
                </ListItem>
              </List>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.0312959172525!2d-74.03761428590975!3d4.764545542428943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f858b5d851683%3A0x6d0ed51498229ad0!2sCl.%20187%20%2315-42%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1587535215757!5m2!1ses!2sco" frameBorder="0" aria-hidden="false" title="ubicacion" ></iframe>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}