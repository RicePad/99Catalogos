import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { showPin } from '../actions';
import { Link } from 'react-router-dom';
import PinShowPageDetails from './PinShowPageDetails';



class PinShow extends Component {

  componentDidMount(){
    const { id }  = this.props.match.params
    this.props.showPin(id);
  }

	render(){
        const { pin } = this.props
                console.log('this.props.show', this.props.pin)



        if (!pin) {
          return <div>Loading.....</div>
    }


    		
        return(
      		<section className="popup">
              <section className="popup-wrap">
      	    </section>
              <section className="popup-content post-popup">
      		<header className="post-header">
      			<div style={{  textAlign: 'left'}}>
      			<Link to={'/pins'}><a style={{color: '#fff'}}className="fa fa-times fa-3x" aria-hidden="true" onClick={this.props.handleClick}></a></Link>
      			</div>
      			<h1>{pin.title}</h1>
      		</header>
              <PinShowPageDetails pin={this.props.pin} />
              </section>
             </section>
          

			)
	}
}


function mapStateToProps({ pins }, ownProps){
  return {
      pin: pins[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps, { showPin })(PinShow);