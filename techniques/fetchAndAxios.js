// ! Difference between Fetch and Axios

// ** API Design

// ?? Fetch is a native browser API, introduced in ES6, for making HTTP requests. It provides a simple and powerful interface for fetching resources asynchronously across the network.

// ? Axios is a third-party library specifically designed for making HTTP requests in JavaScript. It provides a more feature-rich and user-friendly API compared to Fetch.

// ** Promises vs Interceptors:

//? Fetch uses Promises for handling asynchronous operations. It returns a Promise that resolves to the Response object representing the response to the request.

//? Axios also uses Promises, but it provides additional features such as request and response interceptors. Interceptors allow you to intercept and modify requests or responses before they are sent or received.

// ** Default Configuration:

// ? Fetch does not provide built-in support for setting default configurations such as default headers or base URLs. You need to manually configure each request with the desired options.

// ? Axios allows you to define default configurations that are applied to all requests made with Axios instances. This includes default headers, base URLs, timeouts, and more.

// ** Browser Support:

// ? Fetch is supported by most modern browsers, but it lacks support in some older browsers (e.g., Internet Explorer).

//? Axios is a standalone library that can be used in any JavaScript environment, including browsers and Node.js. It provides consistent behavior across different environments and has broader browser support.
