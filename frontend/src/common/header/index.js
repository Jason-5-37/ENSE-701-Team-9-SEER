import React, { Component } from "react";
import { HeaderWrapper, Navbar, NavItem, Title } from "./style";


class Header extends Component {

  render() {
    return (
        <HeaderWrapper>
          <Title>ENSE701</Title>
          <Navbar>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/SearchArticle">Search article</NavItem>
            <NavItem href="/SubmitArticle">Submit article</NavItem>
            <NavItem href="/Contantus">Contant us</NavItem>
            {this.Islogin()}
          </Navbar>
        </HeaderWrapper>
    )
  }
  Islogin(){
    var storage=window.localStorage;
    var Islogin = storage.getItem("Islogin");
    if (Islogin === "login"){
      return(
        <div>
        <NavItem href="/CheckandApprove">Check and Approve</NavItem>
        <button onClick={() => this.logout()}>Logout</button>
        </div>
      )
    }else{
      return(
        <NavItem href="/Login">Login</NavItem>
      )
    }
  }

  logout(){
    var storage=window.localStorage;
    storage.setItem("Islogin", "Notlogin");
    window.location.href = './';
  }
}

export default Header;