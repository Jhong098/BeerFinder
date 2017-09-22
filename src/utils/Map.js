import React from 'react';


export default class BeerMap extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			center: null,
			BeerMarkers: []
		 };
		
	}

	componentDidMount() {		
		const google = window.google;
		var map = window.map;
		let markers = this.props.markers.slice();
		console.log(markers);
		// var center = {lat: this.state.center_lat, lng: this.state.center_long};
		// var marker = {lat: this.state.marker_lat, lng: this.state.marker_long};

		map = new google.maps.Map(this.refs.map, {
          center: this.props.center,
          zoom: 13
        });

		var markerArray = [];

		markers.forEach(function(oneMarker) {
			var marker = new google.maps.Marker({
          	position: oneMarker,
          	map: map
          	// title: 'LCBO'
        	});
			markerArray.push(marker);

		});

		console.log(markerArray);

		var bounds = new google.maps.LatLngBounds();
			for (var i = 0; i < markerArray.length; i++) {
			 bounds.extend(markerArray[i].getPosition());
			}

		map.fitBounds(bounds);

		// var contentString = ;

		//   var infowindow = new google.maps.InfoWindow({
		//     content: contentString
		//   });

		//   var marker = new google.maps.Marker({
		//     position: uluru,
		//     map: map,
		//     title: 'Uluru (Ayers Rock)'
		//   });
		//   marker.addListener('click', function() {
		//     infowindow.open(map, marker);
		//   });

	        
		}

	render() {
		// let myComponent;
		// if(this.props.markers !== null) {
		// 	myComponent = <
		// }
		return(
			

			<div ref="map" style={{width:500, height: 500}}>
				<h1>Loading</h1>
			</div>
		
		)
	}
}

