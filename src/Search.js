import React from 'react';

class Search extends React.Component {


	constructor(props) {
		super(props);
		this.state = {value: '', submitted: false, products: [], beers: []};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	componentWillMount() {
		this.getProducts();
		
	}

	componentDidMount() {
		
	}

	handleChange(event) {
		this.setState({value : event.target.value});
	}


	handleSubmit(event) {
		event.preventDefault();
		console.log("submitted");
		this.setState({submitted: true});
		
	}

	getProducts() {
		const KEY = 'MDoxMTNlYjhmYS05YTJlLTExZTctYTViYy1kN2Q5YzAyNGY3NGQ6RGdWcG8yVVpROFltd2QwUXBISzNJSmJpekZnY0FMNEYzYVM2';
		const url = 'https://lcboapi.com/';
	 
		fetch(url + 'products?per_page=100&access_key=' + KEY)
				.then(resp => resp.json())
				.then(resp => {this.setState({products: resp.result});})
				.then(() => this.filterProducts())
				.catch(error => console.log('Error', error));

		
	}

	filterProducts() {		
		let beers = this.state.products.filter(function(product) {
			if(product.tags.includes('beer')){
				return product;
			}
		});

		this.setState({beers});



		// console.log(beers);
	}


	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					Enter the Beer:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
					<input type="submit" value="submit" />
				</form>
			</div>

			)
	}
}


export default Search;