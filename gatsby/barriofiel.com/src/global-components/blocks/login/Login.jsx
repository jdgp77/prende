import React, { Component } from 'react';
import './Login.scss';
import TextField from '@material-ui/core/TextField';
import PasswordElement from '../../elements/form/password/PasswordElement';
import Button from '@material-ui/core/Button';
import TitleElement from '../../elements/title/TitleElement';
import { Link } from "gatsby"

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
          Enviar
        </Button>
        <Link to="/olvido-su-contrasena">¿Olvidaste tu contraseña?</Link>
        <Link to="/registro">¿Quieres registrarte?</Link>
      </form>
    </div>
  }
}

export default Login;