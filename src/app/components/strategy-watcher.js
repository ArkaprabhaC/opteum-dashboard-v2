import React from 'react'
import './strategy-watcher.css'
import StrategyWatcherItems from './buildingblocks/strategy-watcher-list-item'
import {connect} from 'react-redux';

const strategy_watcher_markup = (props) => {
   if(props.items.length !== 0){
     return props.items.map((el,index)=>{
        return el.map((inner_el,inner_index) => {
            return <StrategyWatcherItems details={inner_el} key={inner_el+inner_index}/>
        })
    })
   }else{
     return <p>Please add some elements</p>
   }
}
const Watcher = (props) => {
    return (
        <main className="strategy_watcher_main">
            <div className="strategy_watcher_header">
                <p className="strategy_watcher_title">Live Strategy Tracker</p>
                <div className="line"/>
            </div>

            <div className="strategy_watcher_cards">
                {strategy_watcher_markup(props)}
                
            </div>
        </main>
    );
}
const mapStateToProps = (state) => {
    return{
      items: state.live_strategy_tracker_items
    }
}
export default connect(mapStateToProps)(Watcher);