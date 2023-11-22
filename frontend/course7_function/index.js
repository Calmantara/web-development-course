// define function dalam const
const mul = function(num1, num2){
    return num1 * num2
}

// function as input parameter
const mulCp = function(fun, num1, num2){
    return fun(num1, num2)
}
// alert(mulCp(mul, 2, 3))

// bisa gak function kita buat
// sebagai return dari function lain?
const sub = function(num1, num2){
    return function(){
        return num2 - num1
    }
}
// memanggil hasil dari function 
const getSubResult = sub(3, 4)
// alert(getSubResult())

// predefine function
function clickMe(){
    alert("don't click me")
}

// predefine function with param
function add(num1, num2){
    return num1 + num2
}

// define anonymous function 
var greet = () => { 
    console.log("Welcome to GeeksforGeeks!"); 
} 
// greet()
const div = (num1, num2) =>{
    return num1 / num2;
}


// mendefine event in html
// using DOM

// const myBtn = document.getElementById("my-button")
// // myBtn.addEventListener("click", function(){
// //     alert("oops! don't click me")
// // })
// myBtn.addEventListener("click", function () {
//     alert(div(1,2))
// })

$("#my-button").click(function (e) { 
    e.preventDefault();
    alert("this is working")   
});

// UI/UX design