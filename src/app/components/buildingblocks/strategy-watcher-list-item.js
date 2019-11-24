import React, {Fragment, Component} from 'react';
import './strategy-watcher-list-item.css';
import {Icon,Button,Tooltip,Checkbox,Modal} from 'antd';
import 'antd/dist/antd.css';
import {connect} from 'react-redux';

class StrategyWatcherItems extends Component{

    state={
        visible:false
    }
    TooltipText = <div>
        <span>Click for more details</span>
        <span><Checkbox checked={this.props.checked} onChange={()=>{this.handleCheckBox()}} style={{fontSize:"10px",color:"#fff"}}>Do not show again</Checkbox></span>
    </div>

    handleCheckBox = (e) => {
        console.log("hgjgj "+e);
        this.props.dispatch({ type: 'CHECKBOX_CHANGE'})
    }

    tooltipMarkup = () =>{
        console.log("sasas "+this.props.checked);
        if(this.props.checked === false){
            return (<Tooltip placement="topLeft" title={this.TooltipText}>
            <Button>50%<Icon style={{color:"green"}} type="arrow-up" /><Icon style={{color:"red"}} type="arrow-down" /></Button>
            </Tooltip> );
        }else{
            return <Button>50%<Icon style={{color:"green"}} type="arrow-up" /><Icon style={{color:"red"}} type="arrow-down" /></Button>
        }
    }

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
    render(){
        return (
            <main className="strategy_watcher_item">
                <p style={{fontWeight:"600"}}>#1024 | RELIANCE | 10 AUG 2019 <span style={{float:"right",fontSize:"18px",position:"relative", bottom:"10px",left:"10px"}}><Icon type="close-circle" /></span></p>
                <p>
                    <Tooltip placement="topLeft" title={this.TooltipText}>
                        <Button onClick={this.showModal}>50%<Icon style={{color:"green"}} type="arrow-up" /><Icon style={{color:"red"}} type="arrow-down" /></Button>
                    </Tooltip>

                    <Modal
                        title="Live Strategy Information"
                        visible={this.state.visible}
                        onOk={this.handleOk}
                        onCancel={this.handleCancel}
                        >
                       
                       <p style={{textAlign:"center"}}>
                          Original Spot: 12345 | Current Spot: 12345
                        </p>
                        <p style={{textAlign:"center"}}>
                          Original LTP 1 | Current LTP 1
                        </p>
                        <p style={{textAlign:"center"}}>
                          Original LTP 2 | Current LTP 2
                        </p>
                        <p style={{textAlign:"center"}}>
                          Original Profit: 50% | Current Profit: 60%
                        </p>
                        <p style={{textAlign:"center"}}>
                          Lot Size: 33333 | Investment: 124234221.22
                        </p>
                    </Modal>
                 </p>
            </main>
         );
    }
}

const mapStateToProps = (state) => {
    return {
       checked: state.checked_checkBox
    }
}
export default connect(mapStateToProps)(StrategyWatcherItems);