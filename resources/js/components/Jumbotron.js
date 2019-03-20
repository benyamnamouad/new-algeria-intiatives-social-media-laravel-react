import React, { Component } from 'react';
import ReactDOM from 'react-dom';




export default class Jumbotron extends Component {



    render() {
        console.log(this.props);
        return (

            <div className="jumbotron" >
                <h1 className="display-4">مرحبا بك !</h1>
                <p className="lead ">هذا الموقع طور خصيصا حتى نستفيد من صحوة 22 فيفري و يكون مرجعا للمبادرات الفردية و الجماعية من أجل بناء الجزائر الجديدة </p>
                <hr className="my-4"/>
                    <p> لا تتخرج دون أن تترك بصمتك، اضغط الزر و ساهم بفكرة أو مبادؤة فالجزائر مسؤولية الجميع</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">بـادر</a>
            </div>
        );
    }
}
