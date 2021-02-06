import React, { Component } from 'react';


class Counter extends Component {
  
 

  


  render() { 
    
    return (<div>
      {this.props.children}
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button onClick={() => this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
      <button onClick={this.props.handleDecrement} className="btn btn-secondary m-2 btn-sm">Decrement</button>
      
      </div>);
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const {count} = this.props.counter;
    return count === 0 ? 'Zero' : count;
  }

}
 
export default Counter;