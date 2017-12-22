import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PinShow from './PinShow';




class PinItems extends Component{
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

	 	// handleClickOutsite = (e) => {
	  //   if (e.target != this.refs.profileBtn) {
	  //     this.setState({displayPinPopup: false});
	  //   }
	  // }

	  componentWillMount() {
	    window.addEventListener("click", this.handleClickOutsite, false);
	  }

	  

	  componentWillUnMount() {
	    window.removeEventListener("click", this.handleClickOutsite, false);
	  }

	  renderPinShowPage() {
	    return (
	      	<div>
	      		<PinShow handleClick={this.handleClick} />
	      	</div>
	    );
  }

	render(){
		const pins = this.props.pins
			return(
				<div>

					<div className="box">
						<Link to={`pins/${pins.id}`}><img src={pins.thumb_image} onClick={this.handleClick} ref="profileBtn" style={{width: "100%"}} /></Link>

					        {
					          this.state.displayPinPopup? this.renderPinShowPage() : null
					        }
						<div className="panel-body">
							{pins.description}{' '}
							<strong>Username</strong>
						</div>
					</div>

				</div>
				)
		}
}


export default PinItems;



