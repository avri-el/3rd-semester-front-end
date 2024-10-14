// Array Exercise
let people= ["Greg","Mary","Devon","James"];

//1
for(let i=0; i<people.length; i++){
    console.log(people[i])
}

//2
people.forEach(function(item){
    console.log(item)
})

//3
people.shift()
console.log(people)

//4
people.pop()
console.log(people)

//5
people.unshift("Matt")
console.log(people)

//6
people.push("Avriel")
console.log(people)

//7
for(let i=0; i<people.length; i++){
    console.log(people[i])
    if (people[i]==="Mary"){
        break
    }
}

//8
let i=people.slice(2)
console.log(i)

//9
people.splice(2,1,"Elizabeth","Artie")
console.log(people)

//10
let withBob= people.concat("Bob")
console.log(withBob)


// Object Exercise
let programming= {
    language: ["JavaScript","Python","Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1
add= programming.language
add.push("Go")
console.log(programming.language)

//2
programming["difficulty"]= 7
console.log("difficulty:",programming["difficulty"])

//3
delete programming.jokes
console.log(programming)

//4
programming.isFun=true
console.log(programming)

//5
let output= add.map(function(item,index){
    return index + " " + "-" + " "+ item
});
console.log(output)