// ** Example

function getUsers() {
  return [
    { username: "john", email: "john@test.com" },
    { username: "jane", email: "jane@test.com" },
  ];
}

function findUser(username) {
  const users = getUsers();
  const data = users.filter((user) => user.username === username);
  return data;
}

// console.log(findUser("john"));

// ! The code in the findUser() function is synchronous and blocking. The findUser() function executes the getUsers() function to get a user array, calls the find() method on the users array to search for a user with a specific username, and returns the matched user.In practice, the getUsers() function may access a database or call an API to get the user list. Therefore, the getUsers() function will have a delay.

// ** To simulate the delay, you can use the setTimeout() function. For example:

function secondGetUsers() {
  let users = [];

  setTimeout(() => {
    const newUsers = [
      { username: "john", email: "john@test.com" },
      { username: "jane", email: "jane@test.com" },
    ];

    users.push(newUsers);
  }, 2000);

  return users;
}

function findUserTwo(username) {
  const users = secondGetUsers();
  const data = users.filter((user) => user.username === username);
  return data;
}

console.log(findUserTwo("jane"));

// ** The getUsers() won’t work properly and always returns an empty array. Therefore, the findUser() function won’t work as expected

// ! To solve the problem above, Javascript comes up with the concept of promises. The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// ** A promise object has a state that can be one of the following:
// ** Pending
// ** Fulfilled with a value
//**  Rejected for a reason

// * In the beginning, the state of a promise is pending, indicating that the asynchronous operation is in progress. Depending on the result of the asynchronous operation, the state changes to either fulfilled or rejected

// To create a promise object, you use the Promise() constructor:

const promise = new Promise((resolve, reject) => {
  // contain an operation
  // ...

  // return the state
  if (success) {
    resolve(value);
  } else {
    reject(error);
  }
});

// ** The promise constructor accepts a callback function that typically performs an asynchronous operation. This function is often referred to as an executor.In turn, the executor accepts two callback functions with the name resolve and reject.Note that the callback functions passed into the executor are resolve and reject by convention only.

// ! If the asynchronous operation completes successfully, the executor will call the resolve() function to change the state of the promise from pending to fulfilled with a value.In case of an error, the executor will call the reject() function to change the state of the promise from pending to rejected with the error reason.

// ! Consuming a Promise: then, catch, finally

// ** To get the value of a promise when it’s fulfilled, you call the then() method of the promise object. The following shows the syntax of the then() method:

//syntax === promise.then(onFulfilled,onRejected);

// ** The then() method accepts two callback functions: onFulfilled and onRejected.The then() method calls the onFulfilled() with a value, if the promise is fulfilled or the onRejected() with an error if the promise is rejected. Note that both onFulfilled and onRejected arguments are optional.
