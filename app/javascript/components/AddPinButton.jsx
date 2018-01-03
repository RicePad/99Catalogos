import React, { Component } from 'react';
import Popup from './Popup';
import { Link } from 'react-router-dom';
import PinNew from './PinNew';




class AddPinButton extends Component {
	constructor(props){
        super(props);

        this.state = {
            displayPinPopup: false
        }
    }

     handleClick = () => {
        console.log('this.handle.click', this.state)
        if(this.state.displayPinPopup){
            this.setState({displayPinPopup: false})
        }else {
            this.setState({displayPinPopup: true})
        }
    }


// PopUsage
    renderPopup() {
        return (
            <div>
                <Popup  handleClick={this.handleClick} />
            </div>
        );
  }



	render(){
		return(
				<div>
					<Link to={'pins/new'}><a onClick={this.handleClick} ref="profileBtn" style={{color: '#bd081c'}} className="fa fa-plus-circle fa-3x" aria-hidden="true"  ></a></Link>
					
                {/* {
                        this.state.displayPinPopup? this.renderPinNew() : null
                               
                    }
                */}  
				</div>


			)
	}
}


export default AddPinButton;