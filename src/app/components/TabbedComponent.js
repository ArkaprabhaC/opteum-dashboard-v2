import React from 'react';
import { Tabs } from 'antd';
import 'antd/dist/antd.css';
import './TabbedComponent.css';
import CardContainer from './CardContainer';

const { TabPane } = Tabs;

const TabbedComponent = (props) => {
    return (
        <div className="card-container-secondary">
            <Tabs>
                {[...Array(8).keys()].map(i=>{
                    return(
                        <TabPane tab={`Tab Title ${i+1}`} key={`${i+1}`}>
                            <CardContainer/>
                        </TabPane>
                    )
                })}
            </Tabs>
        </div>
    );
}

export default TabbedComponent;