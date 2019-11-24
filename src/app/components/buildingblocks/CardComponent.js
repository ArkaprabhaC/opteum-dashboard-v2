import React from  'react';
import {Col, Table, Card} from 'antd';
import 'antd/dist/antd.css';
import "./CardComponent.css";


const CardComponent = (props) =>{
    
    const titleArr= ['Expiry','Strike', 'Action', 'LTP', 'Moneyness', 'OI', 'Lot Size'];
    const dataIndexArr = ['expiry','strike','action','ltp','moneyness','oi','lotsize'];
    const columns =[];
    
    if(titleArr.length === dataIndexArr.length){
      titleArr.map((__,i)=>{
        columns.push({title: titleArr[i], dataIndex: dataIndexArr[i]});
      }); 
    }

    return(  
      <Col md={24} xs={24} className="card_margin">
        <Card title="RELIANCE" extra={<span>Spot: {props.spot}</span>}> 
            <Table dataSource={props.children} columns={columns} pagination={false} scroll={{ x: 2250, y: 350 }}/>
            <div>
                <span className="card_footer_investmentreqd">Investment: <strong>Rs {props.investment_reqd}</strong> </span>
                <span className="card_footer_avgprofit">Projected avg profit: <strong>{props.avg_profit}</strong> </span>
            </div>
        </Card>
      </Col>        
    );
}

export default CardComponent;