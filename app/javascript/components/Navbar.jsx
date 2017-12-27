import React, { Component } from 'react';
import logoImg from '../assets/lilp.png';



class Navbar extends Component {
    
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
                                  <input
                                    size='100'
                                    placeholder= "search for pin"
                                    type= "text"
                                    className="form-control"

                                   />
                                </div>
                        </form>    
                    </div>

            </section>
            <hr/>

          </section>
            );

    }

}

export default Navbar;