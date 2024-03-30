## Certainly! Here's a curated list of 100 interview questions for React.js developers:

### Basic Concepts:

1. What is React \
   It is Javascript library for building user interface.

2. Features of React? \

    - Includes a virtual DOM for efficient rendering,
    - support server-side rendering.
    - component-based structure for reusable UI element.
    - JXS for writing HTML in Javascript,
    - Huge ecosystem of libraries to choose from.
    - SEO friendly.

3. What is JSX? \
   JSX stands for Javascript XML, Its allow to html code within javascript

4. React handle data flow?\
   It is using one way data flow, where data flow from parent to child.

5. `Props` and `State` in React?\
   Props are short for properties and used to pass data from parent to child.

    State is a `Object` that is represent the internal state of components, and It can be changed over time.

6. Different between `props` & `state` in React? \
   `Props` : Immutable, Has better performance, can be passed to child components

    `State` : Owned by its components, Locally scoped, Writable/Mutable, has `setState()` method to modify properties

7. What are Stateful and Stateless components? \
   Stateful components is also known as class components have internal state manage by react, \
   Stateless components is also known as function components don not have state.

8. `Keys` in React ? \
   `keys` is special attributes to identify which item change, add or remove in list, also improving performance during reconciliation. \

    Note - Keys used within arrays should be unique among siblings. They need not be globally unique.

### Component Lifecycle:

9. `lifecycle` methods of React components? \

    - Initialization
    - Mounting : `componentWillMount` and `componentDidMount`
    - Updating: `componentWillUpdate`, `shouldComponentWillUpdate`, `render`, and `componentDidUpdate`
    - Unmounting: `componentWillUnmount`

10. Various `lifecycle` methods are ? \

    - `constructor()` - set up the initial state and initial values.
    - `getDerivedStateFromProps()` - its returns an object that made changes to the state in initial rerendering in DOM.
    - `render()` - output or re-render the HTML to the DOM
    - `componentDidMount()`
    - `shouldComponentUpdate()` : The Boolean value will be returned by this method which will specify whether React should proceed further with the rendering or not. The default value for this method will be True.
    - `getSnapshotBeforeUpdate()` : This method will provide access for the props as well as for the state before the update. It is possible to check the previously present value before the update, even after the update.
    - `componentDidUpdate()`
    - `componentWillUnmount()`

11. Type of Side effect in react component \
    The `cleanup function` is an integral part of the useEffect hook in React. It allows us to perform necessary cleanup tasks before a component unmounts. When our code runs and reruns for every render, the useEffect hook ensures that it cleans up after itself using this function.

    - **Example:** Data fetching, subscription, manual DOM manipulate & setting up timers

### State Management:

14. How do you update state in React?\
    Using a `useState()` method provided by react.

15. Manage state in a large application? \
    Its can be state management library like `redux` and `context API` for global state.

16. Explain the concept of lifting state up. \
    It refer to moving state from child components to their closest common ancestor.

17. What are controlled and uncontrolled components? \
    controlled - components whose value controlled by react \
    Un-controlled - components have their own internal state

### Component Communication:

19. How do you pass data between components in React? \
    using `props`, context, or custom event.

20. What are higher-order components (HOCs)? \
    function that takes a components and return a new components with enhanced functionality.

21. Explain the use of context in React. \
    Its allow you to share data between components without having pass `props` through every level components.

22. How do you handle events in React? \
    Event handle using synthetic event, which are wrappers around native browser events.

23. What are synthetic events in React? \
    It combines the behavior of supported events of different browsers into one API, ensuring that events work identically across all browsers.

### Hooks:

1. What are React Hooks? \
   They allow functional components to use states and manage side effects.
   Hooks provide access to state and other React features without writing a class.
   They simplify state management and lifecycle handling.

2. **useState:** This hook lets you manage component state. You declare a state variable and update it directly.
3. **useEffect:** Use this hook for handling side effects like API calls, subscriptions, and timers. It runs after rendering and during subsequent re-renders.
4. **useContext:** Allows components to receive information from distant parents without passing it as props. Useful for themes, localization, etc.
5. **useRef:** Refs hold information (like DOM nodes) that isn’t used for rendering. Unlike state, updating a ref doesn’t trigger re-rendering.
6. **useReducer:** Similar to useState, but with more complex state logic. Useful for managing state transitions predictably.
7. **useMemo:** Cache the result of an expensive calculation to avoid unnecessary re-computation during re-renders.
8. **useCallback:** Memoizes a function definition. Useful when passing callbacks to optimized child components.
9. **useLayoutEffect:** Measures layout and fires during screen rerenders.
10. **useInsertionEffect:** Inserts CSS dynamically before DOM changes.

11. **Redux:**

    - **How Redux Works:**
        - **Action:** A user interaction or event triggers an action (e.g., clicking a button).
        - **Reducer:** Reducers handle actions and update the state accordingly.
        - **Store:** The updated state is stored in the Redux store.
        - **Components:** React components read data from the store and re-render when the state changes.
    - **Why use Redux**
        - **Centralized State Management**
        - **Predictable State Update**
    - **Types:**
        1. `createSlice`: It generated a reducer, action creators, and action types based on defined slice of your state.
        2. `configureStore` : It combines your reducers, sets up middleware, and creates the redux store.
        3. `createAsyncThunk` : It generates action creators for handling asynchronous operations (e.g. API calls)
        4. `createEntityAdapter` : It simplifies managing Normalized Data (e.g. lists of entities)
        5. `middleware` : It allows you to handle side effects, asynchronous actions, and more.

