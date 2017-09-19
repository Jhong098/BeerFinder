import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      width: '15px',
      height: '15px',
      borderRadius: '10px',
      backgroundColor: '#ffffff',
      border: '1px solid black',
      color: 'black',
      fontSize: '10px'
    }}
  >
    <h6>{text}</h6>
  </div>
);
const GoogleAPIKEY = 'AIzaSyDSsgs0O434gy67EsAXuShNXWdJ8yPKero';

class Location extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: this.props.lat,
      long: this.props.long,
      // id: this.props.id
      id: this.props.id, //Molson Bottle
      store: '',
      beer: ''
    };
  }

  componentDidMount() {
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
        console.log(resp);
        console.log(resp.result[0]);
        this.setState({
          store: resp.result[0],
          beer: resp.product
        });
      })
      .catch(error => console.log('Error', error));
  }

  render() {
    let center = { lat: this.state.lat, lng: this.state.long };
    console.log(center);

    const style = {
      width: '300px',
      height: '300px'
    };

    return (
      <div style={{ width: '100%', height: '400px' }}>
        Closest Store with that product is : {JSON.stringify(this.state.store)}
        <br />Coordinates of the store are => lat: {this.state.store.latitude} &
        long: {this.state.store.longitude}
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDSsgs0O434gy67EsAXuShNXWdJ8yPKero' }}
          style={style}
          center={center}
          defaultZoom={12}
        >
          <AnyReactComponent
            lat={this.state.lat}
            lng={this.state.long}
            text={'your location'}
          />
          <AnyReactComponent
            lat={this.state.store.latitude}
            lng={this.state.store.longitude}
            text={'closest store'}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Location;
