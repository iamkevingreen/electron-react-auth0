import React, { Component } from 'react'
import AuthService from '../../utils/AuthService'
import { Link } from 'react-router'

export default class Header extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      profile: props.auth.getProfile()
    }
    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    })
    this.renderNav = this.renderNav.bind(this)
  }
  componentDidMount() {
    console.log(this.props.auth)
  }
  renderNav(auth) {
    if (Object.keys(this.state.profile).length === 0) {
      return <a onClick={auth.login.bind(this)}>Login</a>
    } else {

      return (
        <div>
          <h5>Welcome, {this.state.profile.given_name}</h5>
          <a onClick={auth.logout.bind(this)}>Logout</a>
        </div>
      )
    }
  }
  render() {
    const { auth } = this.props
    return (
      <header>
        <div className="header">
          <div className="header--wrapper">
            <div className="header--title">
              <Link to="/"><h1>ERA App</h1></Link>
            </div>
            <div className="header--links">
              {this.renderNav(auth)}
            </div>
          </div>
        </div>
      </header>
    )
  }
}
