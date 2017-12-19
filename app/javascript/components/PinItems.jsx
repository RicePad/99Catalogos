import React, { Component } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";



class PinItems extends Component{
	render(){
		const pins = this.props.pins
			return(
				<div>

					<div className="box">
						<img src={pins.thumb_image} style={{width: "100%", display: "block"}} />
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



