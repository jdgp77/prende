import React, { Component } from 'react';
import './HeaderTop.scss';
import Paper from '@material-ui/core/Paper';
import { Link } from "gatsby"

class HeaderTop extends Component {
  render() {
    return <Paper elevation={2} id="gridHeader-Top">
      <div className="p-header-top" >
        <nav>
          <ul className="p-no-list-style">
            <li><Link to="/iniciar-sesion" >Iniciar sesión</Link></li>
            <li><Link to="/registro" >Registrate</Link></li>
          </ul>
        </nav>
      </div>
    </Paper>
  }
}

export default HeaderTop;