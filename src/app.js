import React, { Component } from 'react'
import { render } from 'react-dom'


class App extends Component{
  render(){
    return (
      <h1>welcome to github notetake</h1>
    )
  }
}

render(<App/>, document.getElementById('app'))
