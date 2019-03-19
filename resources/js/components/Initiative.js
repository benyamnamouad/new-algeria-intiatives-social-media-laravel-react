import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Initiative extends Component {
    constructor(){
        super();
        this.state ={
            inits:[]
        }
    }
    componentWillMount() {
        axios.get('/inits').then(response =>{
            this.setState({
                inits:response.data
            });
        }).catch(errors => {
            console.log(errors);
        })
    }

    render() {
        return (
            <div className="container">
                {this.state.inits.map(
                    init => <li key={init.id}>{init.title}</li>
                )}
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Initiative />, document.getElementById('example'));
}
