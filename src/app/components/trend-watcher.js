import React, { Fragment } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots,SparklinesBars } from 'react-sparklines';
import Filters from './buildingblocks/Filters';

const Trends = () => {
    return (
        <Fragment>
            <h3 style={{margin:"5px 10px", fontWeight: "bold", fontSize: "20px"}}>Current Trends:</h3>
            <p style={{margin:"10px 10px", fontWeight: "600", fontSize:"15px"}}>Nifty 50</p>
            <Sparklines data={[5, 10, 5, 20, 8, 15, 22,5,3, 6,100,200,20,5,6,7,8,99,20,11,5,4,33,77,55,3,34,56,8]} limit={20}>
                <SparklinesLine color="#1c8cdc" />
                <SparklinesSpots />
            </Sparklines>

            <p style={{margin:"10px 10px", fontWeight: "600", fontSize:"15px"}}>Nifty Bank</p>
            <Sparklines data={[5, 10, 5, 20, 8, 15, 22,5,3, 6,100,200,20,5,6,7,8,99,20,11,5,4,33,77,55,3,34,56,8]} limit={20}>
                <SparklinesLine color="#1c8cdc" />
                <SparklinesSpots />
            </Sparklines>
            
            <p style={{margin:"10px 10px", fontWeight: "600", fontSize:"15px"}}>Active Underlying</p>
            <Sparklines data={[5, 10, 5, 20, 8, 15, 22,5,3, 6,100,200,20,5,6,7,8,99,20,11,5,4,33,77,55,3,34,56,8]} limit={20}>
                <SparklinesLine color="#1c8cdc" />
                <SparklinesSpots />
            </Sparklines>

            <Filters name="Instrument Types" values={['STK','Monthly NIFTY','Monthly BNKNIFTY','Weekly NIFTY','Weekly BNKNIFTY']}/>
            <Filters name="Position" values={['All Buy', 'All Sell', 'Mixed']}/>
            <Filters name="Expiry" values={['Current', 'Near', 'Far', 'Distant']}/>
            <Filters name="Investment" values={['<30000', '<50000', '50000 - 100000', '100000 - 500000', '>500000']}/>
        </Fragment>
    )
}

export default Trends;