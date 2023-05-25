/*          http://callbackhell.com/

 A callback function is a function passed into another function as an argument,
 which is then invoked inside the outer function to complete some kind of routine or action. */


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
