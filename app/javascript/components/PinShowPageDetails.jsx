import React, { Component } from 'react';


class PinShowPageDetails extends Component {
	render(){

		const pin = this.props.pin
		console.log('this.props.show', this.props.pin)

		return(
			<div>
				<div className="row">
	                <div className="col-md-offset-2 col-md-8">
	                  <div className="panel panel-default">
	                    <div className="panel-heading center">
	                     <img 
	                     	src={pin.main_image.url}
	                     	style={{width: '700px;', height: '350px'}}
	                      />
	                    </div>
	                    <div className="panel-body">
	                      <h2>{pin.title}</h2>
	                      <p><strong>{pin.description}</strong></p> 
	                                   
	                    </div>
	                  </div>
	                </div>
          	   </div>
			</div>
			)
	}

}

export default PinShowPageDetails;