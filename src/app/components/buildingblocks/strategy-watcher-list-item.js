import React, {Fragment} from 'react';
import './strategy-watcher-list-item.css';
import {Icon} from 'antd';
import 'antd/dist/antd.css';

const StrategyWatcherItems = (props) => {
    const data = [
        {
            strategyID: '#1024',
            date: '11 Oct 2019',
            instrument: 'RELIANCE',
            LotSize: '123',
            LTP: '20',
            CurLTP: '33'
        },
        {
            strategyID: '#1025',
            date: '11 Oct 2019',
            instrument: 'RELIANCE',
            LotSize: '123',
            LTP: '20',
            CurLTP: '33'
        },
        {
            strategyID: '#1026',
            date: '11 Oct 2019',
            instrument: 'RELIANCE',
            LotSize: '123',
            LTP: '20',
            CurLTP: '33'
        }
    ]
    

    return (
       <main className="strategy_watcher_item">
           <p className="item_head">
            <span style={{fontWeight: "600"}}>#{props.id} <span>{props.instrument}</span></span>
               <span><Icon type="close-circle" /></span></p> 
           <p className="cur_ltp">
               <span>Current LTP: <span style={{fontWeight:600}}>{props.currentLTP}</span></span>
           </p>
           <p className="item_info">
               {props.date} | Lot Size : {props.lotSize} | LTP : {props.LTP} 
            </p>
       </main>
    );
}

export default StrategyWatcherItems;