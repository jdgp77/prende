import React, { Component } from 'react';
import { Link } from "gatsby";
import './Login.scss';
import TextField from '@material-ui/core/TextField';
import PasswordElement from '../../../global-components/elements/form/password/PasswordElement';
import Button from '@material-ui/core/Button';
import TitleElement from '../../../global-components/elements/title/TitleElement';

class Login extends Component {
  constructor() {
    super();
  }

  render() {
    return <div className="block login" >
      <form>
        <TitleElement type="h1" >Inicia sesión</TitleElement>
        <TextField label="Correo Electrónico" /><br/>
        <PasswordElement />
        <Button className="send" variant="contained" color="primary">
          Iniciar sesión
        </Button>
      </form>
      <div><Link to="/recuperar-contrasena" className="link">¿Olvidaste la contraseña?</Link></div>
      <div>¿No tienes cuenta?,<br/><Link to="/registro" className="link"> Registrate acá</Link></div>
      
    </div>
  }
}

export default Login;