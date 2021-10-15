const reverseString = function(str) {
    let wordPieces = [];

    for (let i = 0; i < str.length; i++) {
        wordPieces.push(str[i]);
    }
    return wordPieces.reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;