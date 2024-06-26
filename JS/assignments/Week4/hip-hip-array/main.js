/* This assignment will give you some practice with creating arrays and using their methods. */

// ANY time you're asked to print something from the  array, do it with a loop, printing each item you're asked to print INDIVIDUALLY.
// 
// 
//
// Challenge 1
//
// Loop through the following array, console.logging out each value.
const students = [
  'Tre',
  'Sonny',
  'Crystal',
  'Ilyas',
  'Greg',
  'Fernando',
  'Timothy',
  'Patrick',
  'Steve',
  'Jimothy',
  'Pat',
  'Arnold',
  'Andy'
];
console.log('challenge 1', students)

// Challenge 2
// Loop through the following array BACKWARDS, console.logging out each value. 64 should be printed first and 100 last.
const grades = [100, 80, 110, 75, 83, 64];


for (let i = grades.length; i >= 0; i--) {
  console.log('challenge 2', grades[i])
}



// Challenge 3
// Console.log out only the even numbers in the following array.
const positiveNumbers = [5, 2, 13, 17, 4, 102, 3000];
let even = []
for (let i = 0; i < positiveNumbers.length; i++) {
  if (positiveNumbers[i] % 2 === 0) {
    // console.log('challenge 3', positiveNumbers[i])
    even.push(positiveNumbers[i])
  }
}
console.log('challenge3', even)




// Challenge 4
// Console.log out the even numbers in the following array, INCLUDING the negative ones. There should be four total printings.
const mixedSignNumbers = [3, 15, 14, -2, -3, -8, -103, 4];

for (let i = 0; i < mixedSignNumbers.length; i++) {
  if (mixedSignNumbers[i] % 2 == 0) {
    console.log('challenge 4', mixedSignNumbers[i])
  }
}


// Challenge 5
// Remove two values from the beginning and one value from the end of the following array, simply by deleting them in the following line. Then console.log out each value individually.
const symmetricalCapitals = ['A', 'H', 'I', 'M', 'O', 'T', 'U', 'V', 'W', 'X', 'Y'];
console.log('challenge 5', symmetricalCapitals.pop())
console.log('challenge 5', symmetricalCapitals.slice(0, 2))








// Challenge 6
// Add a value (your choice!) to the start of the following array and two values (of your choice) to the end simply by adding them in the following line, and then console.log out each value individually.
const fibonacciNumbers = [1, 1, 2, 3, 5, 8, 13];
fibonacciNumbers.unshift("bob")
console.log(fibonacciNumbers[0])
fibonacciNumbers.push(3, "tim")
console.log('challenge 6', fibonacciNumbers[fibonacciNumbers.length - 1], fibonacciNumbers[fibonacciNumbers.length - 2])





// Challenge 7
// Make a NEW array with 5 values of your choice, using the same syntax as the array creation from the previous 6 challenges; that is, every value should be placed within the square brackets.  Now console.log out each value individually.
let colors = ['red', 'orange', 'blue', 'yellow', 'green', "Red"]
console.log('challenge 7', colors)
// console.log(colors.length)
// console.log('1st color is ',colors[0])
// console.log('2nd color is ',colors[1])
// console.log('3rd color is ',colors[2])
// console.log('4th color is ',colors[3])
// console.log('5th color is ',colors[4])

for (let i = 0; i < colors.length; i++) {
  console.log("i: ", i, "colors[i] :", colors[i])
}


// Challenge 8
// Make a new EMPTY array and fill it with five values of your choice using BOTH .push AND .unshift, and then console.log out each value individually.

let arr = []
arr.push('andrea', 'zemar', 'tab', 'lena', 'cass')
arr.unshift('michael', 'chris')
console.log('challenge 8 mike and chris to front', arr)


for (let i = 0; i < arr.length; i++) {
  console.log('student ', arr[i])
}



// Challenge 9
// Loop through the `students` array from Challenge 1, starting at index 3 and ending at index 10 (INCLUSIVE), logging out each value individually.


for (let i = 3; i <= students.length - 3; i++) {
  console.log('challenge 9', 'i =  ', i, 'student[i]', students[i])
}





// Challenge 10
// Loop through the `students` array from Challenge 1, making a COPY of the array, starting at index 3 and ending at index 10 (INCLUSIVE). This is very similar to string building; create a new array, loop through the old one, and put values from the original in the new one. Then log out each value of the copy indivudally.


// // 
let newA = []

for (let i = 3; i <= 10; i++) {

  newA.push(students[i])


  console.log('challenge 10', newA[i - 3])
}






// Challenge 11
// Make a COPY of the `students` array *using .slice*, starting at index 3 and ending at index 10 (INCLUSIVE), then log out each value of the copy individually. THEN log out each value of the original array. Notice that the original array didn't get any values taken out of it, because `slice` does NOT modify the original array.

let slice = students.slice(3, 11)
console.log('slice', slice)

for (let i = 0; i < students.length; i++) {
  console.log('students', 'i', i, students[i])
}
for (let i = 0; i < students.length; i++) {
  console.log('challenge 11','slice', 'i', i, slice)
}




// Challenge 12
// Pull the items at indices 4-6 (inclusive) from the following array using .splice (NOT .slice!), then console.log out each item from the ORIGINAL array. Note that .splice DOES change the original array.
const dinosaurs = ['Velociraptor', 'T-Rex', 'Stegosaurus', 'Triceratops', 'Dimetrodon', 'Allosaur', 'Spinosaurus', 'Gigantosaur']

let spliceArr = dinosaurs.splice(4,3)
console.log('challenge 12',dinosaurs)

for(i = 0; i <= dinosaurs.length; i++){
  console.log('challenge 12','new arr items',spliceArr[i])
}


// Challenge 13
// Use .join to change the dinosaur strings from the above array into one string with a '*' string as the "separator". Then console.log out that string.
let joinArr = dinosaurs.join('*')
  console.log('challenge 13', dinosaurs.join('*'))

// Challenge 14
// Use .reverse to reverse the dinosaur array and then log out the original array. .reverse DOES change the original array.

let revArr = dinosaurs.reverse()
console.log('challenge 14', dinosaurs.reverse())


// Challenge 15
// Use .concat to combine the following two arrays into a NEW array you make (.concat RETURNS an array). Then console.log out each value of that new array individually. Now console.log both the primaries and secondaries arrays, noting that .concat does NOT mutate the original arrays.
const primaries = ['red', 'yellow', 'blue'];
const secondaries = ['orange', 'green', 'purple'];
let concatArr = []
console.log('challenge 15', concatArr.concat(primaries,secondaries))
