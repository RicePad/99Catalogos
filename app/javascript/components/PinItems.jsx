import React, { Component } from 'react';
import { Link } from 'react-router-dom';





class PinItems extends Component{
	render(){
		const pins = this.props.pins
			return(
				<div>

					<div className="box">
						<Link to={`pins/1`}><img  src={pins.thumb_image} onClick={this.props.showPinPopup}style={{width: "100%", display: "block"}} /></Link>
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



