import React, { Component } from 'react';
import Search from './Search/Search';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class App extends React.Component {
  render() {
    return (
      <div>
      	<ReactCSSTransitionGroup
      		transitionName="fade"
      		transitionEnterTimeout={300}
      		transitionLeaveTimeout={300}
      		transitionAppear={true}
      		transitionAppearTimeout={1500}>
        	<Search />    
        </ReactCSSTransitionGroup>  
      </div>
    );
  }
}
