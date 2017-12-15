import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPins } from '../actions';



class PinIndex extends Component {
	
	componentDidMount(){
		this.props.fetchPins()
	}

	render(){
		console.log('this.props', this.props.pins)

		return(
			<div>Pin Index Component</div>
			)
	}
}

function mapStateToProps(state){
	return {
		pins: state.pins
	}
}


export default connect(mapStateToProps, { fetchPins })(PinIndex);