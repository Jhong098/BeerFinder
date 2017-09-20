import React from 'react';
import './SingleBeer.css';
import Location from './Location';

class SingleBeer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: '',
      long: '',
      id: this.props.id
      //id: 493965 //Molson Bottle
    };
  }

  componentDidMount() {
    // let location = getLocation();
    // console.log(location);
    this.getLocation();
  }

  getLocation() {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        console.log(position);
        console.log(position.coords.latitude + ' ' + position.coords.longitude);
        this.setState({
          lat: position.coords.latitude,
          long: position.coords.longitude
        });
      }.bind(this)
    );
  }

  render() {
    return (
      <div>
        {this.state.long && (
          <Location
            id={this.state.id}
            lat={this.state.lat}
            long={this.state.long}
          />
        )}
      </div>
    );
  }
}

export default SingleBeer;
