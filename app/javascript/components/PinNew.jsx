import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux';

class PinNew extends Component {
	



	render(){
		return(
			<div>
				<div className="container">
					<h1>Create a Pin</h1>
					<form className="form-group">
					  <div class="col-md-6">
					    <input type="text" className="form-control" placeholder="Title" />
					    <textarea name="message" type="text" className="form-control" placeholder="Description" />
						<input type="text" className="form-control" placeholder="URL" />
					  </div>
					  <div class="col-md-6">
					    <input type="text" className="form-control" placeholder="Upload Image" />

					  </div>  
					</form>
					<hr/>
				</div>
				<br/>
				<div className="col-md-12">
					<button className="btn btn-danger btn-block">Submit</button>
				</div>
			</div>	
		)}}


export default PinNew;
