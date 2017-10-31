import React from 'react';
// import { Router, Link, Route, Switch } from 'react-router-dom';
import Api from '../utils/api.js';

import NotFound from './NotFound.js';
import Beers from '../Results/Beers.js';
import Locator from './Locator.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


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
	}

	handleChange = (event) => {
		this.setState({value : event.target.value});
	};


	handleSubmit = (event) => {
		event.preventDefault();			
		this.setState({productFound: this.checkBeer(), submitted: true});		
	};

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

	handleReset = () => {
		this.setState({submitted: false, productFound: false, value: ''});
	};

	render() {
		return (
			
				<div >		

					{!this.state.submitted && !this.state.productFound && 
						<ReactCSSTransitionGroup
				      		transitionName="fade"
				      		transitionEnterTimeout={500}
				      		transitionLeaveTimeout={500}
				      		transitionAppear={true}
				      		transitionAppearTimeout={1500}>
							<form className="search" onSubmit={this.handleSubmit}>
							
								<h1 className="main-text">Find Your <code>Beer</code></h1>
						
								<div className="mdl-textfield mdl-js-textfield">
									<input className="mdl-textfield__input" type="text" id="search" value={this.state.value} onChange={this.handleChange} />	
									<label className="mdl-textfield__label" htmlFor="search">Molson</label>
								</div>	

								<input className='button slide' type="submit" value="Find" onSubmit={this.handleSubmit}/>

								<Api ref="api" apiCallBack={(newData) => this.onApiChange(newData)}/>
							</form>
						</ReactCSSTransitionGroup>
					}

					{this.state.submitted && this.state.productFound && 
						<div>
							<div className="button-center"> <button className="button slide" onClick={this.handleReset}>Reset</button></div>
							<Beers search={this.state.value} results={this.state.searchResults} id='0' />
						</div>
					}

					{this.state.submitted && !this.state.productFound &&
						<div>
							<div className="button-center"> <button className="button slide" onClick={this.handleReset}>Reset</button></div>
							<NotFound search={this.state.value} />
						</div>
					}

					 
				</div>
			

			)
	}
}


export default Search;