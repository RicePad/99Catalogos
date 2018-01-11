import React, { Component }from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPin } from '../actions';
// import Dropzone from 'react-dropzone';

const FILE_FIELD_NAME = 'files';

 


class PinNew extends Component {
	
	renderField(field){
		const { meta: { touched, error } } = field;
		const className= `form-group ${touched && error ? 'text-danger' : ''}`;



		return(

			<div className={className}>
				<label style={{color: '#bd081c' }}>{field.label}</label>
				<input 
					type="text"
					className="form-control"
					placeholder={field.placeholder}
					{...field.input}

				/>
				<div className="text-danger">
					{touched ? error : ''}
				</div>
			</div>

			)
	}






	renderFileField(field){
		return(

			<div>
				<label style={{color: '#bd081c' }}>{field.label}</label>
				<input 
					type="file"
					className="form-control"
					placeholder={field.placeholder}
					 value={value === '' && value}

					{...field.input}

				/>
				
			</div>

			)
	}

	onSubmit(values){
		this.props.createPin(values, () => {
        	this.props.history.push('/pins');
        })
		console.log(values)
	}

	renderDropzoneInput = (field) => {
	const files = field.input.value;
	return(
			<div>
				<Dropzone
					name={field.name}
					onDrop={(filesToUpload, e) => field.input.onChange(filesToUpload)}
				>
					<div>Try dropping some files here, or click to selects file to upload.</div>
				</Dropzone>
				{field.meta.touched &&
			        field.meta.error &&
			        <span className="error">{field.meta.error}</span>}
			      {files && Array.isArray(files) && (
			        <ul>
			          { files.map((file, i) => <li key={i}>{file.name}</li>) }
			        </ul>
			      )}
			</div>
		)
}

	render(){
		const { handleSubmit } = this.props;

		return(
			<div>
				<div className="container" > 
				<div style={{  textAlign: 'left'}}>
      			 <Link to={'/pins'}><a onClick={this.props.handleClick} style={{color: '#bd081c'}} className="fa fa-times fa-3x" aria-hidden="true" ></a></Link>
      			</div>
					<h1 style={{textAlign: 'center', color: '#bd081c'}}>Create a Pin</h1>
					<section className="demo-content">
						<form  className="form-grid" onSubmit={handleSubmit(this.onSubmit.bind(this))}>
							<Field
								label="Title of Pin"
								name="title"
								component={this.renderField}
								placeholder="Title of pin"

							 />
							 <Field
								label="Description"
								name="description"
								component={this.renderField}
								placeholder="Description of pin"

							 />
							 <Field
								label="Thumb Image"
								name="thumb_image"
								component={this.renderDropzoneInput}
								placeholder="Upload thumb image"

							 />
							 <Field
								label="Main Image"
								name="main_image"
								component={this.renderDropzoneInput}
								placeholder="Upload main image"

							 />
							 <button type="submit" className="btn btn-danger btn-block">Submit</button>

					</form>
				</section>
				</div>
				<br/>
				
			</div>	
		)}}

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
	connect(null, { createPin })(PinNew));
