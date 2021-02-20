import React from 'react'
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom'

import { AppStyle } from './AppStyle'
import { Main } from './components/pages'

const Routes = () => (
  <Switch>
    <Route path="/stations" component={Main} />
    <Redirect from="/" to="/stations" />
  </Switch>
)

const App = () => (
  <AppStyle>
    <Router>
      <Routes />
    </Router>
  </AppStyle>
)

export default App
