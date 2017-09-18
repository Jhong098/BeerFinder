import React from 'react';


export default class Api extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			response: []
		};


	}

	componentWillMount() {
		this.getResponse();
	}

	getResponse() {

		const KEY = 'MDoxMTNlYjhmYS05YTJlLTExZTctYTViYy1kN2Q5YzAyNGY3NGQ6RGdWcG8yVVpROFltd2QwUXBISzNJSmJpekZnY0FMNEYzYVM2';
		const url = 'https://lcboapi.com/';
	 
		fetch(url + 'products?per_page=100&access_key=' + KEY)
				.then(resp => resp.json())
				.then(resp => {this.setState({response: resp.result}); this.props.apiCallBack(this.state.response);})				
				.catch(error => console.log('Error', error));

	}

	render() {
		return <div></div>
	}



}