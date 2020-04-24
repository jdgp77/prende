import React, { Component } from 'react';
import { Link } from "gatsby";
import './Recoverpassword.scss';
import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import Button from '../../elements/form/button/ButtonElement';
import TitleElement from '../../../global-components/elements/title/TitleElement';

class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return <div className="block recover-password" >
      <form>
        <TitleElement type="h1" >Recuperar contraseña</TitleElement>
        <div class="text">Introduce el correo electrónico y te enviaremos las instrucciones para recupera tu contraseña.</div>
        <TextField label="Correo Electrónico" /><br/>
        <Button className="send" variant="contained" color="primary">
          Buscar
        </Button>
      </form>
      
    </div>
  }
}

export default Login;