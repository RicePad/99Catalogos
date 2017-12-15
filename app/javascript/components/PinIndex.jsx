import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchPins } from '../actions';
import PinItems from './PinItems';



class PinIndex extends Component {
	
	componentDidMount(){
		this.props.fetchPins()
	}

	render(){
		console.log('this.props', this.props.pins)

		return(
			<div>
				{_.map(this.props.pins, pin => {
					return(
						<PinItems pins={pin} key={pin.id} />
						)
				})}
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