console.log("Lesson: Conditional operator");
/**
 * about: Comparison operators
 * definition: The comparison operator is used to compare two values and returns a boolean value true or false. Comparison operators are used in decision making and repetition.
 * docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
 *
 */

// let activistName = "Udin";
// let value = 0;

// Equal to Operator: '=='
// compare type of activis name is type of string
// console.log(activistName == "Udin");

// Strict Equal to Operator: '==='
// sama - sama compare 2 values
// tapi dia ngebandingin tipe data sama value

// let value = 10;
// console.log(value === "12");
// console.log(value === 12);

// Not Equal to Operator = !==
// console.log(activistName != "Udin");

// Strict Not Equal to Operator
// console.log(activistName !== "udin");

// Greater than Operator
// value = 4;
// console.log(value > 3);

// Greater than or Equal to Operator
// value = 2;
// console.log(value >= 3);

// Less than Operator
// value = 5;
// console.log(value < 3);

// Less than or Equal to Operator
// value = 56;
// console.log(value <= 3);

/**
 * about: Logical operators
 * definition: Logical operators to perform logical AND, OR and NOT operations.
 * docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#logical_operators
 */

// Logical AND Operator: "&&"
// true AND true -> true
// true AND false -> false
// false AND true -> false
// false AND false -> false

let total = 30;

// if (total < 100 && total >= 30) {
//     console.log("value: " + total);
//     console.log("total is less then 100 and total is greater or equal to 30");
// }

// Logical OR Operator "||" -> double vertical slash or vertical bar
let result = total <= 30 || total > 30;
let isString = "12" === 12 || "udin" == "udin";
const value = 0 | "default string";
if (value == 0) {
  console.log("it is empty value");
}
// Logical NOT Operator
// NOT: bakalan check semua falsy value
let myName = 0;

// myName = "Udin Bahrudin";
// if (!myName) {
//     console.log("name tidak seharusnya kosong");
// } else {
//     console.log("name: " + myName);
// }

// optional chaining
// Nullish Coalescing
