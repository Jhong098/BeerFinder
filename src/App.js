import React, { Component } from 'react';
import Search from './Search';
import { MapWithControlledZoom } from './Map';
import SingleBeer from './SingleBeer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Search />      
      </div>
    );
  }
}
