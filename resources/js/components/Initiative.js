import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { fetchInits,fetchInitsCount} from '../actions/index';
import {connect} from 'react-redux';



class Initiative extends Component {

    componentWillMount() {
        this.props.fetchInits();
        this.props.fetchInitsCount();

    }

    renderInits (){
        return this.props.inits.map((init,index)=>{
            return(
                <div key={index} className="col-4">
                    <div  className="card border-secondary mb-3" >
                        <div className="card-header">{init.title}</div>
                        <div className="card-body text-secondary">
                            <h5 className="card-title">هنا يمكن التعديل</h5>
                            <p className="card-text">{init.description}</p>
                        </div>
                    </div>
                </div>

            )
        });
    }



    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-9 row">
                        {this.renderInits()}
                    </div>
                    <div className=" col-3 btn btn-danger ">
                        <h1>يوجد في الموقع :{this.props.initsCount} مبادرة وفكرة </h1>

                    </div>

                </div>


            </div>
        );
    }
}

function mapStateToProps(state) {
    return {inits:state.inits.all,
            initsCount:state.inits.count
    };
}
export default connect(mapStateToProps,{fetchInits,fetchInitsCount})(Initiative);
