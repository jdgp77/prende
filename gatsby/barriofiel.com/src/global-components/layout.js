/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Component } from "react"
import PropTypes from "prop-types"

import HeaderTop from './sections/header/header-top/HeaderTop';
import HeaderBottom from './sections/header/header-bottom/HeaderBottom';
import Header from './sections/header/header/Header';
import 'typeface-poppins';
import "./layout.scss";
import Footer from "./sections/footer/footer/Footer";
import FooterButtom from "./sections/footer/footer-buttom/FooterButtom";

class Layout extends Component {

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
    return (
      <>
        <div className={(!this.state.load ? 'p-preloader' : '')} ></div>
        <header className="section header" >
          <HeaderTop></HeaderTop>
          <Header></Header>
          <HeaderBottom></HeaderBottom>
        </header>
        <div>
          <main>{this.props.children}</main>
        </div>
        <footer>
          <Footer></Footer>
          <FooterButtom></FooterButtom>
        </footer>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
