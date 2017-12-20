import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPins } from '../actions';
import PinItems from './PinItems';
import $ from 'jquery'
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
import Navbar from './Navbar';





class PinIndex extends Component {
	constructor(props){
		super(props);

		this.state = {
			displayPinPopup: false
		}
	}
	
	componentDidMount(){
 		this.props.fetchPins()
 	}


 	showPinPopup = () =>  {
 		this.setState({displayPinPopup: true})
 		console.log('this.state.showpinpu', this.state)

 	}

 	hidePinPopup = () => {
 		this.setState({displayPinPopup: false})
 	}

	render(){
		console.log('this.props', this.props.pins)

		return(
			<div>
				 <Navbar />
				 <Masonry columnsCount={4}>
				{_.map(this.props.pins, pin => {
					return(
						<div key={pin.id}>
							<PinItems pins={pin} key={pin.id} showPinPopup={this.showPinPopup} />
						</div>
						)
				})}
			 </Masonry>

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