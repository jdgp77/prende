import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import './Footer.scss';

class Footer extends Component {
  render() {
    return <div className="secton-footer" >
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          
        </Grid>
        <Grid item xs={6} sm={3}>
          <h2>Nosotros</h2>
        </Grid>
        <Grid item xs={6} sm={3}>
          
        </Grid>
        <Grid item xs={6} sm={3}>
          
        </Grid>
      </Grid>
    </div>;
  }
}

export default Footer;