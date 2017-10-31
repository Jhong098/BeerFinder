import React from 'react';

export default class NotFound extends React.Component {
	render() {
		return(
			<div>
			{this.props.search === '' ?
				<h1 className="h1-center">Search cannot be blank!</h1>
				:
				<h1 className="h1-center">"{this.props.search}" could not be found! Try again.</h1>				
			}
			</div>
		)
	}

}