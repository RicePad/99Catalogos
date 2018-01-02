import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPins } from '../actions';
import PinItems from './PinItems';
import $ from 'jquery'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Navbar from './Navbar';
import AddPinButton from './AddPinButton';





class PinIndex extends Component {
	
		componentDidMount(){
	 		this.props.fetchPins()
	 	}

	render(){
		console.log('this.props', this.props.pins)

		return(
			<div>
	   		

		   		{/* 
	  				<div>
			   			<Navbar />
			   		</div>
				*/}  
					<div className="container" style={{textAlign: "center"}}>
						<AddPinButton />
					</div>

			   		<div className="pin-index">
						 <Masonry columnsCount={4} style={{borderRadius: '50px'}}>
							{_.map(this.props.pins, pin => {
								return(
									<div key={pin.id}>
										<PinItems pins={pin} key={pin.id} />
									</div>
									)
							})}
						 </Masonry>
				   </div>


			</div>
			)
	}
}

function mapStateToProps(state){
	return {
		pins: state.pins
	}
}


export default connect(mapStateToProps, { fetchPins })(PinIndex);