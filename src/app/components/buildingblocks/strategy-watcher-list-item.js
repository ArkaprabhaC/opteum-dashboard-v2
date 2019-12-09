import React, {Fragment, Component} from 'react';
import './strategy-watcher-list-item.css';
import {Icon,Button,Modal} from 'antd';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';

class StrategyWatcherItems extends Component{

    state={visible: false}

    showModal = () => {
        this.setState({
            visible: true,
          });
    }
    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };

    removeItem = () => {
      this.props.dispatch({type:'REMOVE_TRACKER_ITEM',id: this.props.details.id})
    }

    
    render(){
      console.log(this);
        return (
            <main className="strategy_watcher_item">
                 <p style={{fontWeight:"600",fontSize:"13px"}}>
                    #{this.props.details.id} | {this.props.details.title} | {this.props.details.expiry}
                    <span style={{float:"right",fontSize:"18px",position:"relative", bottom:"5px"}}>
                      <Icon onClick={() => this.removeItem()} type="close-circle" />
                    </span>
                 </p>
                 <p>
                    <Button size="small" style={{fontSize:"13px"}} onClick={()=>this.showModal()}>
                      50%
                      <Icon style={{color:"green"}} type="arrow-up" />
                      <Icon style={{color:"red"}} type="arrow-down" />
                    </Button>
                  </p>
                  <Modal
                    title="Live Strategy Information"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                  
                  <p style={{textAlign:"center"}}>
                      Original Spot: {this.props.details.ori_spot} | Current Spot: {this.props.details.cur_spot}
                    </p>
                    <p style={{textAlign:"center"}}>
                      Original LTP 1: {this.props.details.ori_ltp_1} | Current LTP 1: {this.props.details.cur_ltp_1}
                    </p>
                    <p style={{textAlign:"center"}}>
                      Original LTP 2: {this.props.details.ori_ltp_2} | Current LTP 2: {this.props.details.cur_ltp_2}
                    </p>
                    <p style={{textAlign:"center"}}>
                      Original Profit: {this.props.details.ori_profit} | Current Profit: {this.props.details.cur_profit}
                    </p>
                    <p style={{textAlign:"center"}}>
                      Lot Size: {this.props.details.lotsize} | Investment: {this.props.details.investment}
                    </p>
                </Modal>
             </main>
        );
    }
}

const mapStateToProps = (state) => {
  return{
    items: state.live_strategy_tracker_items
  }
}
export default connect(mapStateToProps)(StrategyWatcherItems);