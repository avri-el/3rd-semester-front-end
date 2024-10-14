// Javascript loop

// array object
let students= [
    {
        id: 1,
        firstName: "El",
        grade: 95,
    },
    {
        id: 2,
        firstName: "Levin",
        grade: 92,
    },
    {
        id: 3,
        firstName: "Rose",
        grade: 98,
    }
]
console.log(students)

// 1. for - loop
for(let i=0; i<students.length; i++){
    console.log(students[i].firstName)
}
// 2. while loop
let i=0;
while(i<students.length){
    console.log(students[i].id);
    i++;
}
// 3. do - while - loop
let j=0;
do {
    console.log(students[j].grade);
    j++;
} while(j<students.length)j

// 4. array built-in method
//4.a foreach
students.forEach(function(item){
    console.log(item.firstName)
})
//4.b map
let output= students.map(function(item){
    return item.id
});
console.log(output)
//4.c filter
let output1= students.filter(function(item){
    return item.grade>=95;
})
console.log(output1)
//4.d find
let output2= students.find(function(item){
    return item.grade>=95;
})
console.log(output2)
//4.e findIndex
let output3= students.findIndex(function(item){
    return item.firstName ==="Levin"
})
console.log(output3)