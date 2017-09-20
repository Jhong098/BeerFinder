import React from 'react';


export default class BeerMap extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			markers: this.props.markers
		 };
		
	}

	componentDidMount() {		
		const google = window.google;
		var map = window.map;
		var center = {lat: this.state.center_lat, lng: this.state.center_long};
		var marker = {lat: this.state.marker_lat, lng: this.state.marker_long};

		map = new google.maps.Map(this.refs.map, {
          center: {lat: 43.65, lng: -79.38},
          zoom: 14
        });

		this.state.markers.forEach(function(oneMarker) {
			var marker = new google.maps.Marker({
          	position: oneMarker,
          	map: map
        	});
		});
        
	}

	render() {
		return(
			<div ref="map" style={{width:500, height: 500}}>
				<h1>Loading...</h1>
			</div>
		
		)
	}
}

