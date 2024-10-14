// array
// deklarasi variable array
// 1. array literal
let numbers= [1, 2, 3, 4, 5]
console.log(numbers)
console.log("angka pertama:",numbers[0])
console.log("angka terakhir:",numbers[numbers.length-1])

// 2. kata kunci new
let numbers2= new Array(6, 7, 8, 9, 10)
console.log(numbers2)
console.log("angka pertama:",numbers2[0])
console.log("angka terakhir:",numbers2[numbers2.length-1])
console.log("")

// tipe data yang bisa disimpan dalam array
// string, numbers, mix
let helena= ["helena", 30, true, [100,95,95]] //mix
console.log("name:",helena[0])
console.log("age:",helena[1])
console.log("female:",helena[2])
console.log("grade:",helena[3])
console.log("")

// array length
console.log("numbers length:",numbers.length)
console.log("numbers2 length:",numbers2.length)
console.log("helena length:",helena.length)
console.log("")

// array method
let array=[1, 2, 3, "is", "ptv", false]
console.log(array)
// 1. array to string
console.log(array.toString())
// 2. join
console.log(array.join(" "))
// 3. pop
array.pop()
console.log(array)
// 4. push
array.push(true)
console.log(array)
// 5. shift
array.shift()
console.log(array)
// 6. unshift
array.unshift("monday's")
console.log(array)
// 7. splice
array.splice(2, 1) //delete
console.log(array)
array.splice(1, 1, "favorite")
console.log(array)
array.splice(2, 0, "band")
console.log(array)
// 8. concat
let buah= ["apel", "anggur", "jeruk"]
let sayur= ["selada", "kol", "brokoli"]
let masak= ["salad", "es buah", "sup"]
let sehat= buah.concat(sayur, masak)
console.log(sehat)
// 9. slice
let makanan= sehat.slice(6)
console.log("menu:",makanan)
