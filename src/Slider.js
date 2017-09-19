import React from 'react'

export default class Slider extends React.Component {

	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (<p style="width:300px">
  					<input className="mdl-slider mdl-js-slider" type="range" id="s1" min="0" max="10" value="4" step="2">
				</p>);
	}
}