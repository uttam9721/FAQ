// faqData.js
export const Data = [
  // 🔹 HTML & CSS Interview Questions
  {
    question: "What is HTML?",
    answer: "HTML (HyperText Markup Language) is the standard language for creating the structure of web pages."
  },
  {
    question: "What are semantic HTML elements?",
    answer: "Semantic elements clearly describe their meaning, like <header>, <footer>, <article>, and <section>."
  },
  {
    question: "What is the difference between <div> and <span>?",
    answer: "<div> is a block-level element, while <span> is inline. Both are used for grouping elements."
  },
  {
    question: "What is the use of the <meta> tag?",
    answer: "The <meta> tag defines metadata like charset, viewport, and SEO-related information."
  },
  {
    question: "What is the purpose of the 'alt' attribute in images?",
    answer: "The 'alt' attribute provides alternative text for images, improving accessibility and SEO."
  },
  {
    question: "What is the difference between id and class?",
    answer: "'id' is unique and used once per page. 'class' can be reused on multiple elements."
  },
  {
    question: "What is the difference between HTML and XHTML?",
    answer: "XHTML is stricter than HTML and requires proper closing of all tags and attributes to be quoted."
  },
  {
    question: "What is the use of <iframe> tag?",
    answer: "<iframe> is used to embed another HTML page inside the current page."
  },
  {
    question: "What are void elements in HTML?",
    answer: "Void elements are self-closing and do not have closing tags, like <img>, <input>, <br>, <hr>."
  },
  {
    question: "What is the difference between <script> tag placed in <head> vs <body>?",
    answer: "Scripts in <head> may delay rendering. Placing them at the end of <body> improves performance."

  },

  // CSS Questions
  {
    question: "What is CSS?",
    answer: "CSS (Cascading Style Sheets) is used to style and layout HTML elements."
  },
  {
    question: "What are the types of CSS?",
    answer: "Inline, Internal, and External CSS."
  },
  {
    question: "What is the difference between relative, absolute, and fixed positioning?",
    answer: `- relative: Positioned relative to its normal position  
- absolute: Positioned relative to nearest positioned ancestor  
- fixed: Positioned relative to the viewport and doesn't scroll`
  },
  {
    question: "What is specificity in CSS?",
    answer: "Specificity defines which CSS rule is applied when multiple rules target the same element."
  },
  {
    question: "What is the Box Model in CSS?",
    answer: "The box model includes content, padding, border, and margin."
  },
  {
    question: "What is the difference between em and rem units?",
    answer: "'em' is relative to the parent font-size, 'rem' is relative to the root element."
  },
  {
    question: "What is the difference between visibility: hidden and display: none?",
    answer: "`visibility: hidden` hides the element but takes up space. `display: none` removes it completely from layout."
  },
  {
    question: "What are pseudo-classes in CSS?",
    answer: "Pseudo-classes define a special state of an element like :hover, :focus, :nth-child()."
  },
  {
    question: "How to apply styles to multiple selectors?",
    answer: "Separate them with commas: `h1, h2, p { color: red; }`"
  },
  {
    question: "What is the z-index in CSS?",
    answer: "z-index controls the vertical stacking order of elements (higher value = closer to front)."
  },
  {
    question: "How do media queries work in CSS?",
    answer: `Media queries make your website responsive by applying styles based on screen width:

\`\`\`css
@media (max-width: 768px) {
  body {
    background-color: lightblue;
  }
}
\`\`\``
  },
  {
    question: "What is the difference between inline, block, and inline-block?",
    answer: `- inline: does not start on a new line, cannot set width/height  
- block: starts on a new line, can set width/height  
- inline-block: behaves like inline but respects width/height`
  },
  {
    question: "How to center a div horizontally?",
    answer: `Use margin auto:

\`\`\`css
div {
  width: 200px;
  margin: 0 auto;
}
\`\`\``
  },
  {
    question: "What is the difference between max-width and width?",
    answer: "`width` sets a fixed width. `max-width` allows flexibility and prevents overflow on smaller screens."
  }
  ,
  {
    question: "What is React?",
    answer: "React is a JavaScript library used for building user interfaces, primarily for single-page applications. It’s maintained by Facebook and focuses on component-based architecture."
  },
  {
    question: "What is JSX?",
    answer: "JSX stands for JavaScript XML. It is a syntax extension for JavaScript that looks similar to HTML and is used to describe what the UI should look like in React components."
  },
  {
    question: "What are Components in React?",
    answer: "Components are the building blocks of any React application, allowing you to break the UI into reusable and isolated pieces. Components can be either class-based or functional."
  },
  {
    question: "What is the difference between Functional and Class Components?",
    answer: "Class components are ES6 classes that extend React.Component, whereas Functional components are simpler functions that take props and return JSX. Functional components can use hooks to manage state and side effects."
  },
  {
    question: "What is the Virtual DOM?",
    answer: "The Virtual DOM is a lightweight, in-memory representation of the actual DOM. React uses it to optimize rendering by comparing the current and previous versions of the virtual DOM and updating only the parts that changed."
  },
  {
    question: "What are Props?",
    answer: "Props (short for properties) are used to pass data from one component to another. They are read-only and cannot be modified by the receiving component."
  },
  {
    question: "What is the State in React?",
    answer: "State is an object that determines how a component renders and behaves. Unlike props, state is mutable and is managed within the component."
  },
  {
    question: "What is the difference between State and Props?",
    answer: "Props are passed from parent to child and are immutable, whereas State is managed within the component and can change over time."
  },
  {
    question: "What is the use of the useState hook?",
    answer: "useState is a hook that allows you to add state to functional components. It returns the current state and a function to update it."
  },
  {
    question: "What is the use of the useEffect hook?",
    answer: "useEffect is used to perform side effects in functional components like fetching data, subscribing to events, or interacting with the DOM."
  },
  {
    question: "What is the purpose of Keys in React?",
    answer: "Keys help React identify which items have changed, are added, or are removed in a list. They help optimize rendering performance."
  },
  {
    question: "What are React Fragments?",
    answer: "Fragments allow you to group multiple elements without adding extra nodes to the DOM."
  },
  {
    question: "What is the Context API in React?",
    answer: "The Context API is used to avoid prop drilling by allowing you to pass data through the component tree without manually passing props at every level."
  },
  {
    question: "What is a Higher-Order Component (HOC)?",
    answer: "A HOC is a function that takes a component and returns a new enhanced component."
  },
  {
    question: "What are React Hooks?",
    answer: "Hooks are functions that let you use state and lifecycle features in functional components."
  },
  {
    question: "What is useMemo and when would you use it?",
    answer: "useMemo is used to memoize expensive computations to avoid re-calculating them unless dependencies change."
  },
  {
    question: "What is the use of useCallback?",
    answer: "useCallback returns a memoized version of a function and prevents unnecessary re-creation on re-renders."
  },
  {
    question: "What is useRef in React?",
    answer: "useRef returns a mutable object that persists across renders and is commonly used to access DOM elements directly."
  },
  {
    question: "What are controlled and uncontrolled components in React?",
    answer: "Controlled components have their state managed by React; uncontrolled components manage their own state using refs."
  },
  {
    question: "What are Pure Components?",
    answer: "A PureComponent only re-renders when its props or state change, using a shallow comparison."
  },
  {
    question: "What is Prop Drilling and how can you avoid it?",
    answer: "Prop Drilling is passing props through multiple levels. It can be avoided using Context API or Redux."
  },
  {
    question: "What is Redux and how is it used in React?",
    answer: "Redux is a state management library that manages global state in a predictable way using actions and reducers."
  },
  {
    question: "What are React Portals?",
    answer: "React Portals allow rendering children into a DOM node outside of the parent component hierarchy."
  },
  {
    question: "What is React Suspense?",
    answer: "React Suspense lets you delay rendering until a condition (like data loading) is met."
  },
  {
    question: "How does React handle performance optimization?",
    answer: "React uses techniques like memoization, lazy loading, and PureComponents to optimize performance."
  },
  {
    question: "What is Server-Side Rendering (SSR)?",
    answer: "SSR renders React components on the server and sends fully-rendered HTML to the client, improving load time and SEO."
  },
  {
    question: "What is the difference between useReducer and useState?",
    answer: "useReducer is suitable for complex state logic; useState is better for simple state needs."
  },
  {
    question: "What is React Fiber?",
    answer: "React Fiber is the new reconciliation algorithm that enables features like incremental rendering and better prioritization."
  },
  {
    question: "What is Code Splitting?",
    answer: "Code splitting lets you load parts of the app on demand using React.lazy and Suspense to reduce initial load time."
  },
  {
    question: "What is Reconciliation in React?",
    answer: "Reconciliation is React's process of comparing the new virtual DOM with the previous one and updating only what changed."
  },
  {
    question: "How does React.memo work?",
    answer: "React.memo memoizes a component and prevents unnecessary re-renders if props haven’t changed."
  },
  {
    question: "What is Lazy Loading in React?",
    answer: "Lazy loading defers the loading of components until they're needed, improving initial performance."
  },
  {
    question: "How do you handle form validation in React?",
    answer: "Use custom logic in controlled components or third-party libraries like Formik or React Hook Form."
  },
  {
    question: "What is Strict Mode in React?",
    answer: "StrictMode highlights potential problems in an app, helping identify unsafe or deprecated practices."
  },
  {
    question: "What are Lifecycle Methods in React?",
    answer: "Lifecycle methods like componentDidMount and componentWillUnmount run at specific points in a class component's life."
  },
  // ✅ JavaScript Questions (from uploaded PDF)
  {
    question: "What is JavaScript? How is it different from Java?",
    answer: "JavaScript is a lightweight, interpreted language primarily used for enhancing interactivity on websites..."
  },
  {
    question: "Explain the difference between var, let, and const.",
    answer: "var is function-scoped and can be re-declared. let and const are block-scoped, where const cannot be re-declared or updated."
  },
  {
    question: "What are the data types in JavaScript?",
    answer: "JavaScript has primitive types (String, Number, Boolean, Null, Undefined, BigInt, Symbol) and reference types (Object, Array, Function)."
  },
  {
    question: "What is hoisting in JavaScript?",
    answer: "Hoisting is JavaScript's behavior of moving declarations to the top of their scope before execution."
  },
  {
    question: "What are closures in JavaScript?",
    answer: "A closure is a function that remembers variables from its lexical scope, even when called outside that scope."
  },
  {
    question: "What is the difference between == and === in JavaScript?",
    answer: "== performs type coercion; === checks both value and type strictly."
  },
  {
    question: "Explain how the this keyword works in JavaScript.",
    answer: "this refers to the object that called the function. In arrow functions, this is lexically inherited."
  },
  {
    question: "What is an event in JavaScript? How do you prevent default behavior?",
    answer: "An event is a browser interaction like click or keypress. Use event.preventDefault() to stop default behavior."
  },
  {
    question: "What are arrow functions, and how are they different from regular functions?",
    answer: "Arrow functions have shorter syntax, no own 'this', cannot be constructors, and lack an arguments object."
  },
  {
    question: "What is NaN in JavaScript? How do you check if a value is NaN?",
    answer: "NaN stands for Not-a-Number. Use Number.isNaN() or isNaN() to check for it."
  },
  {
    question: "What is the difference between synchronous and asynchronous programming in JavaScript?",
    answer: "Synchronous runs in sequence; async allows tasks to run concurrently using callbacks, promises, or async/await."
  },
  {
    question: "Explain the concept of promises in JavaScript.",
    answer: "A Promise represents an async operation result. It has states: pending, fulfilled, and rejected."
  },
  {
    question: "What are callback functions? How are they used?",
    answer: "A callback is a function passed to another function to be executed later."
  },
  {
    question: "What are JavaScript prototypes and how do they work?",
    answer: "Prototypes allow inheritance in JavaScript. Every object has a prototype chain."
  },
  {
    question: "What is the event loop in JavaScript?",
    answer: "The event loop handles async operations by checking the call stack and task queues."
  },
  {
    question: "Explain how map(), filter(), and reduce() functions work.",
    answer: "map transforms each array element. filter selects elements based on condition. reduce aggregates values."
  },
  {
    question: "What is the purpose of async and await in JavaScript?",
    answer: "They make asynchronous code look synchronous, simplifying promise chaining."
  },
  {
    question: "How does JavaScript handle memory management and garbage collection?",
    answer: "JavaScript automatically frees memory by garbage collecting objects no longer referenced."
  },
  {
    question: "What is the debounce function in JavaScript?",
    answer: "Debounce delays execution until after a pause; throttle limits how often a function runs."
  },
  {
    question: "What is destructuring in JavaScript?",
    answer: "Destructuring lets you unpack values from arrays/objects into variables."
  },
  {
    question: "Explain the concept of event delegation in JavaScript.",
    answer: "Event delegation uses a parent listener to manage events from child elements."
  },
  {
    question: "What are generators in JavaScript, and how do they differ from regular functions?",
    answer: "Generators use function* and yield; they pause and resume execution."
  },
  {
    question: "What are JavaScript modules, and how do you use import and export?",
    answer: "Modules split code into reusable files using export and import statements."
  },
  {
    question: "What is the Proxy object in JavaScript, and what are its use cases?",
    answer: "Proxy allows defining custom behavior for fundamental operations on objects."
  },
  {
    question: "Explain currying in JavaScript.",
    answer: "Currying transforms a function with multiple arguments into a series of functions with one argument."
  },
  {
    question: "What are the differences between deep cloning and shallow cloning in JavaScript?",
    answer: "Shallow copy copies references; deep copy duplicates all nested objects."
  },
  {
    question: "What is memoization, and how would you implement it in JavaScript?",
    answer: "Memoization caches function results for better performance on repeated calls."
  },
  {
    question: "Explain the concept of weak maps and weak sets in JavaScript.",
    answer: "WeakMap/WeakSet store weak references to objects, allowing garbage collection."
  },
  {
    question: "What is the difference between function declarations and function expressions?",
    answer: "Declarations are hoisted; expressions are not."
  },
  {
    question: "What is a JavaScript Symbol, and when would you use it?",
    answer: "Symbols are unique and immutable, often used as non-enumerable object property keys."
  },
  {
    question: "How do the apply, call, and bind methods work in JavaScript?",
    answer: "apply and call invoke functions with a given this; bind returns a new function."
  },
  {
    question: "What is the purpose of the async iterator, and how does it differ from a regular iterator?",
    answer: "Async iterators handle asynchronous data streams using for-await-of loops."
  },
  {
    question: "How can you prevent object mutation in JavaScript?",
    answer: "Use Object.freeze(), spread syntax, or deep cloning."
  },
  {
    question: "Reverse Words in a String in JavaScript.",
    answer: "Split the string by spaces, reverse the array, and join back."
  },
  {
    question: "Check for Balanced Parentheses.",
    answer: "Use a stack to track opening and closing parentheses."
  },
  {
    question: "Remove Duplicates from an Array.",
    answer: "Use Set or filter with indexOf to remove duplicates."
  },
  {
    question: "Find the Largest Sum of Contiguous Subarray (Kadane’s Algorithm)",
    answer: "Iterate through the array, tracking max current sum and global max."
  },
  {
    question: "Find the First Non-Repeated Character in a String.",
    answer: "Use a frequency map to count and find the first character with count 1."
  },
  {
    question: "Find Missing Number in a Sequence (O(n) Time Complexity).",
    answer: "Calculate expected sum and subtract actual sum to find the missing number."
  },
  {
    question: "What is MongoDB?",
    answer: "MongoDB is a NoSQL document database that stores data in flexible, JSON-like documents (BSON)."
  },
  {
    question: "What is the difference between MongoDB and SQL databases?",
    answer: "MongoDB is schema-less, document-oriented, and NoSQL, while SQL databases are structured and use tables."
  },
  {
    question: "What is a document in MongoDB?",
    answer: "A document is a JSON-like object containing key-value pairs that MongoDB uses to store data."
  },
  {
    question: "What is a collection in MongoDB?",
    answer: "A collection is a group of MongoDB documents, similar to a table in SQL."
  },
  {
    question: "What is BSON?",
    answer: "BSON is a binary format used to store data in MongoDB, extending JSON with additional types."
  },
  {
    question: "How to insert data into a MongoDB collection?",
    answer: "Use insertOne or insertMany methods to add documents: db.users.insertOne({ name: 'Uttam', age: 23 })"
  },
  {
    question: "How to retrieve documents from a collection?",
    answer: "Use db.collection.find() to fetch all or filtered documents."
  },
  {
    question: "How to update a document in MongoDB?",
    answer: "Use updateOne or updateMany with $set operator to modify documents."
  },
  {
    question: "How to delete a document from MongoDB?",
    answer: "Use deleteOne or deleteMany to remove documents from a collection."
  },
  {
    question: "How to use projection in MongoDB?",
    answer: "Specify fields to include or exclude in the result using db.collection.find({}, { field: 1 })"
  },
  {
    question: "What are common MongoDB query operators?",
    answer: "Operators include $gt, $lt, $in, $or, $and for advanced querying."
  },
  {
    question: "How to sort results in MongoDB?",
    answer: "Use sort() method: db.collection.find().sort({ field: 1 })"
  },
  {
    question: "How to limit and skip documents?",
    answer: "Use limit() and skip() for pagination: db.collection.find().skip(5).limit(10)"
  },
  {
    question: "What is indexing in MongoDB?",
    answer: "Indexes speed up queries by avoiding full collection scans."
  },
  {
    question: "How to create an index?",
    answer: "Use createIndex method: db.collection.createIndex({ field: 1 })"
  },
  {
    question: "What is the aggregation framework in MongoDB?",
    answer: "It processes data through stages like match, group, sort, and project for advanced analysis."
  },
  {
    question: "Example of a simple aggregation query?",
    answer: "db.collection.aggregate([{ $match: { age: { $gt: 20 } } }, { $group: { _id: '$age', total: { $sum: 1 } } }])"
  },
  {
    question: "Is MongoDB schema-less?",
    answer: "Yes, it allows storing documents with different structures in the same collection."
  },
  {
    question: "How does MongoDB ensure data security?",
    answer: "Through authentication, authorization, TLS encryption, and role-based access control (RBAC)."
  },
  {
    question: "What is replication in MongoDB?",
    answer: "Replication creates multiple copies of data (replica sets) for high availability."
  },
  {
    question: "What is sharding?",
    answer: "Sharding distributes data across multiple machines for horizontal scalability."
  },
  {
    question: "How to check MongoDB version?",
    answer: "Use db.version() in the Mongo shell."
  },
  {
    question: "How to show all collections in a database?",
    answer: "Use show collections in the Mongo shell."
  },
  {
    question: "How to switch databases in MongoDB shell?",
    answer: "Use use <databaseName> to switch databases."
  },
  {
    question: "How to count documents in a collection?",
    answer: "Use db.collection.countDocuments() for an accurate count."
  },
  // 🔹 MongoDB Questions
  

  // 🔹 Express.js Questions (with code)
  {
    question: "What is Express.js?",
    answer: "Express.js is a web framework for Node.js that simplifies server-side and API development."
  },
  {
    question: "How to create a basic Express server?",
    answer: `Example:
\`\`\`js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => console.log('Server running on port 3000'));
\`\`\``
  },
  {
    question: "How to serve static files in Express?",
    answer: `Use \`express.static()\` middleware:

\`\`\`js
app.use(express.static('public'));
\`\`\`

Place your static files (HTML, CSS, JS) in the 'public' folder.`
  },
  {
    question: "How to parse JSON body in Express?",
    answer: `Use built-in middleware:

\`\`\`js
app.use(express.json());
\`\`\``
  },
  {
    question: "How to define routes in Express?",
    answer: `Use route methods like \`app.get()\`, \`app.post()\`, etc.

\`\`\`js
app.get('/about', (req, res) => {
  res.send('About Page');
});
\`\`\``
  },
  {
    question: "How to create POST endpoint in Express?",
    answer: `Example:

\`\`\`js
app.post('/user', (req, res) => {
  const data = req.body;
  res.send(data);
});
\`\`\``
  },
  {
    question: "What is middleware in Express?",
    answer: `Middleware functions run before final request handling.

\`\`\`js
app.use((req, res, next) => {
  console.log('Middleware running');
  next();
});
\`\`\``
  },
  {
    question: "How to modularize routes using Router?",
    answer: `Use \`express.Router()\` in a separate file:

\`\`\`js
// userRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.send('User Home'));

module.exports = router;
\`\`\`

In main file:
\`\`\`js
const userRoutes = require('./userRoutes');
app.use('/users', userRoutes);
\`\`\``
  },
  {
    question: "How to handle 404 error in Express?",
    answer: `Place at the end of all routes:

\`\`\`js
app.use((req, res) => {
  res.status(404).send('Page Not Found');
});
\`\`\``
  },
  {
    question: "How to enable CORS in Express?",
    answer: `Install and use CORS middleware:

\`\`\`bash
npm install cors
\`\`\`

\`\`\`js
const cors = require('cors');
app.use(cors());
\`\`\``
  },
  {
    question: "How to handle errors globally in Express?",
    answer: `Use error-handling middleware:

\`\`\`js
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
\`\`\``
  },
  {
    question: "How to upload files using Multer in Express?",
    answer: `Install multer:

\`\`\`bash
npm install multer
\`\`\`

\`\`\`js
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  res.send('File uploaded');
});
\`\`\``
  },
  {
    question: "What is app.listen() in Express?",
    answer: `It starts the server:

\`\`\`js
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
\`\`\``
  },
  {
    question: "What are req.params, req.query, and req.body?",
    answer: `- \`req.params\` → URL params (e.g., /user/:id)  
- \`req.query\` → Query string (?search=abc)  
- \`req.body\` → POST data (needs express.json())`
  },
  {
    question: "How to implement REST API with Express?",
    answer: `Example CRUD routes:

\`\`\`js
app.get('/items', ...);       // Read
app.post('/items', ...);      // Create
app.put('/items/:id', ...);   // Update
app.delete('/items/:id', ...);// Delete
\`\`\``
  },
  {
    question: "How to connect MongoDB with Express?",
    answer: `Use Mongoose:

\`\`\`js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));
\`\`\``
  }
  ,
  // 🔹 Node.js Questions
  {
    question: "What is Node.js?",
    answer: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows you to run JavaScript on the server-side."
  },
  {
    question: "Is Node.js single-threaded or multi-threaded?",
    answer: "Node.js is single-threaded with event loop and non-blocking I/O operations, enabling asynchronous programming."
  },
  {
    question: "What is the use of npm?",
    answer: "npm (Node Package Manager) is used to install, manage, and share packages/modules in Node.js."
  },
  {
    question: "How do you initialize a Node.js project?",
    answer: "Use the command `npm init` or `npm init -y` to create a package.json file."
  },
  {
    question: "How do you import and export modules in Node.js?",
    answer: `Use \`require()\` and \`module.exports\` in CommonJS:
\`\`\`js
// sum.js
module.exports = (a, b) => a + b;

// app.js
const sum = require('./sum');
console.log(sum(2, 3));
\`\`\``
  },
  {
    question: "What is the difference between require and import?",
    answer: "`require` is used in CommonJS (default in Node.js), `import` is used in ES Modules with type: 'module' in package.json."
  },
  {
    question: "What is the event loop in Node.js?",
    answer: "The event loop is the mechanism that handles asynchronous callbacks in Node.js using a non-blocking I/O model."
  },
  {
    question: "What is a callback function?",
    answer: `A callback is a function passed as an argument to another function and is executed later.

\`\`\`js
fs.readFile('file.txt', (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
\`\`\``
  },
  {
    question: "What is the difference between synchronous and asynchronous functions?",
    answer: "Synchronous functions block execution until the task is finished, while asynchronous functions do not block the main thread."
  },
  {
    question: "How to read a file in Node.js?",
    answer: `Use the built-in 'fs' module:

\`\`\`js
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
\`\`\``
  },
  {
    question: "What is the purpose of the fs module?",
    answer: "`fs` is the File System module used to interact with the file system, such as reading or writing files."
  },
  {
    question: "What is the use of path module in Node.js?",
    answer: "`path` is a core module that provides utilities for handling and transforming file paths."
  },
  {
    question: "How to create a server using Node.js without Express?",
    answer: `Use the built-in http module:

\`\`\`js
const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Hello World');
  res.end();
});

server.listen(3000);
\`\`\``
  },
  {
    question: "What is middleware in Node.js?",
    answer: "Middleware generally applies to Express.js. In pure Node.js, middleware-like behavior is implemented manually."
  },
  {
    question: "What is a stream in Node.js?",
    answer: "Streams are used to handle reading/writing large amounts of data efficiently in chunks instead of all at once."
  },
  {
    question: "What is buffer in Node.js?",
    answer: "Buffer is a temporary storage for binary data while transferring between different streams or APIs."
  },
  {
    question: "What is the use of process object in Node.js?",
    answer: "`process` is a global object that provides information and control over the current Node.js process."
  },
  {
    question: "How to handle uncaught exceptions in Node.js?",
    answer: `Use the \`process\` event:

\`\`\`js
process.on('uncaughtException', (err) => {
  console.error('Error:', err);
});
\`\`\``
  },
  {
    question: "What are environment variables in Node.js?",
    answer: "Environment variables are used to store config or sensitive data. Access them using `process.env.VARIABLE_NAME`."
  },
  {
    question: "How do you make an HTTP request in Node.js?",
    answer: `Use built-in \`https\` or external modules like \`axios\` or \`node-fetch\`.

\`\`\`js
const https = require('https');

https.get('https://api.github.com', (res) => {
  res.on('data', (chunk) => console.log(chunk.toString()));
});
\`\`\``
  },
  {
    question: "What are some common built-in modules in Node.js?",
    answer: "`fs`, `http`, `path`, `os`, `url`, `crypto`, `events`, `stream`, `zlib`, etc."
  },
  {
    question: "What is the use of the 'os' module?",
    answer: "It provides system-level information like hostname, platform, memory usage, CPUs, etc."
  },
  {
    question: "How to handle promises in Node.js?",
    answer: `Use \`.then()\` and \`.catch()\`, or async/await:

\`\`\`js
async function getData() {
  try {
    const res = await fetch('https://api.com');
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
\`\`\``
  }
];
