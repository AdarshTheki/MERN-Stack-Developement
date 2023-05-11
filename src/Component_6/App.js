import React, { Component } from "react";
import { connect } from "react-redux";
import Counter from "./Counter.js";
import Checkout from "./Checkout.js";
import Button from "./Button.js";

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
      price: 1000,
    }
  };

  render() {
    return (
      <>
        <Counter counter={this.props.counter}/>
        <div>
          <Button data="+1" click={() => this.props.modifyHandler("INC", 1)} />
          <Button data="+1" click={() => this.props.modifyHandler("DEC", 1)} />
          <Button data="+2" click={() => this.props.modifyHandler("INC", 2)} />
          <Button data="+2" click={() => this.props.modifyHandler("DEC", 2)} />
        </div>
        <Checkout price={this.props.price} counter={this.props.counter} />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    price: state.price,
  }
}
const mapActionToProps = (dispatch) => {
  return {
    modifyHandler: (action, value) => {
      dispatch({
        type: action,
        data: value,
      })
    }
  }
}

export default connect(mapStateToProps, mapActionToProps)(App);
