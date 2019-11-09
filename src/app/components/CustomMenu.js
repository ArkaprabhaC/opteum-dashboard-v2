import React, {Component, Fragment} from 'react'
import { Menu, Button, Drawer,Icon } from 'antd';
import 'antd/dist/antd.css';

import './CustomMenu.css';

class CustomMenu extends Component {
    state = {
        visible: false,
        width: window.innerWidth
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
    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    
    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render(){
        const { width } = this.state;
        const isMobile = width <= 500;
        const options = ['Sign Out','Dashboard','Profile', 'Performance Reporting', 'Support'];
        const optionsMob = ['dashboard','compass', 'fund'];
        let markup;

        if(isMobile){
            markup = optionsMob.map((el,index)=>{
                return <Menu.Item key={index+'_mob'}><Icon style={{fontSize: "20px",margin: 0}} type={el} theme="twoTone" /></Menu.Item>
            })
        }else{
            markup = options.map((el,index)=>{
                return (el === "Sign Out")? 
                    <Menu.Item key={index} style={{float: "right"}}><strong>{el}</strong></Menu.Item>
                    : <Menu.Item key={index} style={{float: "right"}}>{el}</Menu.Item>
            });
        }

        return(
            <Fragment>
                <Menu 
                    mode="horizontal"
                    className="fullScreenNav"
                    selectedkeys="1"
                    style={{lineHeight:"50px", paddingRight: "20px", position:"fixed"}}
                >
                   {markup}
                                    
                </Menu>
                <Button className="barsMenu" type="primary" onClick={this.showDrawer}>
                    Menu
                </Button>
                <Drawer
                    title="Opteum TM"
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
                            <Menu.Item key="4">Support</Menu.Item>
                            <Menu.Divider/>
                            <Menu.Item key="5"><strong>Sign Out</strong></Menu.Item>
                                            
                        </Menu>
                </Drawer>
            </Fragment>
        );
    }
    
}

export default CustomMenu;