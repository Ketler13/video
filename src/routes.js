import React from 'react'
import {Router, Route, Redirect, IndexRedirect, IndexRoute} from 'react-router'
import history from './history'
import App from './RouteHandlers/App'

export default (
  <Router history = {history}>
    <Route path="/" component = {App}>
    </Route>
  </Router>
)
