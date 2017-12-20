import React, { Component } from 'react';
import logoImg from '../assets/lilp.png';



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
            <img src={ logoImg } style={{ height: 40 }} />
            );

    }

render(){
        return(
           <section>

            <section className="navbar">
                        <div className="container">
                            <div className="navbar-header">
                                <img src={ logoImg }  style={{ height: 50 }} />    
                            </div>
                            <form className="navbar-form navbar-left" role="search">
                                <div className="form-group">
                                  <input />
                                </div>
                        </form>
                        
                        
                    </div>

            </section>

          </section>
            );

    }

}

export default Navbar;