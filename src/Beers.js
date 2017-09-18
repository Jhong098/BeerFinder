import React from 'react';
import Api from './api.js';

export default class Beers extends React.Component {

	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div>
				<h2>Search results for {this.props.search}:</h2>

				<BeerGrid beers={this.props.results} />
			</div>
			
			)
	}
}

function BeerGrid (props) {
	return (
		<ul className="beer-list">
			{props.beers.map(function(beer) {
				return (
					<BeerItem key={beer.id} item={beer} />
				)
			})}
		</ul>

	)
}

function BeerItem (props) {
	const defaultImg = "https://thumbs.dreamstime.com/b/glass-translucent-frothy-beer-28540674.jpg";

	return (
		<li key={props.item.id} className="beer-item">
			<div className="beer-name">{props.item.name}</div>
				<ul className="beer-info">
					<li>{props.item.image_url !== null ? <img className="beer-img" src={props.item.image_url} alt={'picture for ' + props.item.name} /> : 
						<img className="beer-img" src={defaultImg} alt={'picture for ' + props.item.name} />}
					</li>
					<li>Package: {props.item.package}</li>
					<li>Price: {(props.item.price_in_cents / 100).toLocaleString("en-US", {style:"currency", currency:"USD"})}</li>
					<li>Producer: {props.item.producer_name}</li>
				</ul>
		</li>
	)
}



// <img className="beer-img" src={props.item.image_url} alt={'picture for ' + props.item.name} /></li>
// <img className="beer-img" src="./assets/beer-default.jpg" alt={'picture for ' + props.item.name} />