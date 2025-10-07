// primitive

// 7 types: string,number,boolean,null,undefined,symbol,bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const OutSideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

//Reference(non-primitive)

//Array ,functions,object

const heros = ["shaktiman","spiderman","batman"];
let myObj = {
    name : "PROTAP",
    myAge : 22,
}

const myFunction = function() {
    console.log("Hello World");
    
}
console.log(typeof scoreValue);
