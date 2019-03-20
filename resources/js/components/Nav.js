import React, { Component } from 'react';
import ReactDOM from 'react-dom';




export default class Nav extends Component {



    render() {
        console.log(this.props);
        return (

            <nav className="navbar navbar-light fixed-top">
                <a className="navbar-brand" href="#">
                    <img src="/imgs/logo.svg" width="100"  className="d-inline-block align-top" alt=""/>
                </a>
            </nav>
        );
    }
}
