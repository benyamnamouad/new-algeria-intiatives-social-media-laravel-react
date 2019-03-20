import React, { Component } from 'react';
import ReactDOM from 'react-dom';




export default class Footer extends Component {



    render() {
        console.log(this.props);
        return (

           <div className="Footer row mt-5">
               <div className="col-3"><img src="/imgs/logo.svg" width="100"  className="d-inline-block align-top" alt=""/>
               </div>
               <div className="col-3"></div>
               <div className="col-3"></div>
               <div className="col-3"></div>
           </div>
        );
    }
}
