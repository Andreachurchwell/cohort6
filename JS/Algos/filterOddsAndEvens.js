// Finish the function to filter out all odd numbers and all even numbers from an array of numbers.


// Example
// filterOddsAndEvens([1,2,3,4,5,6,7,8,9,10]) should return [2,4,6,8,10]

// Hint


// Pseudo Code

// function filterOddsAndEvens
// evens = []
// odds = []
// loop thru arr
// if even push it to evens
// odd push it to odds
// console.lg to see if your right



function filterOddsAndEvens(arr) {
    let evens = []
    let odds = []

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 == 0) {
            evens.push(arr[i])
            console.log(arr[i])
        } else if (i % 2 != 0) {
            odds.push(arr[i])
            console.log(arr[i])
        }

    }

    console.log(evens)
    console.log(odds)
}


console.log(filterOddsAndEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // [2,4,6,8,10]


//  let even = arr.filter((item) => item % 2 == 0)
//  let odd = arr.filter((item) => item % 2 != 0)

//  arr.filter((item) => item % 2 == 0 ? evens.push(item): odds.push(item))