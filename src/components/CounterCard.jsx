import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import RemoveIcon from '@material-ui/icons/Remove';


export default class CounterCard extends Component {
    constructor(props){
        super(props);
        this.state={
            value: 0,
        }
        this.onIncrement = this.onIncrement.bind(this);
        this.onDecrement = this.onDecrement.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }
    onIncrement(){
        this.setState(prevState => ({
            value: prevState.value + 1
        }));
    }
    onDecrement(){
        if(this.state.value > 0)
        {
            this.setState(this.setState(prevState => ({
                value: prevState.value - 1
            })))
        }
        else{
            alert('Decrement Not Possible');
        }
    }
    onDelete(){
        this.setState({value : 0});
    }
    render() {
        return (
            <div className="counter-card">
                <div className="counter-card-title">
                    <font>{this.state.value}</font>
                </div>
                <div className="counter-card-ft-btns">
                    <Button color="primary" className="btn" onClick={this.onIncrement}>
                        <AddIcon fontSize="large" />
                    </Button>
                    <Button color="primary" className="btn" disabled={this.state.value===0?true:false} onClick={this.onDecrement}>
                        <RemoveIcon fontSize="large"/>
                    </Button>
                    <Button color="secondary" className="btn" onClick={this.onDelete}>
                        <DeleteIcon fontSize="large"/>
                    </Button>
                </div>
            </div>
        )
    }
}
