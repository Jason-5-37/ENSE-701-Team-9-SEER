import React, { Component } from "react";
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu,Breadcrumb} from 'antd';
import { BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
// import Link from 'umi/link';
import Contactus from './Component/Contactus';
import Home from './Component/Home';
import Submit from './Component/Submit';
import {
  PieChartOutlined,
  DesktopOutlined 
} from '@ant-design/icons'
const { Header, Content,  Sider } = Layout;
class SiderDemo extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({
      collapsed,
    });
  };
  render() {
    return (
      <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu
                theme="dark"
                mode="inline"
              
                style={{ height: '100%', borderRight: 0 }}
              >
                <Menu.Item key="/home" >
               <Link to="/home"> <PieChartOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Article</Link>
                </Menu.Item>
          
                <Menu.Item key="/home/contactus">
                  <Link to="/home/contactus"><DesktopOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact us</Link>
                </Menu.Item>

                <Menu.Item key="/home/submit">
                  <Link to="/home/submit"><DesktopOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Submit</Link></Menu.Item>
              </Menu>

              
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Switch>
                  <Route exact path="/home" component={Home}></Route>
                  <Route path="/home/contactus" component={Contactus}></Route>
                  <Route path="/home/submit" component={Submit}></Route>
                </Switch>
          </Content>
        
        </Layout>
      </Layout>
      </Router>
    );
  }
}

export default () => <SiderDemo />;