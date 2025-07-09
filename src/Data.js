// faqData.js
export const Data = [
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
  }
];
