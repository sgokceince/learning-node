/*
const users = ["Sakiz", "Gusta", "Sunay"];
*/

const users = [
    {
        name: "Sakiz",
        age: "3"
    },
    {
        name: "Gusta",
        age: "5"
    },
    {
        name: "Sunay"
    },
];

/** en çok kullanacaklarımız array fonksiyonları
   push
   map
   find
   filter
   some
   every
   includes
 */

//push arrayin sonuna eleman ekler
//users.push("Orhan");
//users.push("Sümbül");
//console.log(users);

// map array içinde tek tek döner.
/*
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
    
}
*/
/*
users.map((item) => {
    console.log(item);
})

*/

//find array içinde arama yapar.
/*
const result = users.find((item) => item.name === "Sakiz" && item.age > 2);
    console.log(result)
*/

//filter filtreleme yapar.

const filtered = users.filter((item) => item.name ==="Gusta" && item.age <= 5)
  console.log(filtered)
