import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'whatwg-fetch';
import Search from './Search.js';


const KEY = 'MDoxMTNlYjhmYS05YTJlLTExZTctYTViYy1kN2Q5YzAyNGY3NGQ6RGdWcG8yVVpROFltd2QwUXBISzNJSmJpekZnY0FMNEYzYVM2';
const url = 'https://lcboapi.com/';



export default class App extends React.Component {

  constructor(props) {
    super(props)
  }
  // getProducts() {
  //     fetch(url + 'products?access_key=' + KEY)
  //     .then(response => console.log(response.json()))
  //     .catch(error => console.log('Error', error));
  // }


  render() {
    return <Search />

  }
}


