import React, { Component } from 'react';
import Popup from './Popup';



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
					<a onClick={this.handleClick} ref="profileBtn" style={{color: '#bd081c'}} className="fa fa-plus-circle fa-3x" aria-hidden="true"  ></a>
					{
	                    this.state.displayPinPopup? this.renderPopup() : null
                               
                    }
				</div>


			)
	}
}


export default AddPinButton;