function isEvenlyDivisible(num1, num2) {
  if (num1 % num2 == 0) {
    return true
  } else {
    return false
  }



}

function halfSquare(num) {
  if (num * num / 2 === num) {
    return num

  }
}

function isLong(str) {

  if (str.length >= 15) {
    return true
  } else {
    return false
  }

}

function exclaim(str) {
  if (str.length - 1 == '!') {
    return str
  } else {
    return str + '!'
  }



}

function countWords(str) {

}

function containsDigit() {
}

function containsLowerCase() {
}

function containsUpperCase() {
}

function containsNonAlphanumeric() {
}

function containsSpace() {
}

function digits() {
}

function truncate() {
}

function isValidPassword(str) {
  if (str === str) {
    return true
  } else {
    return false
  }
}

function onlyPunchy(arr) {

}


module.exports = {
  isEvenlyDivisible,
  halfSquare,
  exclaim,
  isLong,
  containsDigit,
  containsLowerCase,
  containsUpperCase,
  containsNonAlphanumeric,
  containsSpace,
  countWords,
  digits,
  truncate,
  isValidPassword,
  onlyPunchy,
}
