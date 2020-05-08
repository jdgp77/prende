import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import './contentPage.scss';
import Layout from "../../layout"
import { filterTextFormat } from '../../../local-services/rest/connect';

class contentPage extends Component {
  render() {
    console.log(this.props);
    return <Layout>
      <div className="page content" >
        <Paper elevation={0} className="p-principal" >
          <h1 className="p" >{this.props.pageContext.title}</h1>
          <div className="p-text" dangerouslySetInnerHTML={{__html: filterTextFormat(this.props.pageContext.body) }} ></div>
        </Paper>
        <div className="sidebar-right" ></div>
      </div>
    </Layout>
  }
}

export default contentPage;