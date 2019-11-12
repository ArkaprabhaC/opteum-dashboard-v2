import React, {Component, Fragment} from 'react'
import { Menu, Button, Drawer,Icon,Tabs } from 'antd';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import './CustomMenu.css';

const { TabPane } = Tabs;

class CustomMenu extends Component {
    state = {
        visible: false,
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

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }
    
    handleWindowSizeChange = () => {
        //this.setState({ width: window.innerWidth });
        this.props.dispatch({type: 'screen_resize'});
    };

    handleNavClick = (index) =>{
        this.props.dispatch({type: 'mob_nav_change', val: index});
    };

    render(){
        const width  = this.props.screen_width;
        const isMobile = width <= 500;
        const options = ['Sign Out','Dashboard','Profile', 'Performance Reporting', 'Support'];
        const optionsMob = ['dashboard','compass', 'fund'];
        let markup;

        if(isMobile){
            markup = optionsMob.map((el,index)=>{
                return <Menu.Item onClick={()=>this.handleNavClick(index)} key={index+'_mob'}><Icon style={{fontSize: "20px",margin: 0}} type={el} theme="twoTone" /></Menu.Item>
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

const mapStateToProps = (state) => {
    return {
        screen_width: state.width,
        selected_tab: state.mob_selected_tab
    }
}

export default connect(mapStateToProps)(CustomMenu);