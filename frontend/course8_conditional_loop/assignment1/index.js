// additional package
// additional library

// server side / backend
// const fs = require('fs') 

const btnText = document.getElementById("btn-generate")
btnText.addEventListener("click", function () {
    // membaca value dari text area
    const textArea = document.getElementById("text-area").value
    // compile text menjadi file
    // fs -> salah satu solution untuk membaca file

    // fs memerlukan callback function
    // fs.writeFile("file.txt", textArea, (err)=>{
    //     if (err){
    //         alert("something went wrong")
    //     }
    // })

    let data = new Blob([textArea], {type: 'text/plain'});
    // window.URL.revokeObjectURL("./text.txt");
    textFile = window.URL.createObjectURL(data);
    console.log(textFile)

// If you are trying to write a file on client machine, You can't do this in any cross-browser way. IE does have methods to enable "trusted" applications to use ActiveX objects to read/write file.
// If you are trying to save it on your server then simply pass on the text data to your server and execute the file writing code using some server side language.
// To store some information on the client side that is considerably small, you can go for cookies.
// Using the HTML5 API for Local Storage.

})