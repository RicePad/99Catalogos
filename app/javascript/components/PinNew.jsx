import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';
import PinNewForm from './PinNewForm';



class PinNew extends Component {
	

	render(){
		return(
			<div>
				<div className="container" > 
				<div style={{  textAlign: 'left'}}>
      		 	 <a onClick={this.props.handleClick} style={{color: '#bd081c'}} className="fa fa-times fa-3x" aria-hidden="true" ></a>
      				
      			</div>
					<h1 >Create a Pin</h1>
						<PinNewForm />
					<hr/>
				</div>
				<br/>
				<div className="col-md-12">
					<button className="btn btn-danger btn-block">Submit</button>
				</div>
			</div>	
		)}}


export default PinNew;
