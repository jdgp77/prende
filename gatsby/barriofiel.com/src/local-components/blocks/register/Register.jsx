import React, { Component } from 'react';
import './Register.scss';
import TextField from '@material-ui/core/TextField';
import PasswordElement from '../../../global-components/elements/form/password/PasswordElement';
import Button from '@material-ui/core/Button';
import TitleElement from '../../../global-components/elements/title/TitleElement';

class Register extends Component {
  constructor() {
    super();
  }

  render() {
    return <div className="block login" >
      <form>
        <TitleElement type="h1" >Registrate</TitleElement>
        <TextField label="Nombres" /><br/>
        <TextField label="Apellidos" /><br/>
        <TextField label="Correo Electrónico" /><br/>
        <PasswordElement />
        <Button className="send" variant="contained" color="primary">
          Registrarme
        </Button>
      </form>
    </div>
  }
}

export default Register;