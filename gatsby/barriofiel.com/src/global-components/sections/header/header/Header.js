import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.scss';
import { Link } from "gatsby"

class Header extends Component {
  render() {
    return <Paper elevation={1} >
      <div className="p-header" >
        <div className="p-logo" >
          <img src="/LogoEducaciónInteractiva.png" />
        </div>
        <nav className="p-principal-menu">
          <ul className="p-no-list-style">
            <li><Link to='/' >Inicio</Link></li>
            <li><Link to='/buscar' >Buscar</Link></li>
            <li><Link to='/contenido' >Contenido</Link></li>
            <li><Link to='/evento' >Evento</Link></li>
            <li><Link to='/precio' >Precio</Link></li>
          </ul>
        </nav>
        <div className="p-hamburger-menu" >
          <a href="#" ><MenuIcon  fontSize="large" style={{ color: '#FFF' }} ></MenuIcon></a>
        </div>
        <div>
          <Paper elevation={2} className="p-principal-menu-mobile" >
            <nav>
              <ul className="p-no-list-style">
                <li><Link to={{ pathname: '/' }} >Inicio</Link></li>
                <li><Link to={{ pathname: '/busqueda' }} >Buscar</Link></li>
                <li><Link to={{ pathname: '/' }} >Precio</Link></li>
              </ul>
            </nav>
          </Paper>
        </div>
      </div>
    </Paper>;
  }
}

export default Header;