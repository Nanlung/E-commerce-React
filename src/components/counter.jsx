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
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? 'Zero' : value;
  }

}

export default Counter;