## Javascript:

-   **Define:** Javascript is a High-level, Interpreter, single thread language.
-   **Character:** scripting & interpreter language, dynamic typing, prototype base object oriented programming.
-   **Usage:** primary used client side, enhanced web page, server side web dev with node.js or mobile app.
-   **Differ with JAVA:** Main used standalone application, Mobile app(android), multi-thread, statically typing language.

### Data Types:

-   **Primitive:**
    1.  string : It represent a single or double quote,
    2.  number : It represent Number decimal or without decimal,
    3.  boolean : Logical entity true or false value,
    4.  null : It represent a non-existent or invalid value,
    5.  undefine: variable declared but not assigned,
    6.  bigint : It ac store larger number
    7.  symbol : It is used to store an asynchronous and unique value,
-   **Non-Primitive:** Its store multiple or complex values,
    -   function, methods, or
    -   Array these is all about object.

### Hosting:

Hoisting is the default behavior of javascript, where all the variable and function declarations are moved on top.

**Note** : variable declarations are hoisted, not initialize/assign.

### Variables & Scope:

-   **var** is a functional(global) scope, it re-declare variable & reassign value,
-   **let** is a block scope, Allows re-assign value but not re-declare within the same scope.
-   **const** is a block scope, it cannot be reassigned/declaration.

### Different between "==" & "===" operators :

-   `==` compare values,
-   `===` compare both value or datatype.

### What is NaN function or compare operator :

**NuN** : It is represent the **Not-a-Number** value, `typeof` of `NaN` will return a Number.\
Note- `isNaN()` function converts the given value to a Number type, and then equates to `NaN`.

Compare Operator : **==** is compare value, **===** compare both value & Datatype.

### Strict Mode :

-   Duplicate argument are not allowed.
-   Not allowed to create global variable.
-   To define 'strick mode'at the start of the script.

### Object:

Object is a collection of data & properties with key/ value formate.

-   Object Literal,
-   Constructor Object
-   Built-in Object

### Functions:

5. **Arrow function (ES6+):**
   Do not have their own `this` context, Especially useful for short, one-line expressions.

6. **Callback Functions:**
   Function is passed as an argument to another function and executed later. Commonly used to asynchronous operation such as data fetching, file reading, event handling

7. **Higher-Order Functions:**
   That take one or more functions as arguments to return new functions. Abstract common patterns or functional programming enable operation `map, filter`...etc.

8. **Closures function:**
   closure is inner function access to the outer function scope, and also return.

9. **Immediately Invoked Function Expressions (IIFE)**:
   Avoiding Global Scope Pollution or create Private Scopes

10. **Currying Functions:** Function is transformed into a sequence of functions, each taking a single argument.

11. **Generator Functions (ES6+):** Generator functions allow you to define an iterative algorithm by writing a function that can be paused and resumed. They use the `yield` keyword to produce a sequence of values.

```js
function* countUp() {
    let count = 0;
    while (true) {
        yield count++;
    }
}

const counter = countUp();
console.log(counter.next().value); // Output: 0
console.log(counter.next().value); // Output: 1
```

### Arrow Function Vs Regular Function:

-   Maintain `lexical scope` on `this` available in arrow function.
-   Not allow to create `construction` function using arrow function.
-   Not allow to used `arguments` object in arrow function or
-   Not allow `new` keyword to create instances in arrow function

### `this` keyword ?

-   The `this` keywords refer to the object that the function is a property of.
-   The value of `this` keyword will always depends on the object that is invoking the function.

### call, apply and bind method ?

`call()` execute the function immediately. It takes individual arguments
`apply()` execute the function immediately. It takes arguments as an array
`bind()` returns a new function with the correct context set for later execution.

### Difference between `exec()` and `test()` methods :

The `exec()` and `test()` methods in JavaScript when working with regular expressions:

-   The `exec()` method searches for a specified match within a string using a regular expression. it returns an `array` otherwise return `null`. Syntax: `regularExpressionObj.exec(string)`
-   The `test()` method checks whether a specified pattern exists in a string. it return true or false. Syntax: `regularExpressionObj.test(string)`

