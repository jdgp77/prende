import React, { Component } from 'react';
import './ImageElement.scss';


class ImageElement extends Component {
  
  onLoad = () => {
    
  }
  
  render() {
    return <div className={'beforeload ' + this.props.className} >
      <img src={this.props.src} onLoad={this.onLoad} /> 
    </div>
  }
}

export default ImageElement;