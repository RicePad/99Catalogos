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
				<a className="fa fa-times fa-3x" aria-hidden="true" onClick={this.props.handleClick}> </a>
			</div>
			Post a new product
		</header>
        <section>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td><input placeholder="Enter product's name"/></td>
              </tr>
              <tr>
                <td>Description</td>
                <td><input placeholder="Enter product's description"/></td>
              </tr><tr>
                <td>Link</td>
                <td><input placeholder="http://www..."/></td>
              </tr><tr>
                <td>Media</td>
                <td><input placeholder="Pate a direct link to an image"/></td>
              </tr>
            </tbody>
          </table>
        </section>
        </section>
       </section>
          

			)
	}
}

export default PinShow;