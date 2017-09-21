import React from 'react';
// import { Router, Link, Route, Switch } from 'react-router-dom';
import Api from './api.js';

import NotFound from './NotFound.js';
import Results from './Results.js';
import Beers from './Beers.js';
import SingleBeer from './SingleBeer.js';



class Search extends React.Component {


	constructor(props) {
		super(props);
		this.state = {
			productFound: false, 
			value: '', 
			submitted: false, 
			products: [],
			searchResults: []
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
		if(this.state.value !== '') {
			
			this.setState({productFound: this.checkBeer(), submitted: true});

		}
		
	}

	onApiChange(newData) {
		// console.log(newData);
		this.setState({products: newData});
		
	}

	checkBeer() {
		let target = this.state.value;
		let found = false;
		let results = [];

		this.state.products.map(function(product) {
			if(target.length >= 3 && product.name.toLowerCase().includes(target.toLowerCase())) {
				results.push(product);
				found = true;
			} 
		});

		this.setState({searchResults: results});

		if(this.state.submitted && !this.state.productFound) {			
			found = false;
		}

		return found;
	}

	handleReset() {
		this.setState({submitted: false, productFound: false, value: ''});
	}

	render() {
		return (
			<div >		

				{!this.state.submitted && !this.state.productFound && 
					<form className="search" onSubmit={this.handleSubmit}>
						<h1>Search for the Beer:</h1>
						<div className="mdl-textfield mdl-js-textfield">
							<input className="mdl-textfield__input" type="text" id="search" value={this.state.value} onChange={this.handleChange} />	
							<label className="mdl-textfield__label" for="search">Molson</label>
						</div>	
						<input className='mdl-button mdl-js-button mdl-button--raised mdl-button--colored' type="submit" value="Find" onSubmit={this.handleSubmit}/>
						<Api ref="api" apiCallBack={(newData) => this.onApiChange(newData)}/>
					</form>
				}

				{this.state.submitted && this.state.productFound && 
					<div>
						<div className="button-center"> <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.handleReset}>Reset</button></div>
						<Beers search={this.state.value} results={this.state.searchResults} id='0' />
					</div>
				}

				{this.state.submitted && !this.state.productFound &&
					<div>
						<div className="button-center"> <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.handleReset}>Reset</button></div>
						<NotFound search={this.state.value} />
					</div>
				}

				 
			</div>

			)
	}
}


export default Search;