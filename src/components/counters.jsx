import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
  state = { 
    counters: [
      {id: 1, value: 0, selected: true, product:"Books"},
      {id: 2, value: 0, selected: true, product:"Phones"},
      {id: 3, value: 0, selected: true, product:"Shoes"},
      {id: 4, value: 0, selected: false, product:"Fruits"}
    ]
   };

   handleReset = () => {
     const counters = this.state.counters.map(c => {
       c.value = 0;
       return c;
     });
     this.setState({ counters });
   };
   
   handleDecrement = () => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters});
  };

  render() { 
    return (<div>
      <button
      onClick={this.handleReset}
      className="btn btn-primary btn-sm m-2">Reset</button>
     {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value} selected={counter.selected} product={counter.product}>
       <h2>{counter.product}</h2>
       </Counter>)}
    </div>  );
  }
}
 
export default Counters;