import React from 'react';
// import { Router, Link, Route, Switch } from 'react-router-dom';
import Api from './api.js';

import NotFound from './NotFound.js';
import Results from './Results.js';
import Beers from './Beers.js';



class Search extends React.Component {


	constructor(props) {
		super(props);
		this.state = {beerFound: false, value: '', submitted: false, products: [], beers: []};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	handleChange(event) {
		this.setState({value : event.target.value});
	}


	handleSubmit(event) {
		event.preventDefault();
		if(this.state.value != '') {
			
			this.setState({beerFound: this.checkBeer(), submitted: true});
			// console.log(beerFound);
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

		this.state.beers.map(function(beer) {
			if(beer.name.toLowerCase() === target.toLowerCase()) {
				console.log(beer);
				found = true;
			} 
		});

		if(this.state.submitted && !this.state.beerFound) {
			console.log('not found');
			found = false;
		}

		console.log(found);

		return found;
	}



	render() {
		return (
			<div >	
				<h1>BEER FINDER</h1>			
				<Api ref="api" apiCallBack={(newData) => this.onApiChange(newData)}/>

				{!this.state.submitted && !this.state.beerFound && 
					<form className="search" onSubmit={this.handleSubmit}>
						<h2>Enter the Beer:</h2>
						<input type="text" id="type" value={this.state.value} onChange={this.handleChange} />		
						<input className='button' type="submit" value="Find" onSubmit={this.handleSubmit}/>
					</form>
				}

				{this.state.submitted && this.state.beerFound && 
					<div>
						<Beers results={this.state.beers}/>
					</div>
				}

				{this.state.submitted && !this.state.beerFound &&
					<NotFound />
				}
			</div>

			)
	}
}


export default Search;