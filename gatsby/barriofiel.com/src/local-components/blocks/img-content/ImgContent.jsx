import React, { Component } from 'react';
import './ImgContent.scss';
import Grid from '@material-ui/core/Grid';
import TitleElement from '../../elements/title/TitleElement';
import Banner from './Banner';

class ImgContent extends Component {
  render() {
    return <div className="p-banner-platform">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <TitleElement type="h1" >Compra en Verbenal</TitleElement>
          <div className="p-text" >
            <p>
              No importa tipo de buen tienda o buen negocio, <strong>inscribete</strong> y buscaremos conectarte con tus clientes del barrio.
            </p>
            <p>
              Queremos apoyar la <strong>economia de Verbenal</strong>.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={6} className="p-banner" >
          <Banner /><br/><br/>
        </Grid>
      </Grid>
    </div>
  }
}

export default ImgContent;