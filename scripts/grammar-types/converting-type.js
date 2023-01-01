"use strict";

// will expleined after Lesson: null & undefined
console.info("Lesson: Type Converting");
// checking the
// Converting to String

let udinAge;
udinAge = 32;

// console.log("the orginal type: " + typeof udinAge);

// 1 ->  operator (+) & ("")

// console.log("convert udinAge to String using tradiotional way");
// console.log(typeof udinAge);

// 2 -> String object
// udinAge = String(udinAge);
// console.log("convert udinAge to String using String Object way");
// console.log(typeof udinAge);

// 3 -> toString method
// udinAge = udinAge.toString();
// console.log("convert udinAge to String using toString() way");
// console.log(typeof udinAge);

// 4 using bactick (``)
udinAge = `${udinAge}`;

// the different
let test;
test = String(test);
// test = test.toString();

console.log("Converting string to type number");
console.log("the original type: " + typeof udinAge);

// Converting to Number
// 1 operator
udinAge = "-32";

// (+) operator
// udinAge = +udinAge;

// (*) operator
// console.log(udinAge / 1);

// both operator will not work or not recomended
// (/) operator
// (-) operator

// console.log(udinAge);
// console.log(typeof udinAge);

// 2 -> parseFLoat
// 3 -> parseInt()
// 4 -> Math.floor()
// 5 -> Number
// 6 -> Double tilde (~~)

// the different
