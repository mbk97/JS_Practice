//! A JavaScript class is a blueprint for creating objects. A class encapsulates data and functions that manipulate data.

// syntax
class Person {
  // ** the constructor() is where you can initialize the properties of an instance. JavaScript automatically calls the constructor() method when you instantiate an object of the class.
  constructor(name, age, job) {
    this.detail = name;
    this.age = age;
    this.job = job;
  }

  // ** The getName() is called a method of the Person class. Like a constructor function, you can call the methods of a class using the following syntax:

  // ** objectName.methodName(args)
  getUserData() {
    return {
      name: this.detail,
      age: this.age,
      job: this.job,
    };
  }
}

const John = new Person("Mubarak", 45, "Coding");

const userData = John.getUserData();
console.log(userData);

// ! Class Expression
// ** A class expression provides you with an alternative way to define a new class.
// ** A class expression doesn’t require an identifier after the class keyword. You can use a class expression in a variable declaration and pass it into a function as an argument.

let anotherPerson = class {
  constructor(data) {
    this.name = data.name;
    this.userName = data.userName;
    this.email = data.email;
  }

  getUserDataTwo() {
    return {
      name: this.name,
      userName: this.userName,
      email: this.email,
    };
  }
};

const data = {
  name: "Mubarak",
  userName: "mubarak_muhammed",
  email: "Mubarak@gmail.com",
};

const user = new anotherPerson(data);

console.log(user.getUserDataTwo());
