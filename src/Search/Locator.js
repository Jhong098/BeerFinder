import React from 'react';
import StoreLocator from './StoreLocator';

class Locator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      long: '',
      id: this.props.id,
      mapRendered: false
      //id: 493965 //Molson Bottle
    };
  }

  componentDidMount() {
    this.getLocation();
  }

  handleRender = (rendered) => {
    console.log(rendered);
    this.setState({mapRendered: rendered});
    this.props.renderHandler(rendered);
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
          <StoreLocator
            id={this.state.id}
            lat={this.state.lat}
            long={this.state.long}
            mapRendered={this.handleRender}
          />
        )}
      </div>
    );
  }
}

export default Locator;
