// ! Destructuring allows you to assign the values of an object or an array to individual variables

const details = {
  firstName: "Mubarak",
  lastName: "Muhammed",
};

// const { firstName, lastName } = details;

// ! Setting default values

let person = {
  firstName: "John",
  lastName: "Doe",
  currentAge: "",
};

let { firstName: name, middleName = "Lekan", currentAge: age = "22" } = person;

// ! Nested object destructuring
const employee = {
  id: 100,
  name: {
    firstName: "Olamilekan",
    lastName: "Muhammed",
  },
};

const {
  id,
  name: { firstName, lastName },
} = employee;

console.log(firstName);
