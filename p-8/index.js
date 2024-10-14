// javascript object and conditional
// deklarasi object
// object literal
let rose= {
    firstName:"Rosemary",
    age: 18,
    isMarried: false,
    grade: [91,95,92],
    sayGreetings: function(){
        console.log("Hello, my name is " + this.firstName)
    },
    address: {
        street: "Rock Street",
        city: "Singapore",

    }
};
console.log(rose)

// mengakses properti dalam object
// 1. Dot notation
console.log("First Name:",rose.firstName)
console.log("Age:",rose.age)
console.log("Grade:",rose.grade)
rose.grade= [90,90,90]
console.log("Grade after update:",rose.grade)
rose.job="Student"
console.log("Job:",rose.job)

// 2. Bracket notation
console.log("Status married:",rose["isMarried"])
rose["Nationality"]= "Singapore"
console.log("Nationality:",rose["Nationality"])

// object method
rose.sayGreetings()
// object inside object
console.log("Address:",rose.address.street,",",rose.address.city)

// conditional
// 1. if-else
// jika suhu hari ini lebih dari atau sama dengan 30
// tampilkan suhu hari ini panas
// jika tidak, tampilkan suhu hari ini dingin
let temp = 30;
if (temp > 30){
    console.log("Suhu hari ini panas.")
} else{
    console.log("Suhu hari ini dingin.")
}

// 2. Nested if
// Jika nilai student 100-80 tampilkan grade A
// Jika nilai student 79-70 tampilkan grade B
// Jika nilai student 69-50 tampilkan grade C
// Jika nilai student dibawah 50 tampilkan grade D
let grade= 100;
if (grade>=80 && grade<=100){
    console.log("grade: A")
} else if(grade >=70 && grade <80){
    console.log("grade: B")
} else if(grade >=50 && grade <70){
    console.log("grade: C")
} else if(grade >0 && grade<50){
    console.log("grade: D")
}

// 3. Switch case
// Jika angka 1 tammpilkan January
// Jika angka 2 tampilkan February
// Jika angka 3 tampilkan march
// dst.
let number= 4
switch(number){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("Not found.");
        break;
}