import React from 'react';

export default class NotFound extends React.Component {
	render() {
		return(
			<div>
				<h1 className="h1-center">"{this.props.search}" could not be found! Try again.</h1>
			</div>
		)
	}

}