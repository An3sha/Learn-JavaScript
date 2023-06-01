                                                    // EXAMINE THE DOCUMENT OBJECT


// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body)
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);


                                                // SELECTORS

// #GETELEMENTBYID
// console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
var header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.textContent);           //the difference bw textContent and innerText is that textContent doesn't pay attention to the style and it will still show Item Lister 123 instead of Item Lister
// console.log(headerTitle.innerText);

// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

//  #GETELEMENTSBYCLASS

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

//gives error
// items.style.backgroundColor = '#f4f4f4';    // wont work bcz we need to loop throught all the items

// for (var i = 0; i < items.length; i++){
//     items[i].style.backgroundColor = '#f4f4f4';
// }


//  #GETELEMENTSBYTAGNAME

// var items = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

//gives error
// items.style.backgroundColor = '#f4f4f4';    // wont work bcz we need to loop throught all the items

// for (var i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

//  #QUERYSELECTOR(for one item only)
  
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "SEND";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');       //we can use css classes
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = "coral";

//  #QUERYSELECTORALL(acts similar to getelementbyid and class)

var titles = document.querySelectorAll('.title');

console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');

for (var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#ccc';
}