import React, { Component } from "react";

// This is HOC.js:-

const WithLoading = (WrappedComponents) => {
  class withLoading extends Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: false,
      };
    }

    componentDidMount() {
      this.setState({ loading: true });
      // Simulating an asynchronous operation
      setTimeout(() => {
        this.setState({ loading: false });
      }, 2000);
    }

    render() {
      const { loading } = this.state;
      // Render the wrapped component with the loading state
      return loading ? (
        <h1>Loading... 🔎</h1>
      ) : (
        <WrappedComponents {...this.props} />
      );
    }
  }
  return withLoading;
};
export default WithLoading;

