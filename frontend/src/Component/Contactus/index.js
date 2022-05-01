import React, { Component } from "react";
import { Layout, Menu,Breadcrumb} from 'antd';
import {Link} from 'react-router-dom';
class Contactus extends Component {

  render() {
    return (
      
      <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item><Link to ="/home">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item>Contact us</Breadcrumb.Item>
      </Breadcrumb>


      
        
    )
  }
}

export default Contactus;