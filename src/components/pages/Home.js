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
  componentDidMount() {
    console.log('state', this.state)
  }
  render() {
    return (
      <div className="home">
        <h1>Welcome to Electron React!</h1>
        <div className="home--features">
          <h4>What's under the hood?</h4>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>Hot Module Reloading with Webpack</li>
            <li>Kept it as unopinionated as I could :D</li>
            <li>SASS because I still hate the state of javascript styling</li>
            <li>Auth0 with google auth enabled</li>
          </ul>
          <br />
          <Link to="login">Login with Auth0</Link>
          <p>If you are logged in you will see cool stuff:</p>
          <ul>
            <li>name: {this.state.profile.given_name} {this.state.profile.family_name}</li>
            <li>email: {this.state.profile.email}</li>
          </ul>
        </div>
      </div>
    )
  }
}
