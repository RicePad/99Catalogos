import React, { Component }from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPin } from '../actions';

class PinNewForm extends Component {
	
	renderField(field){
		const { meta: { touched, error } } = field;
		const className= `form-group ${touched && error ? 'text-danger' : ''}`;



		return(
			<div className={className}>
				<label>{field.label}</label>
				<input 
					type="text"
					className="form-control"
					{...field.input}
				/>
				<div className="text-danger">
					{touched ? error : ''}
				</div>
			</div>

			)
	}
	

	onSubmit(values){
		this.props.createPin(values, () => {
        	this.props.history.push('/');
        })
		console.log(values)
	}
	render(){
		const { handleSubmit } = this.props;
		return(
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
				<Field
					label="Title of Pin"
					name="title"
					component={this.renderField}
				 />
				 <Field
					label="Description"
					name="description"
					component={this.renderField}
				 />
				 <Field
					label="Thumb Image"
					name="thumb_image"
					component={this.renderField}
				 />
				 <Field
					label="Main Image"
					name="main_image"
					component={this.renderField}
				 />
				 <button type="submit" className="btn btn-success btn-block">Submit</button>

			</form>

           )
			
	}
}

function validate(values){
	const errors = {};

	if(!values.title){
		errors.title = "Enter a title";
	}
	if(!values.description){
		errors.description = "Enter a description";
	}
	if(!values.thumb_image){
		errors.thumb_image = "Enter a thumb image";
	}
	if(!values.main_image){
		errors.main_image = "Enter a main image";
	}
	
	return errors;

}


export default reduxForm({
	validate: validate,
	form: 'PinNewForm'
})(
	connect(null, { createPin })(PinNewForm));