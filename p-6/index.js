// IIFE & callback function
// 1. iife (immediately invoked function expression)
(function () {
    //code
    console.log("Hello World");
})();
// with parameters
let output= (function (fullName) {
    return "Hello" + " " + fullName
})("Avriel");
console.log(output)


// 2. callback function
// a. without params
function sayHello(callback){
    callback()
}
sayHello(function (){
    console.log("Hello World")
})
// b. with params, args & return value
function sayHello(callback){
    let output= callback("Avriel")
}
sayHello(function (fullName){
    return "Hi" + " " + "Avriel"
})
console.log(output)

function haiHello(callback) {
    let out= callback("el")
    return out
}
let out= haiHello(function (fullName){
    return "Hai" + fullName
})
console.log(out)