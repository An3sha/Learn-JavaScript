// Promises are used to handle async operations in js  
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

createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false; //if true then it will show error in console

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
};

// createPost({ title: 'Post Three', body: 'This is a post three' }).then(getPost).catch(err => console.log(err));
// instead of .then.then we can use promise all

//promise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );

// with fetch

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );
