import fetch from "node-fetch";

fetch("https://jsonplaceholder.typicode.com/users")
  .then(data => console.log(data));