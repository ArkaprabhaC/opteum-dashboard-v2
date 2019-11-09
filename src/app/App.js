import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout,Icon } from 'antd';
import { Row, Col, Menu } from 'antd';
import avatar from '../assets/avatar2.png';
import TabbedComponent from './components/TabbedComponent';
import CustomMenu from './components/CustomMenu';
import { Tabs } from 'antd';

const { TabPane } = Tabs;
const {  Sider, Content, Footer } = Layout;

class App extends Component{

    render(){
        return(
            <Layout style={{boxSizing: "border-box"}}>
                <CustomMenu/>
                <Layout>
                    <Sider className="sidebar" breakpoint="md" collapsedWidth="0" width="230px" style={{paddingTop: "18px"}}>
                        <div>
                            <Row>
                                <Col md={12}><img src={avatar} className="user-img" /></Col>
                                <Col md={12} style={{fontSize:"15px",fontWeight:"bold", padding: "25px 0px"}}> Arkaprabha Chatterjee</Col>
                            </Row>
                        </div>

                        <Menu
                            defaultSelectedKeys={['2']}
                            style={{ lineHeight: '60px'}}
                        >
                            <Menu.Item key="1">Dashboard</Menu.Item>
                            <Menu.Item key="2">Profile</Menu.Item>
                            <Menu.Item key="3">Performance Reporting</Menu.Item>
                        </Menu>

                    </Sider>
                    <Layout className="content_layout_container">
                        <Content> 
                            <div className="main_content">
                                <Row>
                                    <Col md={14} className="card_container"> 
                                        
                                        <Row className="greeter">
                                            <Col sm={10}><h2>Welcome, <span>Arkaprabha</span></h2></Col>
                                            <Col sm={14}><h4>5 November 2019 | Data updated at: <strong>22:30</strong></h4></Col>
                                        </Row>
                                       
                                        <div className="card-container-primary">
                                            <Tabs type="card">
                                                {[...Array(4).keys()].map(i => {
                                                    return (
                                                        <TabPane tab={`Tab ${i+1}`} key={`${i+1}`}>
                                                            <TabbedComponent/>
                                                         </TabPane> );
                                                })}
                                            </Tabs>
                                        </div>                                        

                                    </Col>
                                    <Col md={10} className="strategy_tracker">
                                        
                                        <main>
                                            <p>Live Strategy Tracker</p>
                                        </main>

                                    </Col>
                                </Row>
                            </div>
                        </Content>                        
                    </Layout>
                </Layout>
                
          </Layout>
        );
    }
}

export default App;