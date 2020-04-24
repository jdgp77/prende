import React, { Component } from 'react';
import { Link } from "gatsby";
import './Login.scss';
import TextField from '@material-ui/core/TextField';
import PasswordElement from '../../../global-components/elements/form/password/PasswordElement';
//import Button from '@material-ui/core/Button';
import Button from '../../elements/form/button/ButtonElement';
import TitleElement from '../../../global-components/elements/title/TitleElement';
import Grid from '@material-ui/core/Grid';

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
      <Grid container spacing={3}>
        <Grid item xs={6} className="link">
          <Link to="/recuperar-contrasena" >¿Olvidaste la contraseña?</Link>
        </Grid>
        <Grid item xs={6} className="link right">
        ¿No tienes cuenta?,<br/><Link to="/registro"> Registrate acá</Link>
        </Grid>
      </Grid>
    </div>
  }
}

export default Login;