import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PinShow from './PinShow';




class PinItems extends Component{
	

	render(){
		const pins = this.props.pins
			return(
				<div>

					<div className="box">
						<Link to={`pins/${pins.id}`}>
							<img src={pins.thumb_image} alt={pins.name} style={{width: "100%"}} />
						</Link>

					        
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



