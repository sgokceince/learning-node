import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then(users => {
     console.log("users yuklendi", users)

      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((data) => data.json())
        .then(post => console.log("post yuklendi", post))
  });