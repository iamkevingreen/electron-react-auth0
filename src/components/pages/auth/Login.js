import React, { Component, PropTypes as T} from 'react'
import AuthService from '../../../utils/AuthService'
import { Link } from 'react-router'

export default class Login extends Component {
  render() {
    const { auth } = this.props
    return (
      <div className="login">
        <h2>Login</h2>
        <button onClick={auth.login.bind(this)}>Login</button>
        <Link to="/">Back Home</Link>
      </div>
    )
  }
}

Login.propTypes = {
  location: T.object,
  auth: T.instanceOf(AuthService)
}
