// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘




function ageToAbilities(num) {

    if (num >= 25) {
        return 'You can do pretty much anything.'

    } else if (num <= 24 && num >= 18) {
        return 'You can vote but not rent a car.'
    }
    else if (num <= 17 && num >= 16) {
        return 'You can drive but not vote.'
    }
    else if (num < 16) {
        return "You can't drive."
    }

}

function oddIndices(arr) {
    let newArr = []
// console.log(arr)
    for (let i = 1; i <= arr.length; i+=2) {

        if (arr[i] % 2 == 0) {
        
            newArr.push(arr[i])
            // console.log('arr[i]',arr[i]) 
        }
       
    }
    return newArr
}






function numOddValues(arr) {
    let oddArr = []
    for (let i = 1; i <= arr.length; i+=2) {
        if (arr[i] % 2 !== 0) {
            oddArr.push(arr[i])
        }

    }
    return oddArr
  
}

// function numOddValues(arr){
//     let newArr = []
//     for(let i = 0; i < arr.length ; i++){
//         if(arr[i])
//     }
// }












// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof ageToAbilities === 'undefined') {
    ageToAbilities = undefined;
}
if (typeof oddIndices === 'undefined') {
    oddIndices = undefined;
}
if (typeof numOddValues === 'undefined') {
    numOddValues = undefined;
}
if (typeof averageStringLength === 'undefined') {
    averageStringLength = undefined;
}
if (typeof firstPunctuationIndex === 'undefined') {
    firstPunctuationIndex = undefined;
}
if (typeof getPlace === 'undefined') {
    getPlace = undefined;
}

if (typeof addToObj === 'undefined') {
    addToObj = undefined;
}

if (typeof duplicateElements === 'undefined') {
    duplicateElements = undefined
}

module.exports = {
    ageToAbilities,
    oddIndices,
    numOddValues,
    averageStringLength,
    firstPunctuationIndex,
    getPlace,
    addToObj,
    duplicateElements
};
