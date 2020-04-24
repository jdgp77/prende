import React, { Component } from 'react';
import './Register.scss';
import TextField from '@material-ui/core/TextField';
import PasswordElement from '../../../global-components/elements/form/password/PasswordElement';
//import Button from '@material-ui/core/Button';
import Button from '../../elements/form/button/ButtonElement';
import TitleElement from '../../../global-components/elements/title/TitleElement';
import { Link } from "gatsby";

class Register extends Component {
  constructor() {
    super();
  }

  render() {
    return <div className="block register" >
      <form>
        <TitleElement type="h1" >Registrate</TitleElement>
        <TextField label="Nombres" /><br/>
        <TextField label="Apellidos" /><br/>
        <TextField label="Correo Electrónico" /><br/>
        <PasswordElement />
        <Button className="send" variant="contained" color="primary">
          Registrarme
        </Button>
        <div class="text">¿Ya tienes una cuenta?, <Link to="/iniciar-sesion">Inicia sesión</Link></div>
      </form>
    </div>
  }
}

export default Register;