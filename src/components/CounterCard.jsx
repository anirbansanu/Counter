import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import RotateLeftIcon from '@material-ui/icons/RotateLeft';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';


export default class CounterCard extends Component {
    // constructor(props){
    //     super(props);
    //     this.state={
    //         value: 0,
    //     }
    //     this.onIncrement = this.onIncrement.bind(this);
    //     this.onDecrement = this.onDecrement.bind(this);
    //     this.onDelete = this.onDelete.bind(this);
    // }
    // onIncrement(){
    //     this.setState(prevState => ({
    //         value: prevprops.value + 1
    //     }));
    // }
    // onDecrement(){
    //     if(this.props.value > 0)
    //     {
    //         this.setState(this.setState(prevState => ({
    //             value: prevprops.value - 1
    //         })))
    //     }
    //     else{
    //         alert('Decrement Not Possible');
    //     }
    // }
    // onDelete(){
    //     this.setState({value : 0});
    // }
    render() {
        return (
            <div className="counter-card" key={this.props.id}>
                <div className="counter-card-title">
                    <font style={{userSelect: 'none'}}>{this.props.value}</font>
                </div>
                <div className="counter-card-ft-btns">
                    <Button color="primary" className="btn" onClick={()=>this.props.onIncrement(this.props.id,this.props.value)}>
                        <AddIcon fontSize="large" />
                    </Button>
                    <Button color="primary" className="btn" disabled={this.props.value===0?true:false} onClick={()=>this.props.onDecrement(this.props.id,this.props.value)}>
                        <RemoveIcon fontSize="large"/>
                    </Button>
                    <Button color="secondary" className="btn" onClick={()=>this.props.onDelete(this.props.id,this.props.value)}>
                        <RotateLeftIcon fontSize="large"/>
                    </Button>
                </div>
            </div>
        )
    }
}