12. Additional Hooks:
    - userReducer()
    - useMemo()
    - useCallback()
    - useLayoutEffect()
    - useRef()
    - useImperativeHandle()
    - useDebugValue()

### Optimization and Performance:

37. How can you `optimize performance` in React ? \
    -   Techniques like code splitting,
    -   Memorization `useMemo()` : Memorization is form of cashing where the return value of the function is cashed based on its parameters, Its CPU-Expensive functions.
    -   `React.PureComponent` : to reduce the re-renders of a component unnecessarily.
    -   Maintaining State coloration
    -   lazy loading

### Server-Side Rendering (SSR) and Next.js:

51. What is server-side rendering (SSR) in React? \
    SSR - The process of rendering the complete HTML page on the sever in response to a request and returning it to the client.

    request to server -> get data to server -> render HTML in server -> response HTML to the client -> Render CRP to the client

    SSR props:

    -   faster First Content Paint (FCP) and Time to Interactive (TTI)
    -   SEO enable optimization - not all bots support Javascript.
    -   Additional budget for client-side Javascript.
    -   Client computation and bandwidth offloaded to te server.

    SSR cons :

    -   full page reloads required for some interaction.
    -   slow Time to First Byte (TTFB)
    -

    CSR - where the browser download HTML and javascript files separately, and the UI is constructed on the client side.

## CSS (Cascading Stye Sheet):

1. Advantages: Separation of content from presentation, Easy to maintain, Bandwidth
2. Limitation: Browser Compatibility, Cross Browser issue, There is no parent selector
3. Box Modal: Content, padding, border, margin.

4. Include a CSS in a webpage:

    1. External Style Sheet: <link rel="stylesheet" type="text/css" href="mystyles.css" />
    2. Embed CSS with a style tag: <style type="text/css"></style>
    3. Add inline styles to HTML elements: <h2 style="color:red;background:black">Inline Style</h2>
    4. Import a stylesheet file: `@import "path/to/style.css";`

5. Types of Selectors:

    1. Universal: `*`
    2. Element Type : `ul`
    3. ID: `#container`
    4. Class: `.container`
    5. Descendant Combinator: `#container .box`
    6. Child Combinator: `#container > .box`
    7. General Sibling Combinator: `h2 ~ p`
    8. Adjacent Sibling Combinator: `p + p`
    9. Attribute Selector: `input [type=”text”]`

6. Lazy Loading Image:

```html
<img
    class="lazy"
    src="placeholder-image.jpg"
    data-src="image-to-lazy-load-1x.jpg"
    data-srcset="image-to-lazy-load-2x.jpg 2x, image-to-lazy-load-1x.jpg 1x"
    alt="I'm an image!" />
```

Sure, here are some resources where you can find interview questions for frontend developers focusing on React and JavaScript:

1. [GeeksforGeeks](^1^) provides a list of over 50 React interview questions covering everything from basic to advanced React concepts such as Virtual DOM, Components, State and Props, JSX, Hooks, Routing, and more.

2. [Edureka](^2^) offers a list of over 100 React interview questions. The questions are categorized into General React Interview Questions, React Component Interview Questions, React Redux Interview Questions, and React Router Interview Questions.

For JavaScript specific questions:

1. [Built In](^5^) provides a list of top 50 JavaScript interview questions with example answers. The questions cover a wide range of topics from basic JavaScript concepts to more advanced topics.

2. [InterviewBit](^6^) has a list of frontend developer interview questions that cover JavaScript and other frontend technologies.

3. [DEV Community](^8^) has compiled 52 frontend interview questions in JavaScript.

## Please note that the actual number of questions may vary, and I recommend going through these resources for comprehensive preparation. Good luck with your interview preparation!

1. Top 50+ React Interview Questions and Answers (2024) - GeeksforGeeks. https://www.geeksforgeeks.org/react-interview-questions/.
2. Top 100+ React Interview Questions and Answers in 2024 - Edureka. https://www.edureka.co/blog/interview-questions/react-interview-questions/.
3. Top 50 JavaScript Interview Questions With Example Answers. https://builtin.com/software-engineering-perspectives/javascript-interview-questions.
4. Top Front End Developer Interview Questions (2024) - InterviewBit. https://www.interviewbit.com/front-end-developer-interview-questions/.
5. 52 Frontend Interview Questions - JavaScript - DEV Community. https://dev.to/m_midas/52-frontend-interview-questions-javascript-59h6.
6. Top Frontend Developer Interview Questions and Answers (2024). https://www.geeksforgeeks.org/front-end-developer-interview-questions/.
7. Top 100 React JS Interview Questions and Answers | Flexiple. https://flexiple.com/react/interview-questions.
8. Front End Interview JavaScript Questions — How to Prepare. https://www.greatfrontend.com/front-end-interview-guidebook/javascript.
9. 50 Frontend Interview Questions - JavaScript - DEV Community. https://dev.to/mahmoudomaibnelkhattab/49-frontend-interview-questions-javascript-5ffc.
