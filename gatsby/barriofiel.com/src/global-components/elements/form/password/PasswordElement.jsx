import React, { Component } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

class PasswordElement extends Component {
  constructor() {
    super();

    this.state = {
      showPassword: false,
      password: ''
    }
  }  
  
  handleClickShowPassword = (event) => {
    this.setState({
      showPassword: true
    });
  }

  handleMouseDownPassword = (event) => {
    this.setState({
      showPassword: false
    });
  }

  
  render() {
    return <FormControl>
      <InputLabel htmlhtmlFor="standard-adornment-password">Password</InputLabel>
      <Input
        id="standard-adornment-password"
        type={this.state.showPassword ? 'text' : 'password'}
        className="casa"
        onChange={this.handleChangePassword}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={this.handleClickShowPassword}
              onMouseDown={this.handleMouseDownPassword}
            >
              {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  }
}

export default PasswordElement;