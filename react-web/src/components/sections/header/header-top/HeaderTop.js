import React, { Component } from 'react';
import './HeaderTop.scss';
import Paper from '@material-ui/core/Paper';
import { BrowserRouter, Link } from "react-router-dom";

class HeaderTop extends Component {
  render() {
    return <Paper elevation={2}>
      <div className="p-header-top" >
        <nav>
          <ul className="p-no-list-style">
            <li><Link to={{ pathname: "/iniciar-sesion" }} >Iniciar sesión</Link></li>
            <li><Link to={{ pathname: "/registro" }} >Registrate</Link></li>
          </ul>
        </nav>
      </div>
    </Paper>
  }
}

export default HeaderTop;