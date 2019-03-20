import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Initiative from "./components/Initiative";
import reducers from './reducers';
import {BrowserRouter } from 'react-router-dom';
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
const createStoreWithMiddleware = createStore(reducers,{},applyMiddleware(ReduxThunk));


export default class Index extends Component {
    render() {
        return (
            <Provider store={createStoreWithMiddleware}>
                <Nav/>
                <Jumbotron/>
                <Initiative/>
                <Footer/>
                {/*<BrowserRouter>*/}
                   {/**/}
                {/*</BrowserRouter>*/}
            </Provider>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
