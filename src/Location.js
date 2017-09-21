import React from 'react';
import BeerMap from './Map';

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: this.props.lat,
      long: this.props.long,
      id: this.props.id, //Molson Bottle
      stores: [],
      storeCoords: [],
      centerCoords: null,
      beer: '',
      finished: false
    };
  }

  componentWillMount() {
    this.getClosestStore(this.state.lat, this.state.long, this.state.id);
     
  }

  getClosestStore(lat, long, id) {
    const url = 'https://lcboapi.com/';
    const condition = `stores?product_id=${id}&lat=${lat}&lon=${long}&access_key=`;
    const KEY =
      'MDoxMTNlYjhmYS05YTJlLTExZTctYTViYy1kN2Q5YzAyNGY3NGQ6RGdWcG8yVVpROFltd2QwUXBISzNJSmJpekZnY0FMNEYzYVM2';

    fetch(url + condition + KEY)
      .then(resp => resp.json())
      .then(resp => {
        var storesTemp = [];

        for(var storeCount = 0; storeCount < 5; storeCount++) {         
          storesTemp.push(resp.result[storeCount]);
          
        }

        this.setState({
          stores: storesTemp,
          
        });

        this.setStoreCoords();
      })
      .catch(error => console.log('Error', error));
  }

  setStoreCoords() {

    var coordsTemp = [];

    for(var i = 0; i < this.state.stores.length; i++) {
        coordsTemp.push({lat: this.state.stores[i].latitude, lng: this.state.stores[i].longitude});
        // console.log(coordsTemp);
    }

    this.setState({
      storeCoords: coordsTemp,
      
    });

    this.setCenterCoords();

  }

  setCenterCoords() {
    let totalLat, totalLng, avgLat, avgLng, coordsNum;
    totalLat = totalLng = avgLat = avgLng = 0;
    coordsNum = this.state.storeCoords.length;

    for(let i = 0; i < coordsNum; i++) {
      totalLat += this.state.storeCoords[i].lat;
      totalLng += this.state.storeCoords[i].lng;
    }

    avgLat = totalLat / coordsNum;
    avgLng = totalLng / coordsNum;

    this.setState({finished: true, centerCoords: {lat: avgLat, lng: avgLng}});

  }

  render() {
    
    return (
      <div>
      {this.state.finished &&
        <div>
          <BeerMap markers={this.state.storeCoords} center={this.state.centerCoords} />
        </div>
      }
      </div>
    );
  }
}

export default Location;
