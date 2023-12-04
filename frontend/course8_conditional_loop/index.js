// 1. conditional statement
// 2. looping in js
// 3. write text to txt file

// conditional state
// boolean value = {true, false}

// kalau (nama adalah calman), program akan print calman
// kalau bukan calman -> akan print yang lainnya

if (true){
    console.log("this is true")
}

// if hanya akan masuk ke code block
// ketika conditionnya true
if (false){
    console.log("this is false")
}

// untuk membuat condition true
let name = "calman"

// pembandingan bisa dilakukan 
// antara variabel terhadap suatu constant

console.log((name == "calman"))
console.log((name == "tara"))
console.log((name != "calman"))
console.log((name != "tara"))

// comparator untuk number
// > lebih dari
// < kurang dari
// >= lebih dari sama dengan
// <= kurang dari sama dengan 

// logika matematika AND OR
console.log(true && true)
console.log(true && false)
console.log(false && false)
console.log(true || true)
console.log(true || false)
console.log(false || false)

// negasi
console.log(!true)
console.log(!false)

// binding event di button
let num = 0;
const btnState = document.getElementById("btn_state")
btnState.addEventListener("click", function(){
    if (num > 5 && num < 10){
        if (num == 6){
         console.log("six!")   
        }else{
            console.log("state 1")
        }
    } else if (num > 10 && num < 15){
        console.log("state 2")
    } else{
        console.log("invalid state")
    }
    num++ 
})

let state = "idle"
function stateChange(){
    const stateDiv = document.getElementById("state")
    if(state == "hide"){
        stateDiv.innerText = "active"
        state = "active"
    } else if (state == "idle"){
        stateDiv.innerText = "idle"
        state = "hide" 
    }else{
        // default condition 
        stateDiv.innerText = ""
        state = "hide"
    }
}

// ternary condition
// FE simplicity 
let height = 11
height > 10 ? 
    console.log("true condition") : 
    console.log("false condition")

let numStr = "5"
let numNum = 5
// hasil dari console log dibawah ini?
console.log(numStr == numNum)
console.log(numStr !== numNum)

// java script
// ==  -> compare value only
// === -> compare value and type 
// !==

// python 
// ==
// is / not

// switch
num = 0
if (num == 1){
    console.log(1)
}else if (num == 2){
    console.log(2)
}else if (num == 3){
    console.log(3)
}else{
    console.log("invalid number")
}

switch (num) {
    case 1:
        console.log(1)
        break;
    case 2:
        console.log(2)
        break;
    default:
        console.log("invalid number")
        break;
}

// Looping
let arrNum = [1,2,3,4,5,6,7,8,9,10]

// for loop
for (let index = 0; index < 11; index++) {
    const element = arrNum[index];   
    console.log(element)
}

// forEach -> built in function js
arrNum.forEach(element => {
    console.log(element)
});

// looping di object
const obj = {"name":"calman", "address":"jakarta"}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element)
    }
}

const food = "martabak"
console.log(food.repeat(10))

let foodRepeated = ""
for (let i = 0; i < 10; i++){
    foodRepeated += food
}
console.log(foodRepeated)

// while loop
let iter = 0
while (iter < 100) {
    console.log(iter)
    // inifinite loop condition
    iter++
}

let iter2 = 0
do {
    console.log(iter2)
    iter2++
} while (iter2 < 10);

// Challenge: 
//     Menampilkan character O sebanayak inputan form
//     dengan syarat:
//         1. menggunakan pengulangan 
//         2. dalam 1 group O, hanya terdiri dari max 4 O 
//         3. dalam 1 baris O, hanya terdiri dari max 4 group O

// Input: 3
// Output: OOO

// Input: 10
// Output: OOOO OOOO OO

// Input: -10
// Output: invalid

// Input: 20
// Output: OOOO OOOO OOOO OOOO
//         OOOO