// Stack {primitive} & Heap (non-primitive)

let myYoutubename = "protap sen"

let anothername = myYoutubename
anothername = "chaiaurCode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email : "protap@gmail.com",
    upi : "ybl@protap"
}

let userTwo = userOne
userTwo.email = "vkprotap@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
