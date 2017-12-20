import React, { Component } from 'react';


class Navbar extends Component {
    constructor(props){
        super(props);

        this.state = {
          displayPopup: false

        };


    }


    showPopup = () => {
        return this.setState({displayPopup: true});

    }

    hidePopup = () =>{
        return this.setState({displayPopup: false});
    }

    renderProductSearch(){
        return (
            <section className="left-side">
                <input className="product-search" placeholder="SEARCH" />
            </section>

            );

    }

    renderLogo(){
        return (
            <a onClick={this.showPopup} ><img src="/images/favicon.ico"/></a>
            );

    }

render(){
        return(
           <section>

            <section className="navbar">
                
            </section>

          </section>
            );

    }

}

export default Navbar;