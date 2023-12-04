// Minggu 3 Desember 2023

// Regex
// latihan / mengulang javascript

// string method
// replace
// match
// search
let str = "this is string is"
if (str.match("is") != null){
    console.log("matched")
}

// Q: apakah kita bisa mengetahui 'is' 
// breada dalam kalimat str tanpa
// menggunakan match?
const strArr = str.split(" ")
for (let i = 0; i< strArr.length; i++){
    if (strArr[i] === "is"){
        console.log("matched")
        break
    }
}

const replacedStr = str.replace("is", "are")
console.log(str, replacedStr)

const replaceAllStr = str.replace(/is/g, "are")
console.log(replaceAllStr)

console.log(str.search("is"))

// apa itu regex (object)
console.log(/is/)
console.log(typeof /is/)

// object yang digunakan untuk pencocokan pattern
// baik secara local atau global

// kegunaan regex
// 1. validasi input:
    // a. validasi email:/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    // b. validasi phone number: . . .
    // c. validasi password: 
// 2. mencari pattern dari sebuah text
// 3. replace pattern dari suatu string

// security: regex biasa digunakan untuk:
    // sql injection
    // web scripting

// karena regex adalah object
// akan memiliki METHOD
const regex1 = /is/
console.log(regex1.test("istri"))
console.log(regex1.test("suami"))

console.log(regex1.exec("istri"))
console.log("istri".match("is"))

// usecase
// aku mau membuat validasi 
// apakah password mengandung:
// 1. digit
// 2. huruf kecil

// regex untuk check digit / number
const regex2 = /\d+/
console.log(regex2.exec("this is my number 10")[0]) 

// regex untuk check string
const regex3 = /\s+/
console.log(regex3.exec("123"))

const password = "helloworld99"
if (regex2.exec(password) != null && regex3.exec(password) != null){
    console.log("password is valid")
}else{
    console.log("ivalid password pattern")
}

// kita mengecheck apakah string memiliki huruf besar
// atau tidak
const capitalRegex = /[a-z,A-Z].../
const capitalStr = "hello world"
console.log(capitalRegex.exec(capitalStr))


// Excercises

// Kerjakan Soal - Soal dibawah ini dalam bentuk live code.

// Q1
// -Buatlah variable dengan let dan const.
// -Gunakan console.log() untuk menampilkan isi variable di console browser.
// -A. Buatlah sebuah array berisi 5 buah-buahan (string).
// -B. Lalu tambahkan satu buah.
// -C. Edit/ubah satu buah.
// -D. Kurangi satu buah terakhir dari array.
// -E.  Gunakan console.log() untuk menampilkan isi array di setiap step nya.
// clue:
    // const fruits = ["apple", "orange"]
    // fruits.push("...")
    // fruits[0] = 
    // fruits.pop()


// Q2
// A. Buatlah sebuah objek yang mendeskripsikan diri kalian masing-masing.
// B. Object tersebut harus memiliki property nama_depan(string), nama_belakang(string), hobi(array ofstrings), angka_favorit(number), memakai_kacamata(boolean), dan boleh memanambahkan propertylainnya.
// C. Tampilkan setiap propertynya menggunakan console.log setelah setiap perubahan.
// D. Cetak nama_lengkap dengan console.log.
// E. Ubah angka_favorit jadi 8.
// F. Tambahkan satu hobi "coding".
// G. Tambahkan satu property "lulusan" dengan value "Hacktiv8".
// H. Cetak semua hobi satu per satu menggunakan loop.
// I. Cetak semua key milik objek, dan cetak semua values milik objek.
// J. Gunakan loop untuk cetak semua property milik objek dengan format key : values.

const obj1 = {"name":"name1", "class":"class1"}
for (const key in obj1) {
    console.log(key)// name, class
    obj1[key]
    // obj1.key
}

// const objArr = [
//     {"name":"name1", "class":"class1"},
//     {"name":"name1"} // class? -> false
// ]

// variables:
// - mutable
// - immutable
// shallow copy and deep copy

// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }

// obj1.hobi = ["hobi1", "hobi2"]
// for (let i = 0; i < obj1.hobi.length; i++){
//     console.log(obj1.hobi[i])
// }

// now = new Date()
// console.log(now)

// Q3
// A. Buatlah sebuah function.
// B. Function tersebut akan mencetak tanggal sekarang ketika dipanggil.
    // -A. Buatlah function berikutnya.
    // -B. Function tersebut memberikan tanggal sekarang ketika dipanggil.
    // -C. Cetaklah hasil dari function tersebut.

// Q4
// A. Buatlah sebuah function yang menerima sebuah angka.
// B. Gunakanlah kondisional untuk memeriksa angka tersebut ganjil atau genap.
// C. Gunakan return untuk mengembalikan hasil pemeriksaan angka ganjil atau genap tersebut dalam formatstring “ganjil” atau “genap”.
// D. Tes dengan console log hasil function tersebut dengan angka:2, 3, 20, 21
// E. Tambahkan pengecekan tipe data di function tersebut.
// F. Jika data yang diberikan bukan angka yang valid, bukan bertipe data number atau NaN, maka langsungreturn “Invalid Data”.

// && ||
// let num = 1

// console.log(typeof null)

// console.log(typeof NaN, 1/NaN)

// console.log( typeof num === "number" )

function OddEven(input) {
    // check type
    if (typeof input !== "number"){
        return "Invalid Data"
    }

    // check even or odd
    if (input % 2 === 1){
        return "ganjil"
    }
    return "genap"
}

console.log(OddEven(NaN))

// Q5
// A. buatlah function yang akan menghitung jumlah setiap character pada array
// B. function tersebut akan menampilkan array sesuai dengan threshold yang dimasukkan
// C. contoh input someFunction([a,b,c,a,b,g,h,j,k,q,s,a,a], 2)
        // a = 4
        // b = 2
        // c = 1
        // dst
// D. contoh output dari input diatas adalah [a, b]

function PrintArray(arr, threshold){
    return []
}