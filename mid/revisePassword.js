// * Case 4

const CryptoJS = require('crypto-js');
const SECRET_KEY = require('./modules/SECRET_KEY');


// Encrypt Function
const encryptPass = (password) => {
    let encryptCode = CryptoJS.AES.encrypt(password, SECRET_KEY).toString();
    return encryptCode;
}

let encryptResult = encryptPass('salamDariBinja189347');
console.log(encryptResult);

// Decrypt Function
// receive param from encrypt result and turn it back to string
const decryptPass = (encryptResult) => {
    let decryptCode  = CryptoJS.AES.decrypt(encryptResult, SECRET_KEY);
    let passText = decryptCode.toString(CryptoJS.enc.Utf8);
    return passText;
}

let decryptResult = decryptPass(encryptResult);
console.log(decryptResult); 