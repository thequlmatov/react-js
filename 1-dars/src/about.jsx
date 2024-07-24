import React from 'react';

export class SayHello extends React.Component{
  render() {
    return <h1>Hello {this.props.name}</h1>
  }
}

export default SayHello;