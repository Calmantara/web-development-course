function normalFunction(x, y){
    return x + y
}
console.log(normalFunction(1, 2))

// callback
// ketika function dijadikan sebagai 
// suatu input parameter dari function lainnya
function calculate(x, y, callback){
    result = x + y
    // console.log(typeof callback)
    if(typeof callback === "function"){
        result = callback(x, y)
    }
    return result 
}
// ketika callback null 
console.log(calculate(1,2))
console.log(calculate(3,2, (x, y)=>{return x * y}))
console.log(calculate(4,2, function(x, y){return x * y}))

function outputFunction(){
    returnFunction = (x, y)=>{
        return x * y
    }
    return returnFunction
}
console.log(outputFunction()(1,2))

// Promise function
let promiseFunc = new Promise((resolver, reject)=>{
    // resolver(1)
    calculate(1, 2)
    reject("some error")    
})
console.log(promiseFunc.
    then((res) => {console.log(res)}).
    catch((err)=> console.log(err)))

// example promise with fetch
// function untuk hit API / backend
const placeholder = fetch("https://jsonplaceholder.typicode.com/users")

// blocking vs non blocking progamming
console.log(calculate(1, 2))
placeholder.then((res) => {
    if (res.status !== 200){
        console.log("some error")
    }
    return res.json()
}
).then((body) => {
    for (let i = 0; i < body.length; i++){
        console.log(body[i])
    }
}).
catch((err)=>{
    console.log(err)
})

// async
console.log("Still Running")
setTimeout(function(){
    console.log("HEI I AM DONE")
}, 10000)
console.log("Still Waiting")

// apakah kita bisa membuat 
// function async kita sendiri? 

async function calculateAsync(x, y){
    return x ** y
}

async function getResult(){
    const resultAsync = await calculateAsync(3, 3)
    console.log(resultAsync)
}
getResult()

// Assessment: 
// 1. Dalam kasus apa teknik asynchronous digunakan ?
// 2. Apakah javascript secara default 
// mengeksekusi perintah dengan metode synchronous atau asynchronous ?
// 3. Buatlah html yang akan menampilkan isi dari
// https://jsonplaceholder.typicode.com/users (fetch function)
// 4. buatlah simple example untuk implementasi async programming
// selain dari fetch API
