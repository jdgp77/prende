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

function TiendaDetalle(props) {
  const classes = useStyles();

  function allWhatsapp(numWhatsapp){
    let numHtmlWhatsapp = [];
    let numHrefWhatsapp = 'https://api.whatsapp.com/send?phone=57'+ props.pageContext.field_whatsapp + '&text=¡Hola!!,%20Te%20vimos%20en%20BarrioFiel.com,%20estamos%20interesados%20en%20tus%20productos.';

    if (numWhatsapp.length == 1 && numWhatsapp[0] == "") {
      return <></>;
    }

    for (let i=0; i<numWhatsapp.length; i++){
      numHtmlWhatsapp[numHtmlWhatsapp.length] = <ListItem key={i} >
          <Link className="icon-what" href={numHrefWhatsapp} target="_blank" >
            <WhatsAppIcon />
            <Typography className="text"><span>WhatsApp:&nbsp;</span> {numWhatsapp[i]} </Typography>
          </Link>
        </ListItem>;
    }

    return numHtmlWhatsapp
  }

  function allPhone(numPhone){
    let numHtmlPhone = [];

    if (numPhone.length == 1 && numPhone[0] == "") {
      return <></>;
    }

    for (let i=0; i<numPhone.length; i++){
      numHtmlPhone[numHtmlPhone.length] = <ListItem key={i}>
          <ListItemIcon className="icon-phone" >
            <PhoneIcon />
            <Typography className="text"><span>Telefono:&nbsp;</span> {numPhone[i]} </Typography>
          </ListItemIcon>
        </ListItem>;
    }

    return numHtmlPhone
  }

  function allAddress(numAddress){
    let numHtmlAddress = [];

    for (let i=0; i<numAddress.length; i++) {
      numHtmlAddress[numHtmlAddress.length] = <ListItem key={i}>
          <ListItemIcon className="icon-location" >
            <LocationOnIcon />
            <Typography className="text"><span>Tienda:&nbsp;</span> {numAddress[i]} </Typography>
          </ListItemIcon>
        </ListItem>;
    }

    return numHtmlAddress
  }
  
  function onMarkerClick() {
    
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
                        {allPhone(props.pageContext.field_phone)}
                        {allAddress(props.pageContext.field_address)}
                      </List>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4} md={4} id="contac-detalleTienda">
            <Paper className={classes.paper} id="conten">
              <h2>{props.pageContext.title}</h2>
              <h3>¿Como comprar?</h3>
              <List>
                {allWhatsapp(props.pageContext.field_whatsapp)}
                {allPhone(props.pageContext.field_phone)}
              </List>

              <h4>Donde esta</h4>
              <List >
                {allAddress(props.pageContext.field_address)}
              </List>
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

export default TiendaDetalle;