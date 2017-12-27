import React, { Component }from 'react';
import PinNew from './PinNew';

class Popup extends Component {

	render(){
		return(
			<section className="popup">
		        <section className="popup-wrap">
		            
		        </section>
		        <section className="popup-content">
		            <section> 
		            	<PinNew /> 
		            </section>
		        </section>
       		</section>
           )
			
	}
}


export default Popup;