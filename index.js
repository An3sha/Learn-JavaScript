//Generic code

// const radius = [2, 3, 4, 5];
// const areaCircle = function (radius) {
//     const area = [];
//     for (let i = 0; i < radius.length; i++)
//     {
//         area.push(Math.PI * radius[i] * radius[i]);
//     }
//     return area;
// }
// console.log(areaCircle(radius));

// function attachEventListeners() {
//     let count = 0;
//     document.getElementById("clickMe").addEventListener("click", function xyz() {
//         console.log("Button Clicked", ++count);
//     });
// }
// attachEventListeners();

// let age = 20
// let name = "John"
// let hello = `My name is ${name} and I am ${age} years old`
// console.log(hello)
// age++
// hello = `My name is ${name} and I am ${age} years old` // << THIS
// console.log(hello)


//                                                      Higher order functions and arrays
//                                                     _________________________________________

const companies = [
    { name: "One", category: "Finance", start: 1981, end: 2003 },
    { name: "Two", category: "Retail", start: 1982, end: 2004 },
    { name: "Three", category: "Auto", start: 1983, end: 2005 },
    { name: "Four", category: "Retail", start: 1984, end: 2006 },
    { name: "Five", category: "Technology", start: 1985, end: 2007 },
    { name: "Six", category: "Finance", start: 1986, end: 2008 },
    { name: "Seven", category: "Auto", start: 1987, end: 2009 },
    { name: "Eight", category: "Technology", start: 1988, end: 2010 },
    { name: "Nine", category: "Retail", start: 1989, end: 2011 },
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for (let i = 0; i < companies.length; i++)
// {
//     console.log(companies[i]);
// }

// //for each - sync callback
// companies.forEach(function (company) {
//     console.log(company);
// })

//                                                                 FILTER

//using for loop
// let canDrink = []
// for (let i = 0; i < ages.length; i++){
//     if (ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

//filter

// const canDrink = ages.filter(function (age) {
//     if (age >= 21) {
//         return true;
//     }
// });
// console.log(canDrink);

//using arrow func
// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);

//filter retail companies

// const retailCompanies = companies.filter(function (company) {
//     if (company.category === 'Retail') {
//         return true;
//     }
// })
// console.log(retailCompanies);

//using arrow func

// const retailCompanies = companies.filter(company => company.category === "Retail");
// console.log(retailCompanies);

//get 80s companies

// const getCompanies = companies.filter(function (company) {
//     if (company.start >= 1980 && company.start < 1990) {
//       return true;
//     }
// })
// console.log(getCompanies);

// const getCompanies = companies.filter(
//   company => (company.start >= 1980 && company.start < 1990)
// );
// console.log(getCompanies);

// const arr = [5, 1, 3, 2, 6];
//filter odd values
// const oddVal = arr.filter(ele => (ele % 2 != 0));
// console.log(oddVal);
//or
// function isOdd(x) {
//     return x % 2;
// }
// const output = arr.filter(isOdd);
// console.log(output);

// values greater than 4
// const output = arr.filter(ele => ele > 4);
// console.log(output);


//                                                                      MAP

//create array of company names

// const companyName = companies.map(function (company) {
//     return company.name;
// // });
// console.log(companyName);

// const companyName = companies.map(company => company.name);
// console.log(companyName);

// const testMap = companies.map(function (company) {
//     return `${company.name} [${company.start}-${company.end}]`;
// });
// console.log(testMap);

// const ageTest = ages.map(x => Math.sqrt(x)).map(x => x * 2);
// console.log(ageTest);

//                                                                      SORT
// const sortComp = companies.sort(function (c1, c2) {
//     if (c1.start > c2.start)
//         return 1;
//     else
//         return -1;
// });

// const sortComp = companies.sort((a,b) => a.start>b.start ? 1 : -1)
// console.log(sortComp);

// const sortAges = ages.sort(); // compares only first digits and then sort [12, 13, 15, 16, 20, 21, 25, 32, 33, 44, 45, 5, 54, 61, 64]
// const sortAges = ages.sort((a,b) => a-b); //ascending order
// const sortAges = ages.sort((a,b) => b-a); //descending order
// conso  le.log(sortAges);

//                                                                      REDUCE

//sum of ages using for loop

// let sum = 0;
// for (let i = 0; i < ages.length; i++)
// {
//     sum = sum + ages[i];
// }

// const sum = ages.reduce(function (total, age) {
//     return total + age;
// }, 0); //took 0 as parameter for total

// const sum = ages.reduce((total, age) => total + age, 0);

//get total years for all companies
// const sum = companies.reduce(function (total, a) {
//     return total + (a.end - a.start);
// }, 0)
// console.log(sum);

//use all methods
const combined = ages.map(age => age * 2).filter(age => age > 40).sort((a, b) => a - b).reduce((a, b) => a + b, 0);

console.log(combined);
