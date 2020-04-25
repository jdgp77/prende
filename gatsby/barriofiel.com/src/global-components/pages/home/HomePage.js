import React, { Component } from 'react';
import './HomePage.scss';
import Grid from '@material-ui/core/Grid';
import { graphql } from 'gatsby';

class HomePage extends Component {
  
  render() {
    return <div className="p-banner-platform">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <h1 className="p" >Conoce a los de tu mismo barrio</h1>
          <div className="p-text" >
            <p>
              Queremos apoyar la economia de Verbenal, ¿Como?, muchas tiendas estan a puerta cerrada y queremos abrirlas desde una aplicación.
            </p>
          </div>
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={6}>
          <img src="/local-images/PacoHome.png" /><br/><br/>
        </Grid>
      </Grid>
    </div>
  }
}

export default HomePage;