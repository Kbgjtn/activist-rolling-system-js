/**
 * about: object
 * definition: is a non-primitive data-type that allows you to store multiple collections of data.
 *
 * docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 * */

// create an object

// curly bracess
// console.log({ name: "Ucup Bahrudin", age: 18 });
// store object ke dalam variables

let newUser = {
    // properties: <key> : <value>
    firstName: "Ucup",
    lastName: "Bahrudin",
    noPhone: "3209239023",
    isActive: true,
    role: ["Admin", "User", "Developer"],
};

const attendance = {
    //  <nim> : <nama>
    2502012312: "Naufal Daffa Ryquelme",
    2503042343: "Udin Bahrudin",
    2694035431: "Elon Must",
    8934259012: "Billy Gote",
};

// const book = {
//     title: "Funiculi Funicula",
//     author: "Toshikazu Kawaguchi",
//     published: "December 6, 2015",
//     genre: [
//         "Fiction",
//         "Fantasy",
//         "Magical",
//         "Realism",
//         "Contemporary",
//         "Japan",
//         "Time Travel",
//     ],
//     rate: 3.75,
//     summary:
//         "Di sebuah gang kecil di Tokyo, ada kafe tua yang bisa membawa pengunjungnya menjelajahi waktu. Keajaiban kafe itu menarik seorang wanita yang ingin memutar waktu untuk berbaikan dengan kekasihnya, seorang perawat yang ingin membaca surat yang tak sempat diberikan suaminya yang sakit, seorang kakak yang ingin menemui adiknya untuk terakhir kali, dan seorang ibu yang ingin bertemu dengan anak yang mungkin takkan pernah dikenalnya.",
//     format: 224,
//     availableLanguages: ["Indonesia", "English", "Japan"],
// };

// get object values
// Dot notation

// console.log("First Name: " + newUser.firstName);
// console.log("status: " + newUser.isActive);

// bracket natation
// console.log(newUser["noPhone"]);
// console.log(newUser["lastName"]);

// add object property
// dot notation
// newUser.hobby = ["Writing", "Bucin", "Watching", "Concerts"];
// console.log(newUser);

// bracket notation

// update object property
// dot notation
// newUser.firstName = "Udin";
// newUser.lastName = "MorningStar";
// console.log(newUser);
// bracket notation

// get object values
console.log(Object.values(newUser));

// get object keys
console.log(Object.keys(newUser));
