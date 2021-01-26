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
   }
  render() { 
    return (<div>
     {this.state.counters.map(counter => <Counter key={counter.id} value={counter.value} selected={counter.selected} product={counter.product}>
       <h2>{counter.product}</h2>
       </Counter>)}
    </div>  );
  }
}
 
export default Counters;