### Prototypal Inheritance:

-   Every object has a prototype properties.
-   It objects inherit properties and methods from their prototypes.
-   Prototypes create a chain, allowing for shared behavior among objects, `Object.prototype.`

### Set:

```
new Set(), add(), delete(), has(), size(), clear()
```

### Promise:

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

It is commonly used for handling asynchronous operations, such as fetching data from a server, reading a file, or making an HTTP request. A Promise has three states: `pending`, `fulfilled`, or `rejected`.

-   Parallel Requests : `const [result1, result2] = await Promise.all([promise1, promise2])`
-   Sequential Requests: chaining promise using `.then().then().catch()`

```js
// creating a promise:
const myPromise = new Promise((resolve, reject) => {
    const data = false;
    if (!data) {
        resolve('operation complete success');
    } else {
        reject('operation failed');
    }
});
// handle a promise with then() or catch()
myPromise.then((result) => console.log(result)).catch((err) => console.log(err));

// Handle multiple promise
const promise1 = fetchData();
const promise2 = fetchData();
Promise.all([promise1, promise2]).then(([result1, result2]) => console.log(result1, result2));

// Handle using with Async / Await:
const fetchDataAsync = async () => {
    try {
        const result = await fetchData();
    } catch (error) {
        console.log(error);
    }
};
```

### Event Loop:

-   The event loop constantly checks two things: the `call stack` and the `event queue`.
-   If the call stack is empty, the event loop takes the first event from the queue and pushes it onto the call stack, making it the current operation.
-   The event loop continues this process, ensuring that the call stack is always empty before processing the next event from the queue.

Web API: (Separate Data Execute)

1. Job Queue:(Micro tasks - first run)
    - process.nextTick(),
    - Promise callback,
    - async function,
    - Queue MicroTask,
2. Task Queue:(Macro tasks - second run)
    - setTimeout()
    - setInterval()
    - setImmediate()

### Shallow & Deep copy:

-   **Shallow copy:** : Share reference.

    -   object.assign({}, object)
    -   spread operator {...object}
    -   Object.prototype.slice()

-   **Deep copy:** Independent copy of the entries object hierarchy.
    -   JASON.pase(JASON.stringify(object))
    -   structuredClone().
    -   lodash libraries used.

### Document Object Model (DOM) :

-   When an HTML file is loaded into a browser, JavaScript interacts with the DOM created by the browser.
-   JavaScript can’t directly understand HTML tags but interprets them as objects in the DOM.
-   DOM allows dynamic updates, responsiveness, and interactivity in web pages.

It is a programming interface for HTML (HyperText Markup Language) and XML (Extensible Markup Language) documents.

### Different between HTML & XML

| Sr. | HTML                                  | XML                                                |
| --- | ------------------------------------- | -------------------------------------------------- |
| 1   | Displaying data on web pages.         | XML is designed for storing and transporting data. |
| 2   | Static in nature.                     | Dynamic in nature.                                 |
| 3   | Not case-sensitive.                   | case-sensitive.                                    |
| 4   | Can ignore small errors.              | Not allow small errors.                            |
| 5   | File extensions are `.html` or `.htm` | File extension is `.xml`                           |

### Differences between client-side and server-side :

| sr.                | client-side                                                | server-side                                                              |
| ------------------ | ---------------------------------------------------------- | ------------------------------------------------------------------------ |
| Execution Location | Runs on the `client machine`, which is the `browser`.      | Runs on the `server` that serves web pages                               |
| Purpose            | Enhances and manipulates `web pages` and `client browsers` | Provides `back-end access` to `databases`, `file systems`, and `servers` |
| Technologies       | HTML, CSS, and JavaScript.                                 | PHP, Python, Java, and Ruby.                                             |

-   **In summary:**

    -   **Client-side** JavaScript runs in the user’s browser, enhancing web pages.
    -   **Server-side** JavaScript executes on the web server, providing back-end functionality and dynamic content

