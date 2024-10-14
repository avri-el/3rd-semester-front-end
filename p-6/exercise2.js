// function bmi(berat, tinggi){
//     return berat / (tinggi * tinggi)
// }

// //              berat, tinggi
// let output= bmi(45, 1.7)
// console.log(output)


// IIFE
let output= (function (berat, tinggi) {
    return berat / (tinggi * tinggi)
})(45, 1.7);
console.log(output)

// callback
function bmi(callback) {
    let out= callback(45, 1.7)
    return out
}
let out= bmi(function (berat, tinggi){
    return berat / (tinggi * tinggi)
})
console.log(out)
