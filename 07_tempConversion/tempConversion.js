// conversion from fahrenheit to celsius
const ftoc = function(temp) {
  // formula --> (32°F − 32) × 5/9 = 0°C
  let result = (temp - 32) * 5/9
  // limit to one decimal place
  if (result % 1 != 0) return parseFloat(result.toFixed(1));
  return result;
};

console.log(ftoc(100)); // should equal 37.8
console.log(ftoc(-100)); // should equal -73.3

// conversion from celsius to fahrenheit
const ctof = function(temp) {
  // formula --> (0°C × 9/5) + 32 = 32°F
  let result = (temp * 9/5) + 32;
  // limit to one decimal place
  if (result % 1 != 0) return parseFloat(result.toFixed(1));
  return result;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
