## Certainly! Here's a curated list of 100 interview questions for React.js developers:

### Basic Concepts:

1. What is React also key features of React? \
   It is Javascript library for building user interface.

    - Includes a virtual DOM for efficient rendering,
    - JXS for writing HTML in Javascript,
    - component-based structure for reusable UI element.

2. What is JSX?\
   Is a syntax extension javascript,
   that allow to html code within javascript

3. How does React handle data flow?\
   It is using one way data flow, where data flow from parent to child.

4. What are props in React?\
   Props are short for properties and used to pass data from parent to child.

5. What are Stateful and Stateless components?\
   Stateful components is also known as class components have internal state manage by react,
   Stateless components is also known as function components don not have state.

6. Explain the virtual DOM and its benefits?\
   Virtual DOM is a lightweight copy of the real DOM,
   that react uses efficient rerender and update UI.

7. What is the significance of keys in React lists?\
   `keys` is special attributes to identify which item change, add or remove in list,
   also improving performance during reconciliation.

### Component Lifecycle:

9. What are the lifecycle methods of React components? \
   That allow to developer to hook into specific points in a components lifecycle, \
   There are three main phases: Mounting, updating and Unmounting \
   `componentDidMount()` - After the components rerender for first time
   `componentDidUpdate()` - After the components is updated.

10. How can you optimize components using lifecycle methods? \
    It can be used to perform task such as fetch data,
    subscribing to events, or updating the DOM.

### State Management:

13. What is state in React?\
    State is a `Object` that is represent the internal state of components,
    and It can be changed over time.

14. How do you update state in React?\
    Using a `useState()` method provided by react.

15. What is the difference between state and props? \
    `props` are used pass data form parent to child components, \
    `state` used to manage data within the components

16. How would you manage state in a large application? \
    Its can be state management library like `redux` and `context API` for global state.

17. Explain the concept of lifting state up. \
    It refer to moving state from child components to their closest common ancestor.

18. What are controlled and uncontrolled components? \
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

### Routing and Navigation:

25. How do you implement routing in React? \
    Its allow to multiple route in your application and rerender based on the URL \
    `<Link>` used declarative navigation, and `<Route>` is used routes in react router.

26. What is nested routing in React? \
    Its refer to the ability to nest routes with each other to create hierarch URLs.

### Forms in React:

28. How do you handle forms in React? \
    `onChange` event handler to track change in form inputs.

29. Explain the `useRef()` in React forms. \
    Its access DOM nodes or elements create in the rerender method.

### Hooks:

32. What are React Hooks? \
    Hook allow function components to have access to state and other React feature.

33. Explain the useState Hook. \
    It returns an array with two values: the current state and a function to update it.

34. How do you use useEffect Hook? \
    It used to perform side effects in functional components, such as data fetching and DOM manipulation.

35. What are the rules of Hooks? \
    Rules of hooks include calling on the top level of our function components \
    Don't call hook inside loop, condition or nested function \
    Don't call hook regular javascript function \


36. Explain the useContext Hook. \
    provides function components access to the context value for a context object
    ...

### Optimization and Performance:

37. How can you optimize performance in React applications? \
    Techniques like code splitting, lazy loading and memorization.

38. Explain the concept of memoization in React. \
    It refer to process cashing the result of expensive function calls to improve performance.

### Testing:

41. What tools can you use for testing React applications?
42. How do you write unit tests for React components?
43. What is Jest and how is it used in React testing?
44. Explain snapshot testing in React.

### Styling:

48. What are the different ways to style components in React? \
    Inline style, CSS stylesheets, css modules, or css-in-js libraries like styled component. \
    `css-modules` - each css file is scoped to its corresponding components.
    `styled-component` - dynamic styled based on props.

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

### Redux:

Redux : Redux is predictable state container for javascript application.

Redux three core Principle:

-   single source of truth
-   state is read-only
-   changes are made with pure function (reducers)

Redux Thunk : Redux Thunk is `middleware` for redux that allow you to write asynchronous logic action creator.

### Context API and React Hooks:

Its Provides pass the data through the components tree without having a pass props down manually every level.

It consist of two parts: a `Provider` components that provide data and a `useContext` consumer component that consumes data
