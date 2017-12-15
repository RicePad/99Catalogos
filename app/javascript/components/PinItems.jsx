import React, { Component } from 'react';

class PinItems extends Component{
	render(){
		const pins = this.props.pins
			return(
				<div>
					<h2>{pins.title}</h2>
					<h2>{pins.description}</h2>
					<h2>{pins.thumb_image}</h2>
					<h2>{pins.price}</h2>



				</div>
				)
		}
}


export default PinItems