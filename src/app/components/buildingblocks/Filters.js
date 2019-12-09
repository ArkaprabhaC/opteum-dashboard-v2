import React, {Fragment, Component} from 'react';
import { Row,Col,Checkbox,Icon } from 'antd';
import 'antd/dist/antd.css';

class Filters extends Component{
    constructor(props) {
        super(props);
        this.checkboxRef = React.createRef();
        this.state={
            show: false,
            showDot: false
        }
      }
    onToggle = () => {
        this.setState({
            show: !this.state.show
        })
    }
   
    render(){
        
        return(
              <div style={{margin:"0 auto"}}>  
                   <div style={{padding:"10px", borderBottom:"2px solid #33FF00"}}>
                        <label style={{marginLeft:"10px"}}>{this.props.name}: 
                            {this.state.showDot && 
                                <span className="dot" style={{height: "5px",width: "5px", backgroundColor: "red",borderRadius: "50%",display: "inline-block"}}></span>
                            }
                        </label>
                        
                        {this.state.show ? 
                        <Icon onClick={this.onToggle} style={{float:'right',marginTop:'5px',marginRight:"10px"}} type="minus" />
                        :  <Icon onClick={this.onToggle} style={{float:'right',marginTop:'5px',marginRight:"10px"}} type="plus" /> 
                        }
                   </div>
                    <Row>
                        {this.state.show && this.props.values.map((el,index)=>(
                            <Col key={el+index} span={24} style={{borderBottom:'1px solid #E8E8E8',padding:'10px'}}>
                               <Checkbox ref={this.checkboxRef} value={el}>{el}</Checkbox>
                             </Col>
                        ))}
                    </Row>
               </div>    
        )
    }
}

export default Filters;