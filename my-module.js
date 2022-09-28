 const hello = name => {
    //console.log("Hello " + name);
    console.log(` hello ${name}`)
}

 export const topla = (a,b) => a + b;
 export const cikar = (a,b) => a - b;
 export const text = "Text";
 export const user = {
     name: "Sakiz",
     surname: "İnce",
 };

 export const users = [{
     name: 'Gusta',
     surname: 'İnce',
     age: 5,
 }];

 export default hello;

//export { hello, topla, cikar };
