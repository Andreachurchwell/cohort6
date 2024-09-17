const returnEmptyString = function () {

    return ""

};

const returnZeroNumber = function (num) {
    return 0
};

const returnEmptyArray = function (arr) {
    return []
};

const returnEmptyObject = function (obj) {
    return {}
};

const returnString = function (str) {
    return 'abc123'
};

const addition = function (num1, num2) {
    return num1 + num2
};

const subtraction = function (num1, num2) {
    return num1 - num2
};

const multiplication = function (num1, num2) {
    return num1 * num2
};

const division = function (num1, num2) {
    return num1 / num2
};

const returnArray = function (arr) {
    return [1, 2, 3]
};

const returnFirstIndex = function (arr) {
    return arr[0]
};

const returnSecondIndex = function (arr) {
    return arr[1]
};

const returnArrayLength = function (arr) {
    return arr.length
};



const arraySum = function (arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result = result + arr[i]
        // console.log('i==',i,'arr[i]==',arr[i])

    }
    return result
}




const arraySubtraction = function (arr) {
    let result = 0
    for (let i = 0; i < arr.length; i++) {
        result = result - arr[i]
        // console.log('i==',i,'arr[i]==',arr[i])
    }
    return result
};

const multiplicationArray = function (arr) {
    // return result = arr.reduce((acc, currVal) => acc * currVal, 1)
    let result = 1
    for (let i = 0; i < arr.length; i++) {
        result = result * arr[i]
        // console.log('i==',i,'arr[i]==',arr[i])
    }
    return result
};

const divisionArray = function (arr) {
    let result = 1
    for (let i = 0; i < arr.length; i++) {
        result = result / arr[i]
    }
    return parseFloat(result.toFixed(3))
};

const oddArray = function (arr) {
    return arr.filter(num => num % 2 !== 0)
};

const evenArray = function (arr) {
    return arr.filter(num => num % 2 === 0)
};

module.exports = {
    returnEmptyString,
    returnZeroNumber,
    returnEmptyArray,
    returnEmptyObject,
    returnString,
    addition,
    subtraction,
    multiplication,
    division,
    returnArray,
    returnFirstIndex,
    returnSecondIndex,
    returnArrayLength,
    arraySum,
    arraySubtraction,
    multiplicationArray,
    divisionArray,
    oddArray,
    evenArray
}
