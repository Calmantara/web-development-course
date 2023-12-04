arrNum = [1,2,3,4]

// cara akses array
console.log(arrNum[0])  // 1
console.log(arrNum[-1]) // undefined
console.log(arrNum[4]) // undefined

arrNum[4] = 10
console.log(arrNum[4])

// arrNum[6] = "hello"
console.log(arrNum)

// kenapa bisa? 
// heuristic number & string adalah Object

// menambahkan value pada array
// pada element terakhir
arrNum.push(1)
console.log(arrNum)

// apa bedanya dengan 
// assignment pada suatu index
// ex: menambahkan value pada element terakhir
// tanpa menggunakan push
arrNum[arrNum.length] = 10
arrNum[arrNum.length] = 10
arrNum.push(11)
console.log(arrNum)

// membuang value paling akhir
let lastNum = arrNum.pop()
console.log(lastNum, arrNum)
// mengeluarkan isian terakhir tanpa pop
const newArr = [];
for (let index = 0; index < arrNum.length; index++) {
    newArr[index] = arrNum[index]
}
console.log(newArr)

// menambahkan element pada awal index
// menambahkan 3 pada awal element
// arrNum[-1] = 3
arrNum.unshift(3)
console.log(arrNum)

// cara mengeluarkan
// element paling awal
firstElm = arrNum.shift()
console.log(firstElm, arrNum)

// sorting
// arrNum.sort()

console.log(arrNum)
arrNum.sort(function(val1, val2){
    console.log(val1, val2)
    return val1 < val2
})
console.log(arrNum)

// mengubah string menjadi array
numString = "1,2,3,4,5,6,7"
arrStr = numString.split(",")
console.log(arrStr)

const arrStrNum = []
// type casting
for( let i = 0; i < arrStr.length; i++){
    arrStrNum[i] = Number(arrStr[i])
}
console.log(arrStrNum)

// Object / Dictionary
// JSON => JavaScript Object Notation
const obj1 = {
    // property : value
    // key : value
    "name":"calman",
    "age":10,
    "orders":[1,2,3,4]
}

obj1.age = 11
obj1.address = "hello world"
console.log(obj1)

for (const key in obj1) {
    if (Object.hasOwnProperty.call(obj1, key)) {
        const element = obj1[key];
        console.log(element)
    }
}
// akses key pada object
console.log(obj1.name, obj1["age"])

// apakah bisa kita membuat
// array of object? 

const students = [
    {
        "name":"s1",
        "class":"a",
    },{
        "name":"s2",
        "class":"a",
    },{
        "name":"s3",
        "class":"a",
    }
]
console.log(students)
students.push(
    {
        "name":"s4",
        "class":"a",
    }
)
console.log(students)

// buatlah student array
// dengan jumlah student 6
// property:
//      - name
//      - subject math/physics/chemistry
//      - grade random number

// tolong buat 3 sort array tersebut berdasarkan
// 1. nama dari yang paling akhir
// 2. grade dari yang paling kecil
// 3. sort berdasarkan subject dan grade

// class Student{
//     constructor(name, subject, grade){
//         this.name = name
//         this.subject = subject
//         this.grade = grade
//     }

//     Greet(){
//         console.log(`hello ${this.name}`)
//     }
// }
// const s1 = new Student("calman", "math", 10)
// console.log(s1)
// s1.Greet()

class Student{
    // property
    // name, subject, grade
    constructor(name, subject, grade){
        this.name = name
        this.subject = subject
        this.grade = grade
    }

    // method
    Greet(){
        console.log(`hello ${this.name}`)
    }
}

console.log("===================================================")
console.log("===================================================")
const studentsWithGrade = []
const subject = ["math", "physics", "chemistry"]
for (let i = 0; i < 10; i ++ ){
    rand = Math.round(Math.random() * 10) % 10
    grade = Math.round(Math.random() * 10) % 10
    sub = Math.round(Math.random() * 10) % 3
    studentsWithGrade.push(
        new Student(`name-${rand}`, subject[sub], grade)
    )    
}
console.log(studentsWithGrade)

// sort by name
const sortName = [...studentsWithGrade]
sortName.sort((val1, val2) => {
    return val2.name.localeCompare(val1.name)
})
console.log(sortName)

// .sort = method punya array object

// sort by grade
const sortGrade = [...studentsWithGrade]
sortGrade.sort((val1, val2) => {
    return val1.grade - val2.grade
})
console.log(sortGrade)

// sort by subject and grade
const sortSubject = [...studentsWithGrade]
sortGrade.sort((val1, val2) => {
    return val2.subject.localeCompare(val1.subject) || 
            val1.grade - val2.grade
})
console.log(sortGrade)

const studentA = new Student("calman", "math", 10)
studentA.Greet()