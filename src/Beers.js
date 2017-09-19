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

		<div key={props.item.id} className="beer-item mdl-card mdl-shadow--2dp">
			<div className="mdl-card__title"><h2 className="mdl-card__title-text">{props.item.name}</h2></div>
				<div className="mdl-card__supporting-text info">
					<ul className="beer-info">
						<li>{props.item.image_url !== null ? <img className="beer-img" src={props.item.image_url} alt={'picture for ' + props.item.name} /> : 
							<img className="beer-img" src={defaultImg} alt={'picture for ' + props.item.name} />}
						</li>
						

						<li>Package: {props.item.package}</li>
						<li>Price: {(props.item.price_in_cents / 100).toLocaleString("en-US", {style:"currency", currency:"USD"})}</li>
						<li>Producer: {props.item.producer_name}</li>
						
					</ul>
				</div>
		</div>
	)
}



// <img className="beer-img" src={props.item.image_url} alt={'picture for ' + props.item.name} /></li>
// <img className="beer-img" src="./assets/beer-default.jpg" alt={'picture for ' + props.item.name} />