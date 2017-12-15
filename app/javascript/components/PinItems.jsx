import React, { Component } from 'react';

class PinItems extends Component{
	render(){
		const pins = this.props.pins
			return(
				<div>
					<div className="box panel panel-default">
						<img src={pins.thumb_image}/>
						<div className="panel-body">
							{pins.description}{' '}
							<strong>Username</strong>
						</div>
					</div>
				</div>
				)
		}
}


export default PinItems;



