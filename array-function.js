const users = ["Sakiz", "Gusta", "Sunay"];

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

users.map((item) => {
    console.log(item);
})