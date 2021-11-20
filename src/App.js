import './App.css';
import React, { Component } from 'react';
import CounterCard from './components/CounterCard';

// function Apps() {
//   return (
//     <div className="App">
//       <CounterCard/>
//       <CounterCard/>
//       <CounterCard/>
//     </div>
//   );
// }


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      items: [
        {id: 1, value: 0},
        {id: 2, value: 0},
        {id: 3, value: 12}
      ]
    }
    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  onIncrement(id, value){
    const newItemsArray = [...this.state.items];
    newItemsArray[id-1].value = value+1;
    this.setState({
        items: newItemsArray
    });
  }
  onDecrement(id, value){
      const newItemsArray = [...this.state.items];
      newItemsArray[id-1].value = value-1;
      if(newItemsArray[id-1].value >= 0)
      {
        this.setState({
            items: newItemsArray
        });
      }
      else{
          alert('Decrement Not Possible');
      }
  }
  onDelete(id){
    const newItemsArray = [...this.state.items];
    newItemsArray[id-1].value = 0;
    this.setState({
      items: newItemsArray
    });
  }
  render() {
    return (
      <div className="App">
        {this.state.items.map((item, i)=>(
          <CounterCard 
            id={this.state.items[i].id}
            value={this.state.items[i].value}
            onIncrement = {this.onIncrement}
            onDecrement = {this.onDecrement}
            onDelete = {this.onDelete}
          />
        ))}
      </div>
    )
  }
}


// export default App;
