/*          http://callbackhell.com/

       Async js programming exists because Callback exists

 A callback function is a function passed into another function as an argument,
 which is then invoked inside the outer function to complete some kind of routine or action. 
 
 Issues with callback:
 1. callback hell
 2. inversion of control (we lose control of our program because we have given another function our callback funcion
 */


const posts = [
  { title: "Post One", body: "This is post one" },
  { title: "Post Two", body: "This is post two" },
];

function getPost() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// createPost = (post) => {
//     setTimeout(() => {
//         posts.push(post);
//     }, 2000);
// }

// getPost();

// createPost({ title: 'Post Three', body: 'This is post three' });

// we won't be able to see post three because getPost() took 1 sec but create took more so the DOM is already painted. Here comes Async programming and callback

createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
};

createPost({ title: "Post Three", body: "This is post three" }, getPost);




// suppose we want to print Javascriot after 2 secs: so we will wrap it inside a callback function and we will pass it to setTimeOut

console.log("Namaste");
setTimeout(function(){
    console.log("JavaScript");
},2000);
console.log("Season2");

//let us make an e-commerce website where we create order and then proceed to payment using api (there is a dependancy)

// we will wrap our proceedToPayment api inside a callback function and this callback will be passed inside api.createOrder along with cart
// api.createOrder is responsible now to create order and then call back the api.proceedToPayment function

//show order summary page ONLY after payment is done. so callback will be used and we will pass this inside proceedToPayment
// function(){
//   api.showOrderSummary()
// }

//api to update the wallet
// function() {
//  api.updateWallet()
// }

const cart = ["shoes", "pants", "kurta"];
api.createOder(cart, function() {
  api.proceedToPayment(function() {
         api.showOrderSummary(function() {
             api.updateWallet()
        })
    })
})

// This is a callback hell (one under another) Pyramid of Doom


              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              
              



