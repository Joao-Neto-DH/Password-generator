"use strict";
const passwordInput = document.getElementById("password");
const btnGenerate   = document.getElementById("btn-generate");
const quantityRange = document.getElementById("quantity");
const specialsCheck = document.getElementById("special-chars");
const btnCopy       = document.getElementById("btn-copy");
const quantityValueSpan = document.getElementsByClassName("quantity-value")[0];
//  dados do toast
const toastComponent = document.getElementById('toast');
const toast = new bootstrap.Toast(toastComponent);

/**
 * Gera a senha segura
 * @param {int} max quantidade máxima de caracteres permitida na senha
 * @param {boolean} specialChars permite a adicão de caracters especiais
 * @returns senha gerada
 */
function generatePassword(max, specialChars = false) {
    const specials = ["@","#","$"];
    let letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z",1,2,3,4,5,6,7,8,9,0];
    
    if (specialChars) 
        letters = letters.concat(specials);

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
/**
 * Trata o evento de clique no botão de gerar a senha
 */
function callbackClickGenerate() {
    let max = quantityRange.value;
    let specials = specialsCheck.checked;

    passwordInput.value = generatePassword(max, specials);
    // console.log("yes")
}
/**
 * Callback chamado quando há alteração do valor da quantidadr de caracteres
 * @param {Event} event 
 */
function callbackInputRange(event) {
    quantityValueSpan.innerText = event.target.value;
}
function copyPassword() {
    navigator.clipboard.writeText(passwordInput.value);

    toastComponent.getElementsByClassName("toast-body")[0].innerText = passwordInput.value;

    if (passwordInput.value.trim())
        toast.show();
}
// console.log(btnGenerate);
btnGenerate.addEventListener("click", callbackClickGenerate)
// console.log(generatePassword(8));
quantityRange.addEventListener("input", callbackInputRange);
//  evento de cópia
btnCopy.addEventListener("click", copyPassword);