import React from 'react';


export default class Api extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			response: []
		};


	}

	componentWillMount() {
		for(var i = 1; i <= 2; i++) {
			this.getResponse(i);
		}
		
	}

	getResponse(page) {

		const KEY = 'MDoxMTNlYjhmYS05YTJlLTExZTctYTViYy1kN2Q5YzAyNGY3NGQ6RGdWcG8yVVpROFltd2QwUXBISzNJSmJpekZnY0FMNEYzYVM2';
		const url = 'https://lcboapi.com/';
	 
		fetch(url + 'products?page=' + page + '&per_page=100&where_not=is_dead&access_key=' + KEY)
				.then(resp => resp.json())
				.then(resp => {
					
					var temp = this.state.response.slice();
					temp.push.apply(temp, resp.result);
					
					this.setState({response: temp}); 
					this.props.apiCallBack(this.state.response);
					})				
				.catch(error => console.log('Error', error));

	}

	render() {
		return <div></div>
	}



}