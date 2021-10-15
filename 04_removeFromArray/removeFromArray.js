const removeFromArray = function(arr, ...num) {
    let args = Array.from(num);
    console.log(args);
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < args.length; j++) {
            console.log(arr[i] + ' ' + args[j]);
            if (arr[i] === args[j]) {
                console.log('remove ' + arr[i]);
                arr.splice(i, 1);
                // addresses a glitch where .splice() skips the next iteration
                i--;
            }
            console.log('you stay');
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
