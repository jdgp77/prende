import React, { Component } from 'react';
import './ImgContent.scss';
import Grid from '@material-ui/core/Grid';
import TitleElement from '../../elements/title/TitleElement';

class ImgContent extends Component {
  render() {
    return <div className="p-banner-platform">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={5}>
          <TitleElement type="h1" >Tu plataforma educativa</TitleElement>
          <div className="p-text" >
            <p>
              Nosotros no queremos realizar una plataforma virtual normal, queremos una como las que tienen las mejores aplicaciónes, estas que demuestran que la edicación puede ser divertida y amigable para todos.
            </p>
            <p>
              Esta plataforma es para mostrar que la mejor forma de publicidad es enseñando, y esta plataforma muestra como hacerlo y como ustedes tambien pueden realizarlo.
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

export default ImgContent;