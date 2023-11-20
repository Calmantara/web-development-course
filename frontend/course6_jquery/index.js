// 4 cara untuk define variables
// let -> convention u/ local variable -> let a = 1
// var -> convention u/ global variable -> var a = 1
// const -> convention u/ variable yang tidak berubah -> const a = 1
// direct -> a = 100


// define global variables
let name1 = "calman"
var name2 = "tara"

function CallName(){
// call global variables
// in local scope
// valid
    console.log(name1)
    console.log(name2)
}
CallName()

function LocalVariables(){
    // define local variables
    let num1 = 100
    var num2 = 200
}
LocalVariables()

// console.log(num1)
// console.log(num2)

function Add(){
    // const 
    // digunakan untuk variable yang tidak bisa 
    // berubah dari alokasi memori

    // mutable / immutable variable
}

// naming convention
// python -> snakecase -> first_name
// js -> camelCase -> firstName
// variable tidak diawali dengan angka
//      let 1name = "calman"
// variable tidak boleh tabrakan dengan built in function / object 
//      let function = ""

num100 = 100
console.log(num100)

// object array
const arrayOfNumber = [1,2,3,4,5]
console.log(arrayOfNumber)

// object user
const usr = {
    name: "calman",
    age: 10,
    address: "jakarta"
}
console.log(usr)
console.log(usr.address)

// pengulangan array
arrayOfNumber.push(1)
for (let i = 0; i < arrayOfNumber.length; i++){
 console.log(arrayOfNumber[i])
}

// operator aritmatika
// penjumlahan 
// pengurangan
// pembagian
// perkalian
// modulo
// increment
// decrement
// exponent


// DOM -> document object model
// manipulasi html 
// mengakses element dari html

function hideText(){
    const divName = document.getElementById("div_name")
    divName.innerHTML = "<div> tara </div>"
    divName.hidden = true
}

const allDivName = document.querySelectorAll(".greenBackground")
for (let i = 0; i < allDivName.length; i++){
    const p = document.createElement("div")
    p.innerText = "tara"
    
    allDivName[i].appendChild(p)
}

function submitValue(){
    const formName = document.getElementById("form_input_name")
    let name = formName.value

    // const showNameDoc = document.createElement("div")
    // showNameDoc.innerHTML = name

    const containerName = document.getElementById("container_name")
    containerName.innerHTML = name
}

function clicked(){
    alert("don't click me!")
}

$("#clickme").click(function(){
    $("div").hide()
})