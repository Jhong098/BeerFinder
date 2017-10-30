import React from 'react';
import Api from '../utils/api.js';
import Slider from '../utils/Slider.js';
import Locator from '../Search/Locator.js';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import Loader from 'react-loaders';

export default class Beers extends React.Component {

	constructor(props) {
		super(props);
		this.state = {clickedBeer: null, clicked: false, mapRendered: false};		
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps);
			
	}

	clickHandler(props) {
		this.setState({clickedBeer: props, clicked: true});
		
	}

	backHandler(props) {
		this.setState({clickedBeer: null, clicked: false, mapRendered: false});
		
	}

	renderHandler = (rendered) => {
		this.setState({mapRendered: rendered});
		console.log(rendered);
	}



	render() {

		console.log(this.state.mapRendered);

		return (
			<ReactCSSTransitionGroup
	      		transitionName="fade"
	      		transitionEnterTimeout={300}
	      		transitionLeaveTimeout={300}
	      		transitionAppear={true}
	      		transitionAppearTimeout={1500}>
					<div>
						{!this.state.clicked && 
							<div>
								<BeerGrid clicked={this.state.clicked} beers={this.props.results} propClickHandler={(id) => this.clickHandler(id)} />
							</div>
						}

						<ReactCSSTransitionGroup
				      		transitionName="fade"
				      		transitionEnterTimeout={300}
				      		transitionLeaveTimeout={300}
				      		transitionAppear={true}
				      		transitionAppearTimeout={1500}>

							{ this.state.clicked &&						
								<div className="beer-map">
									
									<div className="single-beer">
										{ this.state.mapRendered &&
										<BeerItem className="fixed" clicked={this.state.clicked} item={this.state.clickedBeer} backHandler={(id) => this.backHandler(id)} />
										}
									</div>
									<div className="map-right">
										<Locator id={this.state.clickedBeer.id} renderHandler={this.renderHandler}/>
									</div>
								</div>
							}
						</ReactCSSTransitionGroup>
					</div>
			</ReactCSSTransitionGroup>
			
			
			)
	}

	

	
}

function BeerGrid (props) {


	return (
		
		<ul className="beer-list">
			{props.beers.map(function(beer) {
				return (
					<BeerItem key={beer.id} item={beer} clickHandler={(id) => props.propClickHandler(id)} />
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
				{!props.clicked &&
					<div className="button-center"> <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={() => props.clickHandler(props.item)}>Nearest Store</button></div>
				}
				{props.clicked &&
					<div className="button-center"> <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={() => props.backHandler(props.item)}>Back</button></div>
					
				}
		</div>
	)
}