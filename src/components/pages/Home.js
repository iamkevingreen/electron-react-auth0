import React, { Component } from 'react'
import { Link } from 'react-router'
import AuthService from '../../utils/AuthService'

export default class Home extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
  }
  render() {
    return (
      <div className="home">
        <div className="home--features">
          <h1>Welcome to Electron React!</h1>
          <h4>What's under the hood?</h4>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Hot Module Reloading with Webpack</li>
            <li>Kept it as unopinionated as I could :D</li>
            <li>SASS because I still hate the state of javascript styling</li>
            <li>Auth0 with google auth enabled</li>
          </ul>
        </div>
      </div>
    )
  }
}
