import React from 'react';

class Search extends React.Component {


	constructor(props) {
		super(props);
		this.state = {beerFound: false, value: '', submitted: false, products: [], beers: []};

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
		this.setState({beerFound: this.checkBeer(), submitted: true});
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

	checkBeer() {
		let target = this.state.value;

		this.state.beers.map(function(beer) {
			if(beer.name.toLowerCase() === target.toLowerCase()) {
				console.log(beer);
				return true;
			} 
		});

		if(this.state.submitted && !this.state.beerFound) {
			console.log('not found');
			return false;
		}
	}


	render() {
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					Enter the Beer:
					<input type="text" value={this.state.value} onChange={this.handleChange} />
					<input type="submit" value="submit" onSubmit={this.handleSubmit} />
				</form>
			</div>

			)
	}
}


export default Search;