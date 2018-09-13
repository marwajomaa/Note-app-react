import React, { Component } from 'react';

class Hello extends Component {
  render(){
    return (
      <div>
      <h1>Hello {this.props.firstName} from statefull component</h1>
      <p>Learning react version {this.props.version}</p>
      </div>
    )
  }
}

export default Hello;
