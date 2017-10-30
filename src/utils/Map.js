import React from 'react';


export default class BeerMap extends React.Component {

	constructor(props) {
		super(props);
		this.state = { 
			center: null
		 };
		
	}

	componentDidMount() {		
		const google = window.google;
		var map = window.map;
		let markerArray = [];
		// var center = {lat: this.state.center_lat, lng: this.state.center_long};
		// var marker = {lat: this.state.marker_lat, lng: this.state.marker_long};

		map = new google.maps.Map(this.refs.map, {
          center: this.props.center,
          zoom: 13
    			});

		this.props.stores.forEach((store) => {
			var contentString = `
				<div class="map-info-container">
					<div class="map-info-title">
						<p>${store.name}</p>
					</div>
					<div class="map-info-body">
						<ul class="map-info-list">
							<li>Address: ${store.address_line_1}</li>
							<li>Telephone: ${store.telephone}</li>
						</ul>
					</div>
				</div>`;

		  var infowindow = new google.maps.InfoWindow({
		    content: contentString
		  });

			var marker = new google.maps.Marker({
          	position: {lat: store.latitude, lng: store.longitude},
          	map: map
          	// title: 'LCBO'
      });
			markerArray.push(marker);

		  marker.addListener('click', function() {
		    infowindow.open(map, marker);
		  });
		});

		var bounds = new google.maps.LatLngBounds();
			for (var i = 0; i < markerArray.length; i++) {
			 bounds.extend(markerArray[i].getPosition());
		}

		map.fitBounds(bounds);
	        
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

