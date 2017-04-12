import React from 'react'

import { Router, Route, hashHistory,IndexRoute } from 'react-router'

import Main from '../containers/Main.js'
import Home from '../components/Home.js'
import Profile from '../components/Profile.js'


export default (

  <Router history={hashHistory}>
    <Route path="/" component={Main} >
      <IndexRoute component={Home}></IndexRoute>
      <Route path="profile/:username" component={Profile}/>
    </Route>
  </Router>
)
