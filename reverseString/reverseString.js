function reverseString(string) {
    if (typeof string !== 'string') {
        throw new TypeError('Invalid input!');
    }

    let reversedStr = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedStr += string[i];
    }
    
    return reversedStr;
}

module.exports = reverseString;