import React, {Component} from "react";
import ReactDOM from 'react-dom';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import LoginPage from '../components/LoginPage.js'
import  DashboardPage from '../components/DashboardPage.js'


import PrivateRoute from './PrivateRoute.js'
import PublicRoute from './PublicRoute.js'


import Oups404 from '../components/Oups404.js'


import createHistory from 'history/createBrowserHistory'

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>

      <Switch>
        <PublicRoute path="/" exact={true} component={LoginPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route component={Oups404} />
      </Switch>
    </div>
  </Router>
)

 export default AppRouter
