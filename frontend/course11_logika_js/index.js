// excercise 1
// Diberikan sebuah function yang menerima dua parameter angka. 
// Function akan me-return nilai true jikasecondNumber lebih besar dari firstNumber, 
// dan false jika sebaliknya. Jika kedua angka bernilai sama, functionakan me-return -1.

// excercise 2
// Buatlah function bernama reverseString yang mampu melakukan proses pembalikan string!

// excercise 3
// Buatlah function yang bisa mengurutkan huruf yang ada pada sebuah text, dari A-Z (Ascending).
// Note: Jika sudah berhasil menyelesaikan masalah ini menggunakan built-in function .sort(), 
// coba jugamenggunakan algoritma sortingmu sendiri.

// excercise 4
// Diberikan sebuah function yang menerima satu parameter berupa array yang terdiri dari angka. 
// Function tersebutakan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika dan false jika sebaliknya.
// Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. 
// Contoh,2, 4,6, 8adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan 2, 4, 6, 9
// bukanlah deret aritmatika karenatidak perbedaan selisih antar angka yang tidak konsisten.

const aritmatika = (arrNum) =>{
    if (arrNum.length < 2){
        return false
    }
    const diff = arrNum[1] - arrNum[0] // 2
    for(let i = 1; i < arrNum.length - 1; i++){
        let tempDiff = arrNum[i+1] - arrNum[i]
        if (diff !== tempDiff){
            return false
        }
    }
    return true   
}
console.log(aritmatika([2,4,6,8,10]))
console.log(aritmatika([2,4,6,9]))

const text = "this is very long long text"
console.log(text.indexOf("i"))

// excercise 5
// Diberikan sebuah function yang menerima satu parameter berupa string. 
// Function tersebut mengembalikan nilaitrue jika di dalam string tersebut 
// terdapat karakter a dan b yang memiliki jarak 3 karakter lain minimal satu kali.
// Jika tidak ditemukan sama sekali, kembalikan nilai false.

// exercide 6
// Diberikan sebuah function yang menerima dua parameter angka. 
// Function akan mengembalikan nilai FPB (FaktorPersekutuan Terbesar). 
// FPB dari dua bilangan merupakan bilangan bulat positif terbesar yang 
// dapat membagihabis kedua bilangan tersebut.

// exercise 7
// Diberikan sebuah function yang menerima satu parameter berupa angka. 
// Function akan me-return true jika angkatersebut adalah bilangan prima. 
// Jika tidak, return false.

// console.log(1 == "1") // true
// console.log(1 === "1") // false