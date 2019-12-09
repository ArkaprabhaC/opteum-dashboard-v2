import React, {Component} from 'react';
import 'antd/dist/antd.css';
import './App.css';
import { Layout,Icon } from 'antd';
import { Row, Col, Menu } from 'antd';
import CustomMenu from './components/buildingblocks/CustomMenu';
import { Tabs } from 'antd';
import Recommendations from './components/recommendations';
import Watcher from './components/strategy-watcher';
import {connect} from 'react-redux';
import Trends from './components/trend-watcher';

const { TabPane } = Tabs;
const {  Sider, Content, Footer } = Layout;

class App extends Component{

    content = () =>{
        if(this.props.screen_width <= 500){
            switch(this.props.selected_tab){
                case 0: 
                    return (
                        <Recommendations/>
                    )
                case 1: 
                    return (
                        <Watcher/>
                    )
                case 2:
                    return (
                        <Trends/>
                    )
            }
        }else{
            return (
                <Row>
                    <Col>
                       <Recommendations/>                                    
                    </Col>
                </Row>
            )
        }
    }
    
    render(){
        return(
            <Layout style={{boxSizing: "border-box"}}>
                <CustomMenu/>
                <Layout>
                    <Sider className="sidebar sidebar-left" breakpoint="md" collapsedWidth="0" width="230px" style={{paddingTop: "18px"}}>
                        <Trends/>
                    </Sider>
                    <Content className="content_container"> 
                            <div className="main_content">
                                {this.content()}
                            </div>
                    </Content>
                    <Sider className="sidebar sidebar-right" breakpoint="md" collapsedWidth="0" width="280px" >
                        <Watcher/>
                    </Sider>                        
                </Layout>
                
          </Layout>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        screen_width: state.width,
        selected_tab: state.mob_selected_tab
    }
}

export default connect(mapStateToProps)(App);