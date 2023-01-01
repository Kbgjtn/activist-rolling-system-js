/**
 * about: function
 * definition: Functions contain a set of instructions to perform a task. They help in avoiding code duplication.
 *
 * ref: https://www.javascripttutorial.net/javascript-function/
 */

// function functionName(parameters) {
// function body
// ...
// }

function displayBook(title, genre, author) {
    return `title: ${title}\ngenre: ${genre}\nauthor: ${author}`;
}

displayBook("The 48 Laws of Power", "Psychology", "Robert Greene");

console.log(displayBook);
