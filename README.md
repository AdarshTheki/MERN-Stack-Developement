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

## Router
- useParams(): The `useParams` hook returns an object of key/value pairs of the dynamic params from the current URL that were matched by the `<Route path>`. Child routes inherit all params from their parent routes.
  ```jsx
  <Route path='/user/:name' element={<User/>} />
  <Link path='/user/anil'> Anil </Link>
  ```

- useSearchParams(): The `useSearchParams` hook is used to read and modify the query string in the URL for the current location. Like React's own useState hook, useSearchParams returns an array of two values:
  ```jsx
  let [searchParams, setSearchParams] = useSearchParams();
  const age = searchParams.get('age');
  ``` 

## Axios in React:
It provides an easy-to-use API for performing asynchronous HTTP requests with features such as request and response interception, automatic JSON parsing, and error handling.
```js
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
1. **Install Redux** and react-redux packages:
   ```bash
   npm install redux react-redux
   ```
2. **Create a store:**
   A store is the central object that holds the state of the application. To create a store, you need to import `createStore` from the redux package and define an initial state. You can create a file called `store.js` and add the following code:
   
   ```javascript
   import { createStore } from 'redux';
   const initialState = {
     // define your initial state here
   };
   const store = createStore(reducer, initialState);
   export default store;
   ```
   In the code above, `reducer` is a function that takes in the current state and an action as arguments and returns a new state. We will define the reducer function in the next step.

3. **Create a reducer:**
   A reducer is a pure function that receives the current state and an action as input and returns the new state based on the action. To create a reducer, you need to create a file called `reducer.js` and add the following code:
   
   ```javascript
   const initialState = {
     // define your initial state here
   };
   const reducer = (state = initialState, action) => {
     switch (action.type) {
       // define your cases here
       default:
         return state;
     }
   };
   export default reducer;
   ```
   
   In the code above, we define the `initialState` and the `reducer` function that receives the current state and an action as input and returns the new state based on the action.

4. **Connect the store to the app:**
   To connect the store to the app, you need to use the `Provider` component from the react-redux package. You can wrap your root component with the `Provider` component and pass the store as a prop. You can create a file called `index.js` and add the following code:
   ```jsx
   import React from 'react';
   import ReactDOM from 'react-dom';
   import { Provider } from 'react-redux';
   import store from './store';
   import App from './App';
   ReactDOM.render(
     <Provider store={store}>
       <App />
     </Provider>,
     document.getElementById('root')
   );
   ```
   
   In the code above, we import the `Provider` component from the react-redux package, the `store` from the `store.js` file, and the `App` component. We wrap the `App` component with the `Provider` component and pass the `store` as a prop.

With the above steps, you have set up Redux and the store in your React application. Now you can start using Redux to manage the state of your components.

