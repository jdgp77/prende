import React, { Component } from 'react';
import './PrincipalTop.scss'

import Grid from '@material-ui/core/Grid';
import FirstPaco from './images/FirstPaco.png';
import Paco from './images/Paco.png';
import FlechaAPaco from './images/FlechaAPaco.png';


class PrincipalTop extends Component {
  
  constructor() {
    super();

    this.state = { classes: 'useStyles()' };
  }

  render() {

    return <div className="p-principal-top">
      <h1>Gestión de conocimiento</h1>
      <p>Aprende de manejar tu activo más importante: <strong>El conocimiento</strong></p>
      <Grid className="p-grid" container spacing={2}>
        <Grid item xs={12} sm={5}>
          <img src={FirstPaco} /><br/><br/>
          <strong>Junior:</strong><br/>Tiene que volver a aprender en cada proyecto
        </Grid>
        <Grid item xs={12} sm={2}>
          <br/>
          <img src={FlechaAPaco} /><br/>
        </Grid>
        <Grid item xs={12} sm={5}>
          <img src={Paco} /><br/><br/>
          <strong>Profesional:</strong><br/>Mayor Calidad, más efectivo, menos tiempo,
        </Grid>
      </Grid>
    </div>;
  }
}

export default PrincipalTop;