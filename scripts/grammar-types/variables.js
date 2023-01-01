"use strict";

/**
 * about: Variables or Declarations
 * type: {
 *      - var
 *      - let
 *      - const
 * add: came out with ES2015 (ES6)
 * docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types
 *
 * }
 */

// why we need variables?
// console.log("Title: Learn Advanced Javascript");

// use variables as symbolic names for values in your code.
// The names of variables, called identifiers, conform to certain rules.
// declaring variables: <type> <identifiers>;

// var vs let and const
// var declaration are globally scoped or function/locally scoped
// var is moved to the hop of JavaScript mechanisme before code execution

// weak:

// let
// block scoped
// can't re-declared it but can updated

// const

// const : constant
// initialize
// block scoped
// cannot be updated or re-declared
const x = "this is using type variable const";

// why use strict?
// Keywords reserved for future JavaScript versions can NOT be used as variable names in strict mode.
// ref: https://www.w3schools.com/js/js_strict.asp

// Restricted Names as Identifiers
// Naming Conventions JavaScript
// Camel Case (Pascal Case)

/*
 * name Conventions
 *
 * type: {
 *    - variable -> camelCase
 *    - constant -> camelCase || UPPER_SNAKE_CASE
 *    - function -> camelCase
 *    - class    -> PascalCase
 *    - private  -> _
 * }
 *
 * rules: 
   ```
     - Names are case-sensitive, lowercase and uppercase are different.
     - Start variable names with a letter, use camelCase for names.
     - Variable names should be self-descriptive, describing the stored value.
     - Boolean variables are usually prefixed with is or has.
     - must be a letter or underscore(_)
     - can't use any other special chars. ex: !@#$%&^()
     - can't use one of JS reserved words as a variable name
     - no limitation
   ```
*/

// Bad
// let #person;
// let personname;
// let person_name;
// let 1person;

// good
let count;
let countDown;
let firstName;
let isUser;
let organizationName;

// boolean type
// ‘is’ or ‘are’ or ‘has’.
let isModalOpen;
let isUserActive;
let areBlockUsers;
let hasAccess;
let hasLoggedIn;

// Array type
// ‘Arr’ or ‘Array’
let studentArr;
let studentArray;

// Don’t Use Variables Before it’s Defined
// Declare Variables At the Top!

// If we declare a variable with var , then we can use it before it’s declared because the variable declaration itself is hoisted.
