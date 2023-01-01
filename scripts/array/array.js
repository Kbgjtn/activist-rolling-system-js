/**
 * about: array
 * definition: An array is an object that can store multiple values together.
 *
 * docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * */

// Create an array
// array literals
let booksArray = [
    "The Psychology Money",
    "Rich Dad Poor Dad",
    "Filosofi Teras",
];

// new keyword
let newBooksArray = new Array(
    "The Psychology Money",
    "Rich Dad Poor Dad",
    "Filosofi Teras"
);

// console.log(booksArray);

// note: use array literal to create an array is recommended to.

// Access Elements of an Array
// console.log(booksArray[0]);
// console.log(booksArray[2]);

// Change the Elements of an Array
// let updateBook = "UI/UX Module";
// newBooksArray[2] = updateBook;
// console.log(newBooksArray);

// method of Array Objects

// push()
// menambah element array di akhir
newBooksArray.push("Module UI/UX");

// unshift()
// menambah element dalam array di awal
newBooksArray.unshift("Funcula Funiculi");
// console.log(newBooksArray);

// pop()
// menghapus element dalam array di akhir
// newBooksArray.pop();

// shift()
// menghapus element dalam array di awal
// newBooksArray.shift();
// console.log(newBooksArray);

// Array length
// check panjang element array
// console.log(newBooksArray.length);

// indexOf
// console.log(newBooksArray);

// slice
// kita ngambil element suatu array berdasarkan index start dan end

// let soldOutBooks = newBooksArray.slice(1, 4);
// console.log(soldOutBooks);

// concat
// menggambungkan dua buah array

// let newReleaseBooksArray = [
//     "Verity",
//     "Spare",
//     "The Hocus Pocus Spell Book",
//     "Radio's Greates of All Time",
// ];

// let newJoinedBooks = newReleaseBooksArray.concat(newBooksArray);
// console.log(newJoinedBooks);
