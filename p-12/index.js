// 1. string literals
let fullName= "Rosemary Jane"
let age= 17
let address= "Italy"

let kalimat= 
    "Hello, my name is " +
     fullName + "." +
     " I am " + age +
     " years old." + 
     " and i live in " + address + "."
console.log(kalimat);

let kalimat2= `Halo nama saya ${fullName}, umur saya ${age} tahun, saya breasal dari ${address}.`
console.log(kalimat2)

// 2. arrow function
function sayGreetings(fullName){
    return `Hello, I'm ${fullName}`
}
console.log(sayGreetings("Rosemary Jane"))

const sayGreetings2 = () =>{
    return `Hi, i'm ${fullName}`
}
console.log(sayGreetings2("Rosemary Jane"))

const sayGreetings3 = (fullName) => `Good morning! i'm ${fullName}.`
console.log(sayGreetings3("Rosemary Jane"))

// arrow function pada IIFE
let output= (() => "Hello")()
console.log(output)

// arrow function pada callback
let numbers= [1, 2, 3, 4, 5];
let output2= numbers.map((item) => item);
console.log(output2)

// 3. default parameter
const sayGreetings4= (fullName, age, address) => {
    if (fullName === undefined){
        fullName="Rosemary";
    }
    if (age === undefined){
        age= 17;
    }
    if (address === undefined){
        address= "Italy"
    }
    console.log(
        `Halo nama saya $(fullName)`
    )
}
sayGreetings4("Levin")