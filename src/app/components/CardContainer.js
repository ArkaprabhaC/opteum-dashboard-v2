import React from 'react';
import 'antd/dist/antd.css';
import {Tag } from 'antd';
import CardComponent from  "./CardComponent";
import "./CardContainer.css";

const CardContainer = (props)=>{

    //level1 tab: props.selected_level1
    //level2 tab: props.selected_level2

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
            key: "d1_1"
          },
          {
            expiry: '20/5/19',
            strike: '20 CE',
            action: <Tag color="volcano" onClick={()=>clickHandler("SELL")}>SELL</Tag>,
            ltp: 20,
            moneyness: 20,
            oi: 20,
            lotsize: 20,
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
           <CardComponent title={props.selected_level1} spot="45689" investment_reqd="47,000" avg_profit="30%">
                        {dataSource.d1}
           </CardComponent>  
           <CardComponent title={props.selected_level1} spot="45689" investment_reqd="47,000" avg_profit="30%">
                        {dataSource.d1}
           </CardComponent>     
           <CardComponent title={props.selected_level1} spot="45689" investment_reqd="47,000" avg_profit="30%">
                        {dataSource.d1}
           </CardComponent>
           <CardComponent title={props.selected_level1} spot="45689" investment_reqd="47,000" avg_profit="30%">
                        {dataSource.d1}
           </CardComponent>   
        </div>
    );
}


export default CardContainer;