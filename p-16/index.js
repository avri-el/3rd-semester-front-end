// synchronous -- single thread -- blocking
// console.log("proses 1")
// console.log("proses 2")
// console.log("proses 3")
// console.log("proses 4")

// asynchronous -- multi thread -- non blocking
// 1. parallel
// setTimeout(() => {
//     console.log("Proses 1")
// }, 5000);
// console.log("Proses 2");
// setTimeout(()=> {
//     console.log("Proses 3")
// }, 3000);
// console.log("Proses 4");
// 2. concurent
// setTimeout(() => {
//     console.log("proses 6");
//     setTimeout(() => {
//         console.log("proses 7");
//         setTimeout(() => {
//             console.log("proses 8");
//             setTimeout(() => {
//                 console.log("proses 9");
//                 setTimeout(() => {
//                     console.log("proses 10");
//                 },1000)
//             },3000)
//         },2000)
//     },1000)
// },2000)

// // promise
let condition = true;
const newPromise = new Promise((resolve, reject) => {
    if (condition){
        resolve("Berhasil")
    } else {
        reject("Gagal")
    }
});
// pakai promise
// 1. then-catch
// newPromise
// .then((result) => {
//     return result;
// })
// .then((result2) => {
//     console.log(result2)
// })
// .catch((error) => {
//     console.log(error)
// })
// 2. async-await
// selalu digunakan pada fungsi
const consumePromise= async() => {
    try{
        let result = await newPromise;
        console.log(result)
    } catch(error){
        console.log(error)
    }
};
consumePromise();

// menggunakan promise yang sudah ada
