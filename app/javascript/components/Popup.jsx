import React, { Component }from 'react';
import PinNew from './PinNew';
import PinIndex from './PinIndex';
import { Link } from 'react-router-dom';


class Popup extends Component {
	
	render(){
		
		return(
			<div>
			<section className="popup">	

			
		        <section className="popup-wrap">
		            
		        </section>
		        <section  className="popup-content" >
		            <section> 
		            	<PinNew handleClick={this.props.handleClick} /> 
		            </section>
		        </section>
       		</section>
       		</div>	
           )
			
	}
}


export default Popup;