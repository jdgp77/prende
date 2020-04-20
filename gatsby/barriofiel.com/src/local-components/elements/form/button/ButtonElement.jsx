import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './ButtonElement.scss';

class ButtonElement extends Component {
  render() {
    let inputProps = {};
    if (this.props.className) inputProps['className'] = this.props.className;
    if (this.props.variant) inputProps['variant'] = this.props.className;
    if (this.props.color) inputProps['color'] = this.props.color;

    return  <Button {...inputProps} >
      {this.props.children}
    </Button>
  }
}

export default ButtonElement;