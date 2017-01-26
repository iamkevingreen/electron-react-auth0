import React, { Component } from 'react'

export default class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    )
  }
}
