function isLetter(charCode) {
    return (charCode > 64 && charCode < 91) ||
           (charCode > 96 && charCode < 123);
}

function encryptChar(char, factor) {
    let charCode = char.charCodeAt();
    let newChar;

    if (!isLetter(charCode)) {
        return char;
    }
    
    if (charCode + factor > 122) {
        // Lower case
        charCode = 97 + (charCode + factor - 123);
    } else if (charCode + factor > 90 && charCode < 91) {
        // Upper case
        charCode = 65 + (charCode + factor - 91);
    } else {
        charCode += factor;
    }

    newChar = String.fromCharCode(charCode);
    
    return newChar;
}

function caesarCipher(string, factor) {
    let encryptedStr = '';
    for (let i = 0; i < string.length; i++) {
        encryptedStr += encryptChar(string[i], factor);
    }

    return encryptedStr;
}

module.exports = caesarCipher;