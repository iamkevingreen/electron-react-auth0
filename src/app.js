import './styles/app.scss'

import React, { Component } from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Layout from './Layout'
import Home from './components/pages/Home'

class App extends Component {
  render() {
    return (
      <div className="app">Welcome to the Electron</div>
    )
  }
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
    </Route>
  </Router>
), document.getElementById('app'));
