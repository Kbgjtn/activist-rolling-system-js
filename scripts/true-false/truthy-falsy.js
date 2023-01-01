console.log("Lesson: Falsy & Truthy Values");
/**
 * falsy: is a value that is considered false when encountered in a Boolean context
 * value: {
 *      - NaN
 *      - null, undefined
 *      - false
 *      - (-0), 0 & 0n (Bint)
 *      - ""
 * }
 *
 * Docs: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 *
 * */

// Convertion to Boolean value

const user1 = "udin";
let isPaid = null;
console.log(isPaid);
console.log("value: ", isPaid);
console.log("type data: ", typeof isPaid);

// Examples of falsy

console.log("falsy or truthy: ", Boolean(isPaid));
console.log("falsy or truthy: ", Boolean(user1));

// let studentName = "";

// if (studentName == false) {
//     console.log("student doesn't exist");
// }

/**
 * truthy: is a value that is considered true when encountered in a Boolean context.
 * value: All values are true unless defined as false.
 *
 * Docs: https://developer.mozilla.org/en-US/docs/Glossary/Truthy
 *
 * */

// Examples of truthy

// let movieGenre = "action";
// let counter = 21;
// let myObject = {};
// let studentArr = [];

// if (studentArr) {
//     console.log(studentArr);
// } else {
//     console.log("no values");
// }
