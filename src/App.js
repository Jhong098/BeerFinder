import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import Search from './Search.js';
import NotFound from './NotFound.js';
import Results from './Results.js';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;



export default class App extends React.Component {

  render() {

    return(
      <Router>
        <div>
          <Switch>
            <Route exact path='/' component={Search} />
            <Route path='/notfound' component={NotFound} />
            <Route path='/results' component={Results} />
          </Switch>
        </div>
      </Router>
      )
    

  }
}


