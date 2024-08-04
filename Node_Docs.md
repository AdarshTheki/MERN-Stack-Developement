### Node:

-   Node.js is a runtime environment that allows you to run JavaScript code outside of a web browser.
-   It is built on Chrome's V8 JavaScript engine and provides an event-driven, non-blocking I/O model, making it lightweight and efficient, especially for building scalable network applications.
-   Node.js is commonly used for server-side programming to build web servers, APIs, and various types of backend services

### Type of Module:

File base module (core module), Building base module (local machine), Third party module

-   **fs (file system)**
    You can read files, write files, create directories, and manage file related operations. `fs.readFile` this file create asynchronously.

```js
const fs = require('fs');

fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('error files', err.message);
        return;
    }
    console.log('file content:', data);
});

fs.writeFile('example.txt', 'Hello content!', (err) => {
    if (err) throw err.message;
    console.log('File saved or updated!');
});

fs.appendFile('example.txt', 'This is my text.', (err) => {
    if (err) throw err;
    console.log('Content appended!');
});

fs.open('example2.txt', 'w', (err, file) => {
    if (err) throw err;
    console.log('File created or opened!');
});
```

---

-   **url (URLs Module)**:
    It provides functionality for working with URLs

```js
const url = require('url');
const address = 'http://localhost:8080/default.htm?year=2017&month=february';
const parsedUrl = url.parse(address, true);

console.log(parsedUrl.host); // 'localhost:8080'
console.log(parsedUrl.pathname); // '/default.htm'
console.log(parsedUrl.search); // '?year=2017&month=february'
console.log(parsedUrl.query); // { year: '2017', month: 'february' }
console.log(parsedUrl.query.month); // 'february'
```

---

-   **path (Path Module)**
    provides utilities for working with file and directory paths

```js
const path = require('path');

const location = '/Users/Refsnes/demo_path.js';
console.log(path.basename(location)); // Output: 'demo_path.js'
console.log(path.dirname(location)); // Output: '/Users/Refsnes'
console.log(path.extname(location)); // Output: '.js'

const fullPath = path.join('/Users', 'Refsnes', 'demo_path.js');
console.log(fullPath); // Output: '/Users/Refsnes/demo_path.js'

const absolutePath = path.resolve('folder', 'file.txt');
console.log(absolutePath); // Output: '/full/path/to/folder/file.txt'

const normalizedPath = path.normalize('/Users/../Refsnes/demo_path.js');
console.log(normalizedPath); // Output: '/Refsnes/demo_path.js'
```

---

-   **event (Event Module)**:
    It allows you to create, fire, and listen for custom events.

```js
const events = require('events');
// "EventEmitter" You can create an instance of this class to handle custom events.
const eventEmitter = new events.EventEmitter();

// Create an event handler
const myEventHandler = function () {
    console.log('I hear a scream!');
};

// Assign the event handler to the "scream" event
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event
eventEmitter.emit('scream');
```

---

-   **util (utils module):**
    It provides utility functions that are helpful for various tasks.

```js
const util = require('util');
const fs = require('fs');

// util.format():  string by replacing placeholders with specified arguments.
const txt = 'Congratulate %s on his %dth birthday!';
const result = util.format(txt, 'Linus', 6);
console.log(result); // Output: "Congratulate Linus on his 6th birthday!"

// util.promisify : Converts a callback-based function into a promise-based function.
const readFileAsync = util.promisify(fs.readFile);
readFileAsync('file.txt', 'utf8')
    .then((data) => console.log(data))
    .catch((err) => console.error(err));

// util.inspect(): Inspects an object and returns it as a string.
const myObject = { name: 'John', age: 30 };
console.log(util.inspect(myObject));
```

---

-   **crypto (crypto module):**
    It provides essential cryptographic functionalities for securing data.

```js
const crypto = require('crypto');

const password = 'mySecretPassword';
const hash = crypto.createHash('sha256').update(password).digest('hex');
console.log('Hashed password:', hash);

const randomToken = crypto.randomBytes(16).toString('hex');
console.log('Random token:', randomToken);
```

---

-   **querystring module:**
    It provides utilities for parsing and formatting URL query strings.

```js
const querystring = require('querystring');

const qs = 'foo=bar&abc=xyz&abc=123';
const parsed = querystring.parse(qs);
console.log(parsed); // { foo: 'bar', abc: [ 'xyz', '123' ] }

const obj = { name: 'John', age: 30 };
const queryString = querystring.stringify(obj);
console.log(queryString); // 'name=John&age=30'
```

-   **http (HTTP server) Also Create Own Custom Server**:
    To create an HTTP server, handle requests, and send responses.

```js
const http = require('http');

const PORT = 4000;
const hostname = 'localhost';

const server = http.createServer((req, res, next) => {
    if (req.url === '/') {
        return res.end('Hello, Home Page!');
    }
    if (req.url === '/about') {
        return res.end('<h1>About Page</h1>');
    } else {
        return res.end('<h1>404 Page Not found!</h1>');
    }
});

server.listen(PORT, hostname, () => {
    console.log(`Start http://localhost:${PORT}, HostName:${hostname}`);
});
```

---

### Middleware:

Middleware in Express.js is a function that has access to the request object (req), the response object (res), and the next middleware function in the application's request

```js
// Parses the data and makes it accessible in the "req.body" object.
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

// To serve static files such as images, CSS files, and JavaScript files
app.use(express.static('public'));

// Set up cookie parser middleware with a secret
app.use(cookieParser('Hellow my name is adarsh'));

app.get('/', (req, res) => {
    const userId = '123';
    res.cookie('user_id', userId, { signed: true }).json({
        userID: req.signedCookies,
    });
    // Note: used signedCookies, check to cookie in application user_id encoded
});
```

### JSON Web Token

JWT, is an open standard used to share security information between two parties — a `client` and a `server`. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. Eg: Authentication, Stateless & Scalable, Compact & Self-Contained, Security and flexibility.

```js
const secretKey = 'my-secret-key'; // Keep this secret!

// Middleware to verify JWT
const authenticate = (req, res, next) => {
    const token = req?.cookies?.userId;
    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded; // Attach user info to request
        next();
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
};

// Generate JWT during login
const token = jwt.sign({ myObject }, secretKey, { expiresIn: '1h' });
```

### Generate token to attach function with in Schemas:

```js
// Pre-save middleware to hash the password before saving it to the database
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Method to compare the provided password with the stored hashed password
userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// Method to generate an access token on short time for the user
userSchema.methods.generateAccessToken = function () {
    return jwt.sign({ useData }, accessToken, { expiresIn: '1h' });
};

// Method to generate a refresh token on long time for the user
userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({ _id: this._id }, REFRESH_TOKEN, { expiresIn: '1h' });
};
```

### stream in Nodejs

Node.js streams break data into smaller chunks for efficient processing, ideal for tasks like file operations and data transformations.

The four main types of Node.js streams are `Readable`, `Writable`, `Duplex`, and `Transform`, each serving a specific purpose in data processing.
