const identity = function (input) {

    return input

};




const first = function (arr, n) {
    let temp = []

    if (n === undefined) {
        return arr[0]
    } else if (arr.length < n) {
        return arr
    }
    for (let i = 0; i < n; i++) {

        temp.push(arr[i])

    }

    return temp

};






const last = function (arr, n) {
    if (n === undefined) {
        return arr[arr.length - 1]
    } else if (n == 0) {
        return []
    } else if (n > arr.length) {
        return arr
    }
    let result = []
    for (let i = arr.length - n; i < arr.length; i++) {
        result.push(arr[i])
    }
    return result
};






const each = function (collection, iterator) {
    if (Array.isArray(collection)) {
        // Loop through array elements
        for (let i = 0; i < collection.length; i++) {
          iterator(collection[i], i, collection);
        }
      } else if (typeof collection === 'object' && collection !== null) {
        // Loop through object properties
        for (let key in collection) {
          if (collection.hasOwnProperty(key)) {
            iterator(collection[key], key, collection);
          }
        }
      }
};



//  var numbers = [10,20,30,40,50]

// const indexOf = function (arr, found) {
//   
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === found){
//             return i
//         }else{
//             return -1
//         }
//     }
// };

// console.log(indexOf(numbers, 40), 3)


const indexOf = (array, target) => {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; 
        }
    }
    return -1;
}







const map = (arr, iter) => {
    const result = []
    for(let i = 0; i < arr.length; i++){
        result.push(iter(arr[i]))
    }
    return result
}




const filter = (collection, callback) => {
    let result = []
    for (let item of collection) {
        if (callback(item)) {
            result.push(item)
        }
    }
    return result
}








const reject = (collection, callback) => {
    let result = []
    for (let item of collection) {
        if (!callback(item)) {
            result.push(item)
        }
    }
    return result
}





const uniq = (collection) => {
    let result = []
    for (let item of collection) {
        if (result.indexOf(item) === -1) {
            result.push(item)
        }
    }
    return result
}






const reduce = (collection, callback, initialVal) => {
    let accumulator = initialVal
    for (let key in collection) {
        if (accumulator === undefined) {
            accumulator = collection[key]
        }
        accumulator = callback(accumulator, collection[key])
    }
    return accumulator
}






module.exports = {
    identity,
    first,
    last,
    each,
    indexOf,
    map,
    filter,
    reject,
    uniq,
    reduce
};