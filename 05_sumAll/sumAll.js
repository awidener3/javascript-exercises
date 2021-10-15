const sumAll = function (num1, num2) {
    if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    }
    
    if(typeof num1 === 'number' && typeof num2 === 'number') {
        let sumNum = 0;
        if (num1 < num2) {
            for (let i = num1; i <= num2; i++) {
                sumNum += i;
            }
        } else {
            for (let i = num1; i >= num2; i--) {
                sumNum += i;
            }
        }
        return sumNum;
    }
    return 'ERROR'
}

// Do not edit below this line
module.exports = sumAll;
