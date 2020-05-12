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
import { filterTextFormat } from '../../../local-services/rest/connect';
import Carousel from '../../structure/carousel/Carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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

  function allWhatsapp(numWhatsapp){
    let numHtmlWhatsapp = [];
    let numHrefWhatsapp = 'https://api.whatsapp.com/send?phone=57'+ props.pageContext.field_whatsapp + '&text=Hola!%20Me%20gustaría%20saber%20si%20tienes%20domicilio.%20Espero%20su%20respuesta,%20gracias.';

    for (let i=0; i<numWhatsapp.length; i++){
      numHtmlWhatsapp[numHtmlWhatsapp.length] = 
        <ListItem >
          <Link className="icon-what" href={numHrefWhatsapp} target="_blank">
            <WhatsAppIcon />
            <Typography className="text"><span>WhatsApp:</span> {numWhatsapp[i]} </Typography>
          </Link>
        </ListItem>;
    }

    return numHtmlWhatsapp
  }

  return (
    <Layout>
      <div className={classes.root, "tienda-detalle-page page-shop content"}>
        <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
          <Grid item xs={12} sm={8} md={8} id="contec-detalleTienda" className="p-contec-detalletienda" >
            <Paper elevation={0} className={'p-principal'}>
              <h1 className="p" >{props.pageContext.title}</h1>
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <Carousel data={props.pageContext.image} />
                  <div className="p-description" dangerouslySetInnerHTML={{__html: filterTextFormat(props.pageContext.body) }} ></div>
                </Grid>

                <Grid item xs={12} id="contacFooter-storeDetail">
                  <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={6} style={{display: "none"}}>
                      <img className={classes.img, 'p-w100'} alt="complex" src="https://i.pinimg.com/originals/89/34/fe/8934fe9034e62c3f9ef4f02eea2c56ab.png" />
                      <h2>{props.pageContext.title}</h2>
                    </Grid>
                    <Grid item xs={12}>
                      <h3>¿Como comprar?</h3>
                      <List >
                        {allWhatsapp(props.pageContext.field_whatsapp)}
                        
                        {
                          props.pageContext.field_whatsapp[0] !== '' ? <ListItem >
                            <Link className="icon-what" href="https://api.whatsapp.com/send?phone=573015407389&amp;text=Hola,%20me%20gustaría%20saber%20si%20tienes%20domicilio.%20Espero%20su%20respuesta,%20gracias." target="_blank">
                              <WhatsAppIcon />
                              <Typography className="text"><span>WhatsApp:</span> {props.pageContext.field_whatsapp[0]}</Typography>
                            </Link>
                          </ListItem> : <></>
                        }
                        {
                          props.pageContext.phone[0] !== '' ? <ListItem >
                            <ListItemIcon className="icon-phone"> <PhoneIcon /> </ListItemIcon>
                            <Typography className="text"><span>Telefono:</span> {props.pageContext.phone[0]}</Typography>
                          </ListItem> : <></>
                        }
                        {
                          props.pageContext.field_address[0] !== '' ? <ListItem >
                            <ListItemIcon className="icon-location"> <LocationOnIcon /> </ListItemIcon>
                            <Typography className="text"><span>Tienda:</span> {props.pageContext.field_address[0]}</Typography>
                          </ListItem> : <></>
                        }
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
                {allWhatsapp(props.pageContext.field_whatsapp)}

                {
                  props.pageContext.field_whatsapp[0] !== '' ? <ListItem >
                    <Link className="icon-what" href="https://api.whatsapp.com/send?phone=573015407389&amp;text=Hola,%20me%20gustaría%20saber%20si%20tienes%20domicilio.%20Espero%20su%20respuesta,%20gracias." target="_blank">
                      <WhatsAppIcon />
                      <Typography className="text"><span>WhatsApp:</span> {props.pageContext.field_whatsapp[0]}</Typography>
                    </Link>
                  </ListItem> : <></>
                }
                {
                  props.pageContext.phone[0] !== '' ? <ListItem >
                    <ListItemIcon className="icon-phone"> <PhoneIcon /> </ListItemIcon>
                    <Typography className="text"><span>Telefono:</span> {props.pageContext.phone[0]}</Typography>
                  </ListItem> : <></>
                }
              </List>

              <h4>Estado:</h4>
              <p className="contenido"><b>VENTA SOLO PORDOMICILIO</b></p>
              <p className="contenido"><span>Apoyalos,</span> esta el local y solo el local esta cerrado por la cuarentena, pero ellos <b>siguen trabajando en sus casas.</b></p>

              <h4>Donde esta</h4>
              <List >
                {
                  props.pageContext.field_address[0] !== '' ? <ListItem >
                    <ListItemIcon className="icon-location"> <LocationOnIcon /> </ListItemIcon>
                    <Typography className="text"><span>Tienda:</span> {props.pageContext.field_address[0]}</Typography>
                  </ListItem> : <></>
                }
              </List>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.0312959172525!2d-74.03761428590975!3d4.764545542428943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f858b5d851683%3A0x6d0ed51498229ad0!2sCl.%20187%20%2315-42%2C%20Bogot%C3%A1!5e0!3m2!1ses!2sco!4v1587535215757!5m2!1ses!2sco" frameBorder="0" aria-hidden="false" title="ubicacion" ></iframe>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}