import React, { Component } from 'react'

export default class Home extends Component {
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
          </ul>
        </div>
      </div>
    )
  }
}
