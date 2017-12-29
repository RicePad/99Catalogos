import React, { Component }from 'react';


class PinNewForm extends Component {
	
	render(){
		
		return(
			<div>
			<form className="form-group">
					  <div className="col-md-6">
					    <input type="text" className="form-control" placeholder="Title" />
					    <textarea name="message" type="text" className="form-control" placeholder="Description" />
						<input type="text" className="form-control" placeholder="URL" />
					  </div>
					  <div className="col-md-6">
					    <input type="text" className="form-control" placeholder="Upload Image" />

					  </div>  
					</form>
       		</div>	
           )
			
	}
}


export default PinNewForm;