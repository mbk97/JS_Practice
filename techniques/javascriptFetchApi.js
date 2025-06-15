// ! The Fetch API is a JavaScript function that you can use to send a request to any Web API URL and get a response.

//! GET REQUEST

window.onload = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error fetching data:", error));
};

// ** Under the hood, the fetch() function returns a Promise, so you need to add the .then() and .catch() methods.

// ** When the request returns a response, the then() method will be called. If the request returns an error, then the catch() method will be executed

//! Without using the .json() on the response, the  body property will contains  ReadableStream. To use the ReadableStream in our JavaScript application, we need to convert it to call the json() method

//! POST REQUEST

// ** When you send a POST method, you need to set the request header and body properties to ensure a smooth process.

const payload = {
  name: "Mubarak Muhammed",
  email: "oyindamola850@gmail.com",
};

fetch("https://jsonplaceholder.typicode.com/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(payload),
})
  .then((res) => res.json())
  .then((data) => console.log(data));

//! PUT REQUEST
// ** A PUT request is used to create a new resource or update an existing one.

fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nathan Sebhastian",
    email: "nathanMubarak@mail.com",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

//! PATCH REQUEST

// ** The PATCH request is sent when you need to update an existing request.

fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    name: "Nathan Sebhastian",
    email: "nathanMubarak@mail.com",
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data));

//! DELETE REQUEST

// ** The DELETE request is sent when you need to DELETE an existing request permanently from the server.

fetch("https://jsonplaceholder.typicode.com/users/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data));

//! How to Use Async/Await With the Fetch API
try {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const json = await response.json();
  console.log(json);
} catch (error) {
  console.log(error);
}
