const repeatString = function(string, num) {
    if (num < 0) {
        return 'ERROR';
    }
    
    // repeated string with .repeat()
    
    return string.repeat(num);
    
    // repeated string with a for loop
    
    /*const repeatedString = [];
    for (i = 1; i <= num; i++) {
        repeatedString.push(string);
    }
    return repeatedString.join('');*/
    
};

// Do not edit below this line
module.exports = repeatString;
