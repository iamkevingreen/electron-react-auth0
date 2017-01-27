import React, { Component } from 'react'
import AuthService from '../../utils/AuthService'

export default class Header extends Component {
  constructor(props, context) {
    this.state = {
      profile.props.auth.getProfile()
    }
  }
  render() {
    return (
      <header>
        <div className="header">
          <div className="header--wrapper">
            <div className="header--title">
              <h1>ERA App</h1>
            </div>
            <div className="header--links">
              <Link to="login">Login</Link>
            </div>
          </div>
        </div>
      </header>
    )
  }
}
