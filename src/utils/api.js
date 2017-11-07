import React from 'react';

export default class Api extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   response: []
    // };
  }

  componentWillMount() {   
    this.getResponse();
  }

  getResponse() {
    fetch('/lcbo')
    .then(res => res.json())
    .then(json => this.props.apiCallBack(json))
    .catch(err => console.log('Error', err));
    // const KEY =
    //   'MDoxMTNlYjhmYS05YTJlLTExZTctYTViYy1kN2Q5YzAyNGY3NGQ6RGdWcG8yVVpROFltd2QwUXBISzNJSmJpekZnY0FMNEYzYVM2';
    // const url = 'https://lcboapi.com/';

    // fetch(
    //   url +
    //     'products?&page=' +
    //     page +
    //     '&q=beer&per_page=100&where_not=is_dead&access_key=' +
    //     KEY
    // )
    //   .then(resp => resp.json())
    //   .then(resp => {
    //     var temp = this.state.response.slice();
    //     temp.push.apply(temp, resp.result);

    //     this.setState({ response: temp });
    //     this.props.apiCallBack(this.state.response);
    //   })
    //   .catch(error => console.log('Error', error));
  }

  render() {
    return <div />;
  }
}
