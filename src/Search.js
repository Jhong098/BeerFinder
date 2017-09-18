import React from 'react';
// import { Router, Link, Route, Switch } from 'react-router-dom';
import Api from './api.js';

import NotFound from './NotFound.js';
import Results from './Results.js';
import Beers from './Beers.js';



class Search extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			beerFound: false, 
			value: '', 
			submitted: false, 
			products: [], 
			beers: [],
			beerResults: []
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleReset = this.handleReset.bind(this);

	}

	handleChange(event) {
		this.setState({value : event.target.value});
	}


	handleSubmit(event) {
		event.preventDefault();
		if(this.state.value != '') {
			
			this.setState({beerFound: this.checkBeer(), submitted: true});

		}
		
	}

	onApiChange(newData) {
		// console.log(newData);
		this.setState({products: newData});
		this.filterProducts();
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
		let found = false;
		let results = [];

		this.state.beers.map(function(beer) {
			if(target.length >= 3 && beer.name.toLowerCase().includes(target.toLowerCase())) {
				results.push(beer);
				found = true;
			} 
		});

		this.setState({beerResults: results});

		if(this.state.submitted && !this.state.beerFound) {
			// console.log('not found');
			found = false;
		}

		// console.log(found);

		return found;
	}

	handleReset() {
		this.setState({submitted: false, beerFound: false, value: ''});
	}

	render() {
		return (
			<div >		

				{!this.state.submitted && !this.state.beerFound && 
					<form className="search" onSubmit={this.handleSubmit}>
						<h1>Search for the Beer:</h1>
						<input type="text" id="type" value={this.state.value} onChange={this.handleChange} />		
						<input className='button' type="submit" value="Find" onSubmit={this.handleSubmit}/>
						<Api ref="api" apiCallBack={(newData) => this.onApiChange(newData)}/>
					</form>
				}

				{this.state.submitted && this.state.beerFound && 
					<div>
						<Beers search={this.state.value} results={this.state.beerResults}/>
						<button className="reset" onClick={this.handleReset}>Reset</button>
					</div>
				}

				{this.state.submitted && !this.state.beerFound &&
					<div>
						<NotFound search={this.state.value} />
						<button className="reset" onClick={this.handleReset}>Reset</button>
					</div>
				}

			</div>

			)
	}
}


export default Search;