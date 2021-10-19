// Leap years are years divisible by four. However, years divisible by 100 are not leap years, unless they are divisible by 400,

const leapYears = function(year) {
    // check if year is divisble by 4 and not divisible by 100
    if (year % 400 === 0) return true;
    if (year % 4 === 0 && year % 100 !== 0) {
        // if true, return true
        return true;
    } else {
        // otherwise return false
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
