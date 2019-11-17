import React from 'react'
import './strategy-watcher.css'
import StrategyWatcherItems from './buildingblocks/strategy-watcher-list-item'

const Watcher = () => {
    return (
        <main className="strategy_watcher_main">
            <div className="strategy_watcher_header">
                <p className="strategy_watcher_title">Live Strategy Tracker</p>
                <div className="line"/>
            </div>

            <div className="strategy_watcher_cards">
                <StrategyWatcherItems id="1024" instrument="RELIANCE" currentLTP="773.33" date="10 Aug 2019" lotSize="33333" LTP="373.455"/>
                <StrategyWatcherItems id="1024" instrument="RELIANCE" currentLTP="773.33" date="10 Aug 2019" lotSize="33333" LTP="373.455"/>
                <StrategyWatcherItems id="1024" instrument="RELIANCE" currentLTP="773.33" date="10 Aug 2019" lotSize="33333" LTP="373.455"/>
                <StrategyWatcherItems id="1024" instrument="RELIANCE" currentLTP="773.33" date="10 Aug 2019" lotSize="33333" LTP="373.455"/>
                <StrategyWatcherItems id="1024" instrument="RELIANCE" currentLTP="773.33" date="10 Aug 2019" lotSize="33333" LTP="373.455"/>
                <StrategyWatcherItems id="1024" instrument="RELIANCE" currentLTP="773.33" date="10 Aug 2019" lotSize="33333" LTP="373.455"/>
            </div>
        </main>
    );
}

export default Watcher;