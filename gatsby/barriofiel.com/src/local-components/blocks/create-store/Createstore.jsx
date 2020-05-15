import React, { Component } from 'react';
import { Link } from "gatsby";
import './Createstore.scss';
import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import Button from '../../elements/form/button/ButtonElement';
import TitleElement from '../../../global-components/elements/title/TitleElement';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import jGet, { jPost } from '../../../local-services/rest/connect';
import AddCircleIcon from '@material-ui/icons/AddCircle';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      count_whatsapp : 1,
      count_address : 1,
      count_telephone : 1,
    }
  }

  addNumberWhatsApp = () => {
    let newCountWhatsApp = this.state.count_whatsapp + 1;
    this.setState({
      //...this.state,
      count_whatsapp : newCountWhatsApp,
    })
  }

  addNumberAddress = () => {
    let newCountAddress = this.state.count_address + 1;
    this.setState({
      //...this.state,
      count_address : newCountAddress
    })
  }

  addNumberTelephone = () => {
    let newCountTelephone = this.state.count_telephone + 1;
    this.setState({
      //...this.state,
      count_telephone : newCountTelephone
    })
  }

  getWhatsApp = (count_whatsapp) => {
    let arrayWhatsApp = [];
    for (let index = 0; index < count_whatsapp; index++) {
      arrayWhatsApp[arrayWhatsApp.length] = <TextField label="Whatsapp" 
        id="whatsapp_tienda" name="whatsapp_tienda"/>;
    }
    return arrayWhatsApp
  }

  getAddress = (count_address) => {
    let arrayAddress = [];
    for (let index = 0; index < count_address; index++) {
      arrayAddress[arrayAddress.length] = <TextField label="Direccion" 
        id="direccion_tienda" name="direccion_tienda"/>;
    }
    return arrayAddress
  }

  getTelephones = (count_telephone) => {
    let arrayTelephones = [];
    for (let index = 0; index < count_telephone; index++) {
      arrayTelephones[arrayTelephones.length] = <TextField 
        label="Telefono fijo/Celular sin whatsapp" id="telefono_tienda" 
        name="telefono_tienda"/>;
    }
    return arrayTelephones
  }

  handleClick(e) {
    e.preventDefault();

    //let nombre_tienda = 'test';
    //let descripcion_larga_tienda = 'test';
    let nombre_tienda = document.getElementById('nombre_tienda').value;
    let descripcion_larga_tienda = document.getElementById('descripcion_larga_tienda').value;

    let descripcion_corta_tienda = document.getElementById('descripcion_corta_tienda').value;
    let whatsapp_tienda = document.getElementById('whatsapp_tienda').value;
    let direccion_tienda = document.getElementById('direccion_tienda').value;
    let telefono_tienda = document.getElementById('telefono_tienda').value;
    
    var data = JSON.stringify({
      webform_id: 'tiendas',
      nombre_tienda: nombre_tienda,
      descripcion_larga_tienda: descripcion_larga_tienda,
      descripcion_corta_tienda: descripcion_corta_tienda,
      whatsapp_tienda: whatsapp_tienda,
      direccion_tienda: direccion_tienda,
      telefono_tienda: telefono_tienda,
    });

    jPost({
      url: '/webform_rest/submit?_format=json',
      data: data,
      then: (result) => {
        if (result.error) {
          if (result.error.name) {
            window.M.toast({ html: 'Error nombre: ' + result.error.name });
          }
          if (result.error.email) {
            window.M.toast({ html: 'Error correo: ' + result.error.email });
          }
        }
        else {
          window.M.toast({ html: 'Enviado Correctamente' });
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
        }
      },
      err: (result) => {
        console.log(result);
        //window.M.toast({ html: 'Lo sentimos, pero no podemos completar el proceso de suscripción ahora.' });
      }
    });
  }

  render() {
    //console.log(this.state)
    return <div className="block create-store" >
      <form method="post" action="/webform_rest/submit">
        <TitleElement type="h1" >Crear tienda</TitleElement>
        <div class="text-small center">Entre mas datos llenes mas probable es que te vean.</div>
        <TextField id="nombre_tienda" name="nombre_tienda" label="Nombre Tienda" /><br/>
        <TextField id="descripcion_larga_tienda" name="descripcion_larga_tienda" 
          label="Descripción" multiline rows={4}/><br/>
        <TextField label="Descripción Corta" id="descripcion_corta_tienda" 
          name="descripcion_corta_tienda"/><br/>
        <TextField label="Subir foto" id="foto_tienda" name="foto_tienda"/><br/>
        <TextField label="(Opcional) Subir logo de la tienda" id="logo_tienda" 
          name="logo_tienda"/><br/>
        { this.getWhatsApp(this.state.count_whatsapp) }
        <AddCircleIcon id="iconWhatsapp" name="iconWhatsapp" onClick={this.addNumberWhatsApp}></AddCircleIcon>
        { this.getAddress(this.state.count_address) }
        <AddCircleIcon id="iconAddress" name="iconAddress" onClick={this.addNumberAddress}></AddCircleIcon>
        { this.getTelephones(this.state.count_telephone) }
        <AddCircleIcon id="iconTelephone" name="iconTelephone" onClick={this.addNumberTelephone}></AddCircleIcon>
        <div class="text center">Acepto <Link to="/terminos" className="link">terminos y condiciones</Link></div>
        <Button className="send" variant="contained" color="primary" onClick={this.handleClick}>
          Crear
        </Button>
      </form>
    </div>
  }
}

export default Register;