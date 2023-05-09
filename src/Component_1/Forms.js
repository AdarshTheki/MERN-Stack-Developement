import React, { Component } from "react";

class Forms extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Adarsh',   // default name use other null
      country: null,
    };
  };
  // nameChangeHandler = (event) => {
  //   console.log('Name:',event.target.value)
  // };
  // onChangeHandler = (event) => {
  //   console.log('Select:', event.target.value)
  // };

  // Submitted the data without refresher page.  
  submitHandler = (event) => {
    event.preventDefault();                     // hold the data
    console.log(this.state);
    const name = event.target.name.value;       // use input name: 'name'
    const country = event.target.country.value; // use select name: 'country'
    this.setState({ name, country }, () => {
      console.log(this.state);
      event.target.name.value = '';
      event.target.country.value = '';
    });
  }
  // catch the handle of default value in Inputs
  changeHandler = (event) => {
    const name = event.target.value;
    this.setState({ name });
  } 
  render() {
    const Style = {
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      flexDirection: 'column',  
      gap: '0.5rem', 
    }
    return (
      <div>
        <form onSubmit={this.submitHandler} style={Style}>
          <div>
            <label>Name</label>
            {/* Default value in inputs use 'value' and 'onChange' and catch 'this.changeHandler' */}
            <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} />
          </div>
          <div>
            <label>Country : </label>
            <select name="country" >
              <option value="A">001</option>
              <option value="B">002</option>
              <option value="C">003</option>
              <option value="D">004</option>
              <option value="E">005</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Forms;
