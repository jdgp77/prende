import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"


//import HeaderTop from '../components/sections/header/header-top/HeaderTop';
//import HeaderBottom from '../components/sections/header/header-bottom/HeaderBottom';
import Header from '../components/sections/header/header/Header';
import { Component } from "react"


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
          <div className="p-banner-platform">
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5}>
                <h1 className="p" >Tu plataforma educativa</h1>
                <div className="p-text" >
                  <p>
                    Nosotros no queremos realizar una plataforma virtual normal, queremos una como las que tienen las mejores aplicaciónes, estas que demuestran que la edicación puede ser divertida y amigable para todos.
                  </p>
                  <p>
                    Esta plataforma es para mostrar que la mejor forma de publicidad es enseñando, y esta plataforma muestra como hacerlo y como ustedes tambien pueden realizarlo.
                  </p>
                </div>
              </Grid>
              <Grid item xs={12} sm={1}></Grid>
              <Grid item xs={12} sm={6}>
                <img src="/images/PacoHome.png" /><br/><br/>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </Layout>
  }
}


export default IndexPage
