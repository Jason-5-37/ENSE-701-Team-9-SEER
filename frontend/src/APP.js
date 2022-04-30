import React, { Component } from "react";
import 'antd/dist/antd.css';
import './index.css';
import { Layout, Menu,Breadcrumb} from 'antd';
import { BrowserRouter as Router, Route,Link,Switch} from 'react-router-dom';
// import Link from 'umi/link';
import Contactus from './Component/Contactus';
import Home from './Component/Home';
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
                {/* <Menu.Item key="/home/list" icon={<DiffOutlined />}>
                  <Link to="/home/list">内容管理</Link>
                </Menu.Item> */}
                <Menu.Item key="/contactus">
                  <Link to="/contactus"><DesktopOutlined />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Contact us</Link>
                </Menu.Item>
              </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Switch>
                  <Route exact path="/home" component={Home}></Route>
                  <Route path="/contactus" component={Contactus}></Route>
                </Switch>
          </Content>
        
        </Layout>
      </Layout>
      </Router>
    );
  }
}

export default () => <SiderDemo />;