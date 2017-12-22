import React, { Component } from 'react';
import { connect } from 'react-redux'; 
import { showPin } from '../actions';
import { Link } from 'react-router-dom';



class PinShow extends Component {

  componentDidMount(){
    const { id }  = this.props.match.params
    this.props.showPin(id);
  }

	render(){
    		return(
		<section className="popup">
        <section className="popup-wrap">
	    </section>
        <section className="popup-content post-popup">
		<header className="post-header">
			<div style={{  textAlign: 'left'}}>
			<Link to={'/pins'}>	<a style={{color: '#fff'}}className="fa fa-times fa-3x" aria-hidden="true" onClick={this.props.handleClick}></a></Link>
			</div>
			<h1>Post a new product</h1>
		</header>
     <div className="row">
          <div className="col-md-offset-2 col-md-8">
            <div className="panel panel-default">
              <div className="panel-heading center">
               <img src='/' />
              </div>
              <div className="panel-body">
                <p>description</p>
                <p><strong>user email</strong></p> 
                             
              </div>
            </div>
          </div>
    </div>
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