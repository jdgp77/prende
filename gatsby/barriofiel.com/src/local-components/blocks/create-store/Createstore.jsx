import React, { Component } from 'react';
import { Link } from "gatsby";
import './Createstore.scss';
import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import Button from '../../elements/form/button/ButtonElement';
import TitleElement from '../../../global-components/elements/title/TitleElement';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
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
      count_whatsapp : newCountWhatsApp,
    })
  }

  addNumberAddress = () => {
    debugger;
    let newCountAddress = this.state.count_address + 1;
    this.setState({
      count_address : newCountAddress
    })
  }

  addNumberTelephone = () => {
    debugger;
    let newCountTelephone = this.state.count_telephone + 1;
    this.setState({
      count_telephone : newCountTelephone
    })
  }

  getWhatsApp = (count_whatsapp) => {
    let arrayWhatsApp = [];
    for (let index = 0; index < count_whatsapp; index++) {
      arrayWhatsApp[arrayWhatsApp.length] = <TextField label="Whatsapp" />;
    }
    return arrayWhatsApp
  }

  getAddress = (count_address) => {
    let arrayAddress = [];
    for (let index = 0; index < count_address; index++) {
      arrayAddress[arrayAddress.length] = <TextField label="Direccion" />;
    }
    return arrayAddress
  }

  getTelephones = (count_telephone) => {
    let arrayTelephones = [];
    for (let index = 0; index < count_telephone; index++) {
      arrayTelephones[arrayTelephones.length] = <TextField label="Telefono fijo/Celular sin whatsapp" />;
    }
    return arrayTelephones
  }

  render() {
    return <div className="block create-store" >
      <form>
        <TitleElement type="h1" >Crear tienda</TitleElement>
        <div class="text-small center">Entre mas datos llenes mas probable es que te vean.</div>
        <TextField label="Nombre Tienda" /><br/>
        <TextField label="Descripción" /><br/>
        <TextField label="Descripción Corta" /><br/>
        <TextField label="Subir foto" /><br/>
        <TextField label="(Opcional) Subir logo de la tienda" /><br/>
        { this.getWhatsApp(this.state.count_whatsapp) }
        <AddCircleIcon id="iconWhatsapp" name="iconWhatsapp" onClick={this.addNumberWhatsApp}></AddCircleIcon>
        { this.getAddress(this.state.count_whatsapp) }
        <AddCircleIcon id="iconAddress" name="iconAddress" onClick={this.addNumberAddress}></AddCircleIcon>
        { this.getTelephones(this.state.count_whatsapp) }
        <AddCircleIcon id="iconTelephone" name="iconTelephone" onClick={this.addNumberTelephone}></AddCircleIcon>
        <FormControlLabel
          value="yes"
          control={<Switch color="primary" />}
          label="¿Tu tienda esta abierta en cuarentena?"
          labelPlacement="top"
          name="checkedOpenCuarentine"
          color="primary"
        />
        <div class="text center">Acepto <Link to="/terminos" className="link">terminos y condiciones</Link></div>
        <Button className="send" variant="contained" color="primary">
          Crear
        </Button>
      </form>
    </div>
  }
}

export default Register;