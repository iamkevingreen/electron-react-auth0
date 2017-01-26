import React, { Component } from 'react'

export default class Layout extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance from route to children
      })
    }
    return (
      <div className="app">
        {children}
      </div>
    )
  }
}
