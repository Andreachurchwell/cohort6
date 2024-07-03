
function isEvenlyDivisible(num1, num2) {

  if (num1 % num2 == 0) {
    return true
  } else {
    return false
  }

}




function halfSquare(num) {

  const squared = num * num;
  const half = squared / 2;
  return half

}





function isLong(str) {

  if (str.length >= 15) {
    return true
  } else {
    return false
  }

}





function exclaim(str) {

  let cleanStr = str.replace(/!+$/, '');
  return cleanStr + '!'
}




function containsDigit(str) {
  const digitRegex = /\d/;
  if (str.length === 0) {
    return false;
  }
  return digitRegex.test(str)
}



function containsLowerCase(str) {

  const lowerRegex = /[a-z]/;
  if (str.length === 0) {
    return false
  }
  return lowerRegex.test(str)
}




function containsUpperCase(str) {
  const upperRegex = /[A-Z]/;
  if (str.length === 0) {
    return false
  }
  return upperRegex.test(str)
}




function containsNonAlphanumeric(str) {
  const nonAlphaRegex = /[^a-zA-Z0-9]/;
  if (str.length === 0) {
    return false
  }
  return nonAlphaRegex.test(str)


}




function containsSpace(str) {
  const spacesRegex = /\s/;
  if (str.length === 0) {
    return false
  }
  return spacesRegex.test(str)


}



function digits(num) {

  const numString = num.toString().replace(/[^0-9]/g, '');
  return Array.from(numString).map(Number)


}




function truncate(str) {

  if (str.length >= 15) {
    return str.slice(0, 8) + '...'
  } else {
    return str
  }


}





function isValidPassword(password) {


  if (/\s/.test(password)) return false;
  if (!/[A-Z]/.test(password)) return false;
  if (!/[a-z]/.test(password)) return false;
  if (!/\d/.test(password)) return false;
  if (!/\W/.test(password)) return false;
  return true;

}




function onlyPunchy(words) {
  return words.map(word => {
    let cleanword = word.replace(/!+/g, '!');
    if (!cleanword.includes('!')) {
      cleanword += '!';

    }
    let wordWithout = cleanword.replace(/!/g, '!');
    if (wordWithout.length < 15) {
      return cleanword
    }
  }).filter(Boolean);

}



function countWords(str) {

  str = str.trim();

  if (str.length === 0) {
    return 0
  }
  const splitStr = str.split(/\s+/);
  return splitStr.length

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
