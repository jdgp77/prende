import React, { Component } from 'react';
import './ForgetPassword.scss';
import TextField from '@material-ui/core/TextField';
import TitleElement from '../../elements/title/TitleElement';
import ButtonElement from '../../elements/form/button/ButtonElement';

class ForgetPassword extends Component {
  constructor() {
    super();
  }

  render() {
    return <div className="block forget-pasword" >
    <form>
      <TitleElement type="h1" >¿Olvidaste la contraseña?</TitleElement>
      <TextField label="Correo Electrónico" /><br/>
      <ButtonElement className="send" variant="contained" color="primary">
        Enviar
      </ButtonElement>
    </form>
    </div>
  }
}

export default ForgetPassword;
