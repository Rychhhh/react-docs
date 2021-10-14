import React, { Component } from "react";

// Context
import { RootContext } from "../App";

class LifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 1,
    };
    console.log("Constructor");
  }

  static getDelivedStateFromProps(props, state) {
    console.log("GetdeliverStatePorps");
    return null;
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        order: this.state.order + 10,
      });
    }, 3000);
  }

  render() {
    return (
      <RootContext.Consumer>
        {(value) => {
          return (
            <div>
              <p>Total order anda : {value.state.totalOrder}</p>
              <button>Component Lifecycle {this.state.order}</button>
            </div>
          );
        }}
      </RootContext.Consumer>
    );
  }
}

export default LifeCycle;
