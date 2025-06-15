// !! Es6 string Methods

// !! startsWith() Method

// This is used to check if a string starts with a subString

// ** This method returns true if a string starts with a subString and false if not.

//  syntax

// !! String.startsWith(searchString [,position])

//** searchString is the characters to be searched for at the start of this string.

// ** position is an optional parameter that determines the start position to search for the searchString. It defaults to 0.

// Example
const title = "Jack and Jill Went Up the Hill";

const res = title.startsWith("Jack", 0); //returns true
const res2 = title.startsWith("Jack", 4); //returns false
// console.log(res, res2);

// ##############################

// !! endsWith() Method

// This is used to check if a string ends with a subString

// ** This method returns true if a string ends with a subString and false if not.

//  syntax

// !! String.endsWith(searchString [,length])

// length is an optional parameter that determines the length of the string to search. It defaults to the length of the string.

const titleExmaple2 = "Jack and Jill Went Up the Hill";
const endsResponse = titleExmaple2.endsWith("Hill"); //true

// !! The endsWith() method matches characters case-sensitively, therefore, the following example returns false:
const endsResponse2 = titleExmaple2.endsWith("hill"); //false

// ##############################

// !! includes() Method

// This is used to check if a string contains a subString

// !! String.includes(searchString [,position])

//** The includes() method returns true if the searchString found in the string; otherwise false.

let email = "admin@example.com";

//!! it's case sensitive
console.log(email.includes("admin")); //returns true
console.log(email.includes("mubarak")); //false
