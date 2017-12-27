import React, { Component } from 'react';
import logoImg from '../assets/lilp.png';
import { Link } from 'react-router-dom';
import PinNew from './PinNew';
import Popup from './Popup';




class Navbar extends Component {
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

    handleClickOutsite = (e) => {
    if (e.target != this.refs.profileBtn) {
      this.setState({displayPinPopup: false});
    }
  }
    componentWillMount() {
        window.addEventListener("click", this.handleClickOutsite, false);
      }

      

      componentWillUnMount() {
        window.removeEventListener("click", this.handleClickOutsite, false);
      }

    renderPopup() {
        return (
            <div>
                <Popup />
            </div>
        );
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
                                  <input
                                    size='100'
                                    placeholder= "search for pin"
                                    type= "text"
                                    className="form-control"

                                   />
                                </div>
                            </form>
                                <a onClick={this.handleClick} ref="profileBtn" style={{color: '#bd081c'}} className="fa fa-plus-circle fa-3x" aria-hidden="true"  ></a>
                                {
                                    this.state.displayPinPopup? this.renderPopup() : null
                               }
                       
                        </div>

            </section>
            <hr/>

          </section>
            );

    }

}

export default Navbar;