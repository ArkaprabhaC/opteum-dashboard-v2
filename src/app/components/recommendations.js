import React, { Fragment } from 'react'
import { Row, Col} from 'antd';
import 'antd/dist/antd.css';
import './recommendations.css';
import { Tabs } from 'antd';
import TabbedComponent from './buildingblocks/TabbedComponent';
const { TabPane } = Tabs;

const Recommendations = () => {
    return (
       <Fragment>
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
       </Fragment> 
    );
}

export default Recommendations;