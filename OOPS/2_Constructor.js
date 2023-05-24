/* Constructor - A constructor is a special function that creates and initializes an object instance of a class. In JavaScript,
 a constructor gets called when an object is created using the new keyword.The purpose of a constructor is to create a new object 
 and set values for any existing object properties. */

function Book(title, author, year) {
  // this is a contructor function and using this we can now add books
  this.title = title;
  this.author = author;
  this.year = year;

  this.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`;
  };
}

//Instatiate an Object
const book1 = new Book("Book One", "John Doe", "2013");
const book2 = new Book("Book Two", "Jane Doe", "2016");

console.log(book2.getSummary());
