import React from 'react'
import { Router, Route, IndexRedirect } from 'react-router'
import history from './history'
import App from './RouteHandlers/App'
import VideoPage from './RouteHandlers/VideoPage'
import Video from './RouteHandlers/Video'
import SearchPage from './RouteHandlers/SearchPage'

export default (
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRedirect to='/search'/>
      <Route path='/search' component={SearchPage} />
      <Route path='/video' component={VideoPage}>
        <Route path=':id' components={{video: Video}}/>
      </Route>
    </Route>
  </Router>
)
