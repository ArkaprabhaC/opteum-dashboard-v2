import React from  'react';
import {Col, Table, Card,Icon} from 'antd';
import 'antd/dist/antd.css';
import "./Card.css";
import {connect} from 'react-redux';

const CardComponent = (props) =>{
    
    const titleArr = ['Expiry','Strike', 'Action', 'LTP', 'Moneyness', 'OI', 'Lot Size'];
    const dataIndexArr = ['expiry','strike','action','ltp','moneyness','oi','lotsize'];
    const columns = [];
    
    if(titleArr.length === dataIndexArr.length){
      titleArr.map((__,i)=>{
        columns.push({title: titleArr[i], dataIndex: dataIndexArr[i],align: 'center'});
      }); 
    }

    const cardtitle= props.title;
    
    const addToTracker = () => {
        props.dispatch({type: 'ADD_TRACKER_ITEMS', val: props.children });
    }
    return(  
      <Col md={21} xs={24} className="card_margin">
        <Card title={cardtitle} extra={<span><Icon onClick={addToTracker} style={{marginTop:'5px',marginRight:"10px",fontSize:"18px",color:"#33FF00"}} type="plus-circle" /><span>Spot: {props.spot}</span></span>}> 
            <Table dataSource={props.children} columns={columns} pagination={false} className="table_scroller"/>
            <div>
                <span className="card_footer_investmentreqd">Investment: <strong>Rs {props.investment_reqd}</strong> </span>
                <span className="card_footer_avgprofit">Proj. avg profit: <strong>{props.avg_profit}</strong> </span>
            </div>
        </Card>
      </Col>        
    );
}

const mapStateToProps = (state) => {
  return{
    items: state.live_strategy_tracker_items
  }
}

export default connect(mapStateToProps)(CardComponent);