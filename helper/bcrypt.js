var CryptoJS = require("crypto-js");
const CRYPTO_SECRET = process.env.CRYPTO_SECRET;


function hashPassw(plainPassw) {
    let ciphertext = CryptoJS.AES.encrypt(plainPassw, CRYPTO_SECRET).toString();
    return ciphertext
}


module.exports = {
    hashPassw
}