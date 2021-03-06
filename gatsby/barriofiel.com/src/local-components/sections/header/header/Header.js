import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.scss';
import { Link } from "gatsby"
import Logo from './Logo';

function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function onClickMobileMenu() {
    setShowMobileMenu(!showMobileMenu);
  };

  return <Paper elevation={1} id="gridHeader">
    <div className="p-header" >
      <div className="p-logo" >
      <Link to='/' ><Logo /></Link>
      </div>

      <nav className="p-principal-menu">
        <ul className="p-no-list-style">
          <li><Link to='/' >Inicio</Link></li>
          <li><Link to='/buscar' >Buscar</Link></li>
          <li><Link to='/eventos' >Eventos</Link></li>
          <li><Link to='/quienes-somos' >Quienes somos</Link></li>
        </ul>
      </nav>
      {/* <div className={classes.root}></div> */}

      {showMobileMenu && <div>
        <div className="p-shadow" onClick={onClickMobileMenu} ></div>
        <Paper elevation={2} className="p-principal-menu-mobile" >
          <nav>
            <ul className="p-no-list-style">
              <li><Link to='/' >Inicio</Link></li>
              <li><Link to='/buscar' >Buscar</Link></li>
              <li><Link to='/eventos' >Eventos</Link></li>
              <li><Link to='/quienes-somos' >Quienes somos</Link></li>
            </ul>
          </nav>
        </Paper>
      </div>}

      <div className="p-hamburger-menu" onClick={onClickMobileMenu} >
        <a href="#" ><MenuIcon color="action" fontSize="large" ></MenuIcon></a>
      </div>
    </div>
  </Paper>;
}

export default Header;