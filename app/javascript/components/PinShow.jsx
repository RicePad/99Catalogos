import React, { Component } from 'react';


class PinShow extends Component {

	render(){
		return(
		<section className="popup">
        <section className="popup-wrap">
	    </section>
        <section className="popup-content post-popup">
		<header className="post-header">
			<div style={{  textAlign: 'left'}}>
				<a style={{color: '#fff'}}className="fa fa-times fa-3x" aria-hidden="true" onClick={this.props.handleClick}></a>
			</div>
			<h1>Post a new product</h1>
		</header>
     <div class="row">
          <div class="col-md-offset-2 col-md-8">
            <div class="panel panel-default">
              <div class="panel-heading center">
               <img src='/' />
              </div>
              <div class="panel-body">
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

export default PinShow;