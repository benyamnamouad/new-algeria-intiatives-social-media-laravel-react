import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Initiative from "./components/Initiative";
import Example from "./components/Example";
import {BrowserRouter as Router, Link, Route} from 'react-router-dom';

export default class Index extends Component {
    render() {
        return (
            <div className="container">
                <Router>
                    <div>
                        <Link to="/"> Home</Link>
                        <Link to="/init5"> Iniits </Link>
                        <Route path="/" exact component={Example} />
                        <Route path="/init5" exact component={Initiative} />
                    </div>
                </Router>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
