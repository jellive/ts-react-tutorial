import React, { Component } from 'react'
type Props = {}
type State = { counter: number, fixed: number }

class Counter extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            counter: 0,
            fixed: 1
        };
    }
    handleIncrease = () => {
      this.setState(
        {
          counter: this.state.counter + 1
        },
        () => {
          console.log(this.state.counter);
        }
      );
    };
  
    handleDecrease = () => {
      this.setState(state => ({
        counter: state.counter - 1
      }));
    };

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleIncrease}>+1</button>
                <button onClick={this.handleDecrease}>-1</button>
                <p>고정된 값: {this.state.fixed}</p>
            </div>
        );
    }
}

export default Counter