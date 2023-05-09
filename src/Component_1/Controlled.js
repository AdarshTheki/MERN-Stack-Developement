import React, { Component } from 'react'

// Form handling using Controlled Component

export default class Controlled extends Component {
  constructor(props) {
    super(props)  
    this.state = {
      name: 'Adarsh',
    }
  }
  changerHandler = (event) => {
    console.log(this.state.name);
    const name = event.target.value;
    this.setState({ name });
  };
  render() {
    return (
      <div>
        <form>
          <label htmlFor="">Name: </label>
          {/* name value null use this */}
          {/* <input type="text" name='user_name' onChange={this.changerHandler}/> */}
          <input type="text" name='user_name' value={this.state.name} onChange={this.changerHandler}/>
        </form>
      </div>
    )
  }
}
