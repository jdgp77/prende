import React from "react"
import { Link } from "gatsby"

import Layout from "../global-components/layout"
import Image from "../global-components/image"
import SEO from "../global-components/seo"
import Grid from '@material-ui/core/Grid';


//import HeaderTop from '../global-components/sections/header/header-top/HeaderTop';
//import HeaderBottom from '../global-components/sections/header/header-bottom/HeaderBottom';
import Header from '../global-components/sections/header/header/Header';
import { Component } from "react"
import ImgContent from "../global-components/blocks/img-content/ImgContent"


class IndexPage extends Component {

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
    return <Layout>
        <div className="section profesional" >
          <div className="section principal-sidebar" ></div>
          <div className="section principal-content" >
            <ImgContent />
          </div>
        </div>
      </Layout>
  }
}


export default IndexPage
