import React, { Component } from 'react';

class TitleElement extends Component {
  
  title(type) {
    var arClass = ['p'];
    if (this.props.className) {
      arClass[arClass.length] = this.props.className;
    }
    switch (type) {
      case 'h1':
        return <h1 className={arClass.join(' ')} >{this.props.children}</h1>
      case 'h2':
        return <h2 className={arClass.join(' ')} >{this.props.children}</h2>
      case 'h3':
        return <h3 className={arClass.join(' ')} >{this.props.children}</h3>
      case 'h4':
        return <h4 className={arClass.join(' ')} >{this.props.children}</h4>
      default:
        break;
    }
  }
  
  render() {
    return this.title(this.props.type);
  }
}

export default TitleElement;