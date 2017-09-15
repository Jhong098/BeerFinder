import React from 'react';
import { getProducts } from './api.js';



class Search extends React.Component {


	constructor(props) {
		super(props);
		this.state = {value: '', submitted: false, products: [3, 5]};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

	}

	componentWillMount() {
		this.setState({products: getProducts()});
	}

	handleChange(event) {
		this.setState({value : event.target.value});
	}


	handleSubmit(event) {
		event.preventDefault();
		console.log("submitted");
		this.setState({submitted: true});
		getProducts();
	}

	filterProducts() {
		let tags = this.props.products.map(function(product) {
			return product.tags;
		});
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