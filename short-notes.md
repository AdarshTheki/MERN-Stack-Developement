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
   JSX stands for JavascriptXML, Its allow to html code within javascript

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

    - **Effect without Cleanup:** This side effect will be used in useEffect which does not restrict the browser from screen update. It also improves the responsiveness of an application. A few common examples are network requests, Logging, manual DOM mutations, etc.

    - **Effect with Cleanup:** Some of the Hook effects will require the cleanup after updating of DOM is done. For example, if you want to set up an external data source subscription, it requires cleaning up the memory else there might be a problem of memory leak. It is a known fact that React will carry out the cleanup of memory when the unmounting of components happens. But the effects will run for each render() method rather than for any specific method. Thus we can say that, before execution of the effects succeeding time the React will also cleanup effects from the preceding render

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

### Routing and Navigation:

25. How do you implement routing in React? \
    Its allow to multiple route in your application and rerender based on the URL \
    BrowserRouter,Routes, Route, Link

### Forms in React:

28. How do you handle forms in React? \
    `onChange` event handler to track change in form inputs.

29. Explain the `useRef()` in React forms. \
    Its access DOM nodes or elements create in the rerender method.

### Hooks:

32. What are React Hooks? \
    Hook allow function components to have access to state and other React feature. \
    Rules of hooks include calling on the top level of our function components \
    Don't call hook inside loop, condition or nested function \
    Don't call hook regular javascript function \

33. Explain the `useState` Hook. \
    It returns an array with two values: the current state and a function to update it.

34. How do you use `useEffect` Hook? \
    It used to perform side effects in functional components, such as data fetching and DOM manipulation. 

35. Explain use of `refs` ? \
    Earlier, refs were only limited to class components but now it can also be accessible in function components through the useRef Hook in React

    -   Managing focus, media playback, or text section.
    -   Integrating with DOM libraries by third-party.
    -   Triggering the imperative animations.

36. Explain `custom` Hooks ? \
    Custom Hooks will allow you for avoiding multiple layers of abstraction or wrapper hell that might come along with Render Props and HoCs

37. Explain the `useContext` Hook. \
    Context API allows data to be passed through a component tree without having to pass props manually at every level. This makes it easier to share data between components.

38. Redux:

    -   Redux is predictable state container for javascript application.
    -   Redux three core Principle:

        -   single source of truth
        -   state is read-only
        -   changes are made with pure function (reducers)

    -   Redux Thunk : Redux Thunk is `middleware` for redux that allow you to write asynchronous logic action creator.

39. Additional Hooks:
    -   userReducer()
    -   useMemo()
    -   useCallback()
    -   useLayoutEffect()
    -   useRef()
    -   useImperativeHandle()
    -   useDebugValue()

### Optimization and Performance:

37. How can you `optimize performance` in React ? \
    -   Techniques like code splitting,
    -   Memorization `useMemo()` : Memorization is form of cashing where the return value of the function is cashed based on its parameters, Its CPU-Expensive functions.
    -   `React.PureComponent` : to reduce the re-renders of a component unnecessarily.
    -   Maintaining State colocation
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
    4. Import a stylesheet file: @import "path/to/style.css";

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
