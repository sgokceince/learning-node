import fetch from "node-fetch";
import axios from "axios";
/*
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then(users => {
     console.log("users yuklendi", users)

      fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then((data) => data.json())
        .then(post => console.log("post1 yuklendi", post))

          fetch("https://jsonplaceholder.typicode.com/posts/2")
             .then((data) => data.json())
             .then(post => console.log("post2 yuklendi", post))
  });

*/
/*
async function getData() {
    const users = await(
        await fetch("https://jsonplaceholder.typicode.com/users")
    ).json();

    const post1 = await(
        await fetch("https://jsonplaceholder.typicode.com/posts/1")
    ).json();
    
    const post2 = await(
        await fetch("https://jsonplaceholder.typicode.com/posts/2")
    ).json();
    console.log("users: ", users)
    console.log("post1: ", post1)
    console.log("post2: ", post2)
}

getData();

*/

/*
(async () => {
  const { data: users } = await axios("https://jsonplaceholder.typicode.com/users")
  

  const {  data: post1 }= await axios("https://jsonplaceholder.typicode.com/posts/1")
  

  const { data: post2 }= await axios("https://jsonplaceholder.typicode.com/posts/2")
  

  console.log("users: ", users)
  console.log("post1: ", post1)
  console.log("post2: ", post2)


})();

*/

const getComments = (number) => {
   return new Promise((resolve, reject) => {
      if(number === 1) {
         resolve({ text: "Selam" });
      }

      reject("Bir hata oluştu.")
   });
};

getComments(5)
   .then((data) => console.log(data))
   .catch((e) => console.log(e));