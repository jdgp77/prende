import React from "react"

import Layout from "../local-components/layout"
import { Component } from "react"
import ImgContent from "../local-components/blocks/img-content/ImgContent"
import BuscarBlock from "../local-components/blocks/buscar/BuscarBlock";
import Top from "../local-components/sections/top/Top";


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
        <Top/>
        <BuscarBlock></BuscarBlock>
        <div className="section profesional" >
          {/* <div className="section principal-sidebar" ></div> */}
          <div className="section principal-content" >
            <ImgContent />
          </div>
        </div>
      </Layout>
  }
}


export default IndexPage
