import React, {Component, Fragment} from 'react'
import { Menu, Button, Drawer, Dropdown, Icon } from 'antd';
import 'antd/dist/antd.css';
import avatar from '../../assets/avatar2.png';

import './CustomMenu.css';

class CustomMenu extends Component {
    state = {
        visible: false
      }
    showDrawer = () => {
        this.setState({
          visible: true,
        });
      };
    onClose = () => {
        this.setState({
          visible: false,
        });
    };

    menu = () => {
        return (
            <Menu>
                <Menu.Item key="0">
                    Profile
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">
                    Sign Out
                </Menu.Item>
            </Menu>
        )
    }
    render(){
        return(
            <Fragment>
                <Menu 
                    mode="horizontal"
                    className="fullScreenNav"
                    selectedkeys="1"
                    style={{lineHeight:"62px", paddingRight: "20px", position:"fixed"}}
                >
                    <Menu.Item key="0" style={{float:"right"}}><strong>Sign Out</strong></Menu.Item>
                    <Menu.Item key="2" style={{float:"right"}}>Dashboard</Menu.Item>
                    <Menu.Item key="3" style={{float:"right"}}>Profile</Menu.Item>
                    <Menu.Item key="4" style={{float:"right"}}>Performance Reporting</Menu.Item>
                                    
                </Menu>
                <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                    Menu
                </Button>
                <Drawer
                    title="Sigmanteum TM"
                    placement="right"
                    closable={false}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                        <Menu 
                            mode="vertical"       
                        >
                            <Menu.Item key="1">Dashboard</Menu.Item>
                            <Menu.Item key="2">Profile</Menu.Item>
                            <Menu.Item key="3">Performance Reporting</Menu.Item>
                            <Menu.Divider/>
                            <Menu.Item key="4"><strong>Sign Out</strong></Menu.Item>
                                            
                        </Menu>
                </Drawer>
            </Fragment>
        );
    }
    
}

export default CustomMenu;