### Event Propagation & Event Delegation:

**Event Propagation:** In DOM which events traverse through the hierarchy of elements in the document. There are three phases.

-   **Bubbling Phase:** The event bubbles up from the target element to the root element.( child to parent).
-   **Capturing phase:** - The event travels from the root element down to the target element. ( parent to child).

    -   **stopPropagation():** Stop continue to propagate up or down events but ancestor trigger event.

    -   **immediatePropagation():** Only trigger the current event element

    -   **preventDefault():** Stop the browser's default action

**Event Delegation:** It concept of event propagation, used to handle events for multiple child elements.

### Storage:

-   **Local Storage:** Object allows you to save key/value pairs in the browser. Larger storage capacity, persists across browser sessions, not sent to the server automatically (5-10 MB per domain).
-   **Session Storage:** Similar to localStorage but with a shorter lifespan, cleared when the session ends

-   **Cookies:** Small storage capacity, can have an expiration date, sent to the server with every request. (up to 4KB).
    `document.cookie = 'name=adarsh';`

### Critical Rendering Path (CRP):

-   CRP involves HTML parsing and DOM construct, CSS parsing, layout calculations, and painting.
-   Optimizing the Render Tree, CSS, and JavaScript is essential for faster rendering.
-   Minification, compression, and image optimization contribute to improved performance.

### Optimizing the performance:

1. **Minification and Compression:** Remove unnecessary whitespace, comments, and rename variables
2. **Bundle and Code Splitting:** Bundle multiple JavaScript files into a single file.
3. **lazy loading:** Use lazy loading for images, scripts, and other assets. Delay the loading of non-essential resources until they are needed.
4. **Async and Defer Attributes:** `async` allows scripts to be downloaded asynchronously without blocking HTML parsing. `defer` ensures scripts are executed in order after HTML parsing.
5. **Critical Path Rendering:** Minimize the number of render-blocking resources, such as CSS and JavaScript files.
6. **Optimized Images:** Compress and optimize images to reduce their file size. Employ lazy loading for images to defer loading until they are about to be displayed
7. **Service Workers:** Implement service workers to enable background tasks, caching, and offline capabilities.
8. **Reduce DOM Manipulation:** Minimize direct DOM manipulation, as it can be a performance bottleneck. Use efficient DOM manipulation techniques, such as document fragment or virtual DOM, to optimize updates.
9. **Throttle and Debounce:** `Throttling` ensures a function is not executed more than once in a specified time period, while `debouncing` delays the execution until a specified time has passed since the last invocation.
10. **Optimize Network Requests:** Use a content delivery network (CDN) to serve static assets from servers located closer to the user.
11. **Memory Management:** Be mindful of memory leaks by cleaning up event listeners, removing references to unused objects, and avoiding unnecessary global variables.
12. **Preconnect and Prefetch:** Use the <link> tag with `rel="preconnect"` to initiate early connections to third-party domains. Utilize <link> with `rel="prefetch"` to fetch and cache resources that will be needed in the future.
13. **Performance Monitoring:** Use performance monitoring tools and browser developer tools to identify bottlenecks and areas for improvement.
14. **Caching:** Explore service workers for client-side caching and offline capabilities.

### Fetch API:

**CORS (Cross-Origin Resource Sharing):**
Web browsers to restrict web pages from making requests to a different domain than the one that served the web page.

1. **Access-Control-Allow-Origin:** https://allowed-origin.com
2. **Access-Control-Allow-Methods:** GET, POST, PUT, DELETE
3. **Access-Control-Allow-Headers:** Content-Type, Authorization
4. **Access-Control-Allow-Credentials:** true
5. **Access-Control-Expose-Headers:** Content-Length, X-Content-Range

```js
fetch('https://api.example.com/data', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer token',
    },
    body: JSON.stringify({ name: 'Jon', age: 30 }),
})
    .then((res) => res.json())
    .catch((err) => console.error(err));
```
