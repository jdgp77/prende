import React, { Component } from 'react';
import { Link } from "gatsby";
import './Createstore.scss';
import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import Button from '../../elements/form/button/ButtonElement';
import TitleElement from '../../../global-components/elements/title/TitleElement';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

class Register extends Component {
  constructor() {
    super();
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
        <TextField label="Whatsapp" /><br/>
        <TextField label="Direccion" /><br/>
        <TextField label="Telefono fijo/Celular sin whatsapp" /><br/>
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