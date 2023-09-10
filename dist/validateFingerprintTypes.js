"use strict";
const validateFingerPrintTypes = (inputString) => {
    const difference = 5;
    if (inputString === '')
        return true;
    const fingerPrintArray = inputString
        .split(',')
        .map(item => parseInt(item, 10));
    const rightHandFingers = fingerPrintArray.filter(num => num <= 5);
    const leftHandFingers = fingerPrintArray.filter(num => num > 5).map(num => num - difference);
    if (rightHandFingers.length !== leftHandFingers.length)
        return false;
    const isMatching = rightHandFingers.every((num, index) => num === leftHandFingers[index]);
    return isMatching;
};
// Sample test cases
console.log(validateFingerPrintTypes('1,2,3,4,5')); // Should log false
console.log(validateFingerPrintTypes('1,2,3,4,5,6')); // Should log false
console.log(validateFingerPrintTypes('')); // Should log true
console.log(validateFingerPrintTypes('1,2,3,4,5,6,7,8,9,10')); // Should log true
console.log(validateFingerPrintTypes('1,2,3,4,5,6,7,8,9,101')); // Should log false
console.log(validateFingerPrintTypes('left little,2,3,left thumb,5,6,7,8,9,right thumb')); // Should log false
