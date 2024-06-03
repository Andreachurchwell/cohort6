/******************************
 * YOUR CODE GOES RIGHT HERE! *
 ******************************/
function fizzy(num) {
  let result = []

  for (let i = 1; i <= num; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
          console.log("IF hit", "i:", i)
        return 'FizzBuzz'
          result.push("FizzBuzz")
      } else if (i % 3 == 0) {
          console.log("ElseIF hit", "i:", i)
          result.push("Fizz")
          return "Fizz"

      } else if (i % 5 == 0) {
          result.push("Buzz")
        return 'Buzz'
      } else {
          result.push("None of the above",i.toString())
         
      }


  }
}





/**********************************
 *      OUR CODE GOES BELOW.      *
 * THIS IS FOR INTERNAL USE ONLY. *
 * DO NOT ADD OR CHANGE ANYTHING! *
 **********************************/


if (typeof fizzy === "undefined") {
  fizzy = undefined;
}

module.exports = {
  fizzy,
};
