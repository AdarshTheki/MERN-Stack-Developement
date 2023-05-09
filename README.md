# Getting Started with Create React App

## Feature in React:

1.  Component-based architecture
2.  Virtual DOM
3.  JSX syntax
4.  Unidirectional data flow (One-way Binding)
5.  State management
6.  React hooks
7.  Performance optimization

**Install `Node.js:`** React.js is built on top of Node.js, so you'll need to install it first.

```cmd
npm install -g create-react-app
create-react-app my-app
cd my-app
npm start
```

### Class based Components:
They are typically used when you need to maintain `state` or `use lifecycle` methods in your component.
```jsx
class Message extends Component {
  render() {
    return <div>Hello, {this.props.name}!</div>;
  }
}
```

### Function based Components:
On the other hand, are simpler and lighter weight than class-based components. "They're typically used for simpler `UI components` that don't require state or lifecycle methods."
```jsx
function Message(props) {
  return <div>Hello, {props.name}!</div>;
}
```

## State:
State: To `store` and manage component data. And also reference to the `state object` within a class-based component.

```jsx
//  ... in class use
    constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
//...
 <p>Count: {this.state.count}</p>
  <button onClick={() => this.setState({ count: this.state.count + 1 })}> Increment </button>
```

## Event Handlers:
```jsx
//... in function as well as class use
  handleClick() {
    alert('Button clicked!');
  }
//...
 <button onClick={this.handleClick}> Click me </button>
```
In React, `bind()` is a method that is used to bind the value of this to a specific function. `onClick={this.handleClick.bind(this)}`

## Axios in React:
It provides an easy-to-use API for performing asynchronous HTTP requests with features such as request and response interception, automatic JSON parsing, and error handling.
```jsx
  // install: npm i axios --s 
  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => setData(response.data));
      .catch(error => console.error(error));
  }, []);
```
## Redux :
Redux follows the `unidirectional data` flow. It means that your application data will follow in one-way binding data flow. As the application grows & becomes complex, it is hard to reproduce issues and add new features if you have no control over the state of your application.

![Redux GIF](https://d33wubrfki0l68.cloudfront.net/01cc198232551a7e180f4e9e327b5ab22d9d14e7/b33f4/assets/images/reduxdataflowdiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif)
This is just a basic example of how Redux works, but it should give you a sense of how the flow of data works in a Redux application. By providing a predictable and organized way to manage application state, Redux can help make your applications more maintainable and easier to reason about.

## How to Render List in react
To render a list in React, you can use the `map()` function to iterate over an array of data and generate a series of JSX elements for each item in the array.
```jsx
const items = props.items;

 <ul> {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))} </ul>
```