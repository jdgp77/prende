import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TutorialPage from './pages/tutorial/TutorialPage';
import BusquedaPage from './pages/busqueda/BusquedaPage';
import './global.scss';
import './Router.scss';
import LoginPage from './pages/login/login/LoginPage';
import HeaderTop from './sections/header/header-top/HeaderTop';
import HeaderBottom from './sections/header/header-bottom/HeaderBottom';
import Header from './sections/header/header/Header';
import PrincipalTop from './sections/principal/principal-top/PrincipalTop';
import RegisterPage from './pages/login/register/RegisterPage';
import contentPage from './pages/content/contentPage';
import HomePage from './pages/home/HomePage';
import EventPage from './pages/event/EventPage';

class Router extends Component {

  constructor() {
    super();
    
    this.state = {
      load: false,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        load: true,
      });
    }, 0);
  }

  render() {
    return <BrowserRouter>
      <div className={(!this.state.load ? 'p-preloader' : '')} ></div>
      <header className="section header" >
        <HeaderTop></HeaderTop>
        <Header></Header>
        <HeaderBottom></HeaderBottom>
      </header>
      <div className="section profesional" >
        <div className="section principal-sidebar" ></div>
        <div className="section principal-content" >
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/busqueda" component={BusquedaPage} />
            <Route exact path="/iniciar-sesion" component={LoginPage} />
            <Route exact path="/registro" component={RegisterPage} />
            <Route exact path="/tutorial/:tutorial" component={RegisterPage} />
            <Route exact path="/contenido" component={contentPage} />
            <Route exact path="/evento" component={EventPage} />
          </Switch>
        </div>
      </div>
      <footer className="section footer">
        Footer
      </footer>
    </BrowserRouter>
  }
}

export default Router;