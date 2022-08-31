"use strict";
const passwordInput = document.getElementById("password");
const btnGenerate   = document.getElementById("btn-generate");

function generatePassword(max) {
    const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z",1,2,3,4,5,6,7,8,9,0];
    
    let pass = "";
    
    for (let i = 0; i < max; i++) {
        let index = Math.round(Math.random() * letters.length) % letters.length;
        // console.log(index);
        let letter = letters[index];
        if (Math.random() < 0.4)
            letter = letter.toString().toUpperCase();
        pass += letter;    
    }

    return pass;
}

function callbackClickGenerate() {
    passwordInput.value = generatePassword(8);
    // console.log("yes")
}
// console.log(btnGenerate);
btnGenerate.addEventListener("click", callbackClickGenerate)
// console.log(generatePassword(8));