import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreator from './store/actionCreator';
import { LoginWrapper, LoginTitle, Content} from "./style";

class Login extends Component {
    render() {
    const { loginStatus } = this.props;
    var storage=window.localStorage;
    var Islogin = storage.getItem("Islogin");
    if(Islogin === "Notlogin"){
        return (
            <div>
                <LoginTitle>Login</LoginTitle>
                <LoginWrapper>
                <Content>
                Email:
                <input ref={(input) => {this.email = input}} />
                </Content>
                Password:
                <input type="password" ref={(input) => {this.password = input}}/>
                <Content>
                <button onClick={() => this.props.Login(this.email, this.password)}>Login</button>
                <h1>Account:</h1>
                <h1>Jason@gmail.com</h1>
                <h1>123456</h1>
                </Content>
                </LoginWrapper>
            </div>
        )
    }else if(Islogin === "login"){
        return <Redirect to='/'/>
    }else{
        storage.setItem("Islogin", "Notlogin");
        return(
            <div>
                <LoginTitle>Login</LoginTitle>
                <LoginWrapper>
                <input ref={(input) => {this.email = input}}/>
                <input ref={(input) => {this.password = input}}/>
                <button onClick={() => this.props.Login(this.email, this.password)}>Login</button>
                </LoginWrapper>
            </div>
        )
    }
}
}

const mapStateTothis= (state) => {
    return {
    }
}

const mapDispathTothis = (dispatch) => {
    return{
        Login(email,password){
            dispatch(actionCreator.login(email.value, password.value));
        }
    }
}

export default connect(mapStateTothis, mapDispathTothis)(Login);