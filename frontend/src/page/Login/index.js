import React, { Component } from "react";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as actionCreator from './store/actionCreator';
import 'bootstrap/dist/css/bootstrap.min.css';
import { notInitialized } from "react-redux/es/utils/useSyncExternalStore";

class Login extends Component {
    render() {
    const { loginStatus } = this.props;
    var storage=window.localStorage;
    var Islogin = storage.getItem("Islogin");
    
    if(Islogin === "Notlogin"){
        return (
            <div>
        <form>
            <div style={{color:"white"}}>
            <div class="mb-3">
        
    <label for="InputEmail1" class="form-label">Email address</label>
    

                <input type="email" class="form-control" aria-describedby="emailHelp" ref={(input)  => {this.email = input}}/>
                </div>
                <div id="emailHelp" class="form-text">If you did not register, Please register first</div></div>

      <div style={{color:"white"}}>
      <label for="InputPassword1" class="form-label">Password</label>
      
                <input type="password" class="form-control" id="InputPassword1" ref={(input) => {this.password = input}}/>
                <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="Check"></input>
    <label class="form-check-label" for="Check">Check me out</label>
  </div>
                <button type="submit" class="btn btn-primary" onClick={() => this.props.Login(this.email, this.password)}>Login</button>
     </div>
        </form>
            </div>
        
        )
    }else if(Islogin === "login"){
        return <Redirect to='/'/>
    }else{
        storage.setItem("Islogin", "Notlogin");
        return(
            <div>
                <input ref={(input) => {this.email = input}}/>
                <input ref={(input) => {this.password = input}}/>
                <button onClick={() => this.props.Login(this.email, this.password)}>Login</button>
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