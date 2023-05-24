/* String, boolean, numbers etc are primitives but we can use methods on these. */

// const s1 = 'Hello';
// console.log(s1.toUpperCase());   //calling method
// console.log(typeof s1);         //String

// //creating strings as object
// const s2 = new String('Hello');
// console.log(typeof s2);         //Object

//DOM object = window
// console.log(window);                //parent object
// window.alert(1);
// //in the browser there's nothing above window so we can directly write like this:
// alert(1);

//                                      OBJECT LITERAL(An object literal is a list of zero or more pairs of property names and associated values of an object, enclosed in curly braces ({}) )
//                                    ________________________

const book1 = {
  title: "Book One",
  author: "John Doe",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};
const book2 = {
  title: "Book Two",
  author: "John Doe",
  year: "2013",
  getSummary: function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  },
};

console.log(book1.getSummary());
console.log(Object.values(book2)); //to get the values only
console.log(Object.keys(book2));
