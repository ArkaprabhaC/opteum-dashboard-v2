import React from 'react';
import 'antd/dist/antd.css';
import {Tag } from 'antd';
import Card from  "./Card";
import "./CardContainer.css";

const CardContainer = (props)=>{

    //level1 tab: props.selected_level1
    //level2 tab: props.selected_level2
    const style = {
      result_cards:{
        height: "calc(100vh-150px)", 
        fallbacks:["-moz-calc(100vh-150px)", 
        "-webkit-calc(100vh-150px)",
        ]
      }
     
    }
    let dataSource = {
        d1:[
            {
            expiry: '20/5/19',
            strike: '20 CE',
            action: <Tag color="green" onClick={()=>clickHandler("BUY")}>BUY</Tag>,
            ltp: 20,
            moneyness: 20,
            oi: 20,
            lotsize: 20,

            //modal data
            id: 1011,
            title: 'RELAINCE1',
            ori_spot: 2, 
            cur_spot: 3, 
            ori_ltp_1:211222.22,
            cur_ltp_1: 4345345,
            ori_ltp_2:211222.22,
            cur_ltp_2:4345345,
            ori_profit:'50%',
            cur_profit:'65%',
            investment:'Rs 44543534.33',

            avg_profit: "45%",

            key: "d1_1"
          },
          {
            expiry: '20/5/19',
            strike: '20 CE',
            action: <Tag color="volcano" onClick={()=>clickHandler("SELL")}>SELL</Tag>,
            ltp: 20,
            moneyness: 20,
            oi: 20,
            lotsize: 21,
            
            //modal data
            id: 1022,
            title: 'RELAINCE2',
            ori_spot: 123344, 
            cur_spot: 324564, 
            ori_ltp_1:211222.22,
            cur_ltp_1: 11145,
            ori_ltp_2:211222.22,
            cur_ltp_2:11145,
            ori_profit:'20%',
            cur_profit:'75%',
            investment:'Rs 4654.33',

            avg_profit: "30%",

            key: "d1_2"
          }
        ]
    }

    const clickHandler = (type) => {
        if(type === "BUY"){
          console.log("client has hit buy button");
        }else if(type === "SELL"){
          console.log("client has hit sell button");
        }else{
          console.log("error");
        }
    }

    return(
        <div className="result_cards">
           <Card title={dataSource.d1[0].title} id={dataSource.d1[0].id} 
            expiry={dataSource.d1[0].expiry} spot={dataSource.d1[0].ori_spot} 
            investment_reqd={dataSource.d1[0].investment} avg_profit={dataSource.d1[0].avg_profit}>
                        {dataSource.d1}
           </Card>  
           <Card title={dataSource.d1[0].title} id={dataSource.d1[0].id} 
            expiry={dataSource.d1[0].expiry} spot={dataSource.d1[0].ori_spot} 
            investment_reqd={dataSource.d1[0].investment} avg_profit={dataSource.d1[0].avg_profit}>
                        {dataSource.d1}
           </Card>  
           <Card title={dataSource.d1[0].title} id={dataSource.d1[0].id} 
            expiry={dataSource.d1[0].expiry} spot={dataSource.d1[0].ori_spot} 
            investment_reqd={dataSource.d1[0].investment} avg_profit={dataSource.d1[0].avg_profit}>
                        {dataSource.d1}
           </Card>  
           <Card title={dataSource.d1[0].title} id={dataSource.d1[0].id} 
            expiry={dataSource.d1[0].expiry} spot={dataSource.d1[0].ori_spot} 
            investment_reqd={dataSource.d1[0].investment} avg_profit={dataSource.d1[0].avg_profit}>
                        {dataSource.d1}
           </Card>    
        </div>
    );
}


export default CardContainer;