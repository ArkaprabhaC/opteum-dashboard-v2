import React, { Fragment } from 'react'
import { Row, Col} from 'antd';
import 'antd/dist/antd.css';
import './recommendations.css';
import { Tabs } from 'antd';
import TabbedComponent from './buildingblocks/TabbedComponent';
import CardContainer from './buildingblocks/CardContainer';
const { TabPane } = Tabs;

const Recommendations = () => {
    return (
       <Fragment>
            <Row className="greeter">
                <Col sm={10}><h2>Welcome, <span>Arkaprabha</span></h2></Col>
                <Col sm={14}><h4>5 November 2019 | Data updated at: <strong>22:30</strong></h4></Col>
            </Row>
                                        
            <CardContainer/>
            
       </Fragment> 
    );
}

export default Recommendations;