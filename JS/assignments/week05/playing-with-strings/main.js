/******************
 * YOUR CODE HERE *
 ******************/


function xify(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    newStr += 'x'
  }
  return newStr
}



function yellingChars(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    newStr = newStr + str[i] + '!'

  }
  return newStr
}




function indexedChars(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    newStr += i + str[i]

  }
  return newStr
}




function numberedChars(str) {
  let output = ''
  for (let i = 0; i < str.length; i++) {
    output += "(" + (i + 1) + ")" + str[i];

  }
  return output
}


function exclaim(str) {
  return str.replace(/[?.]/g, '!')
}




function repeatIt(str, n) {
  if (n < 0) {
    return ''
  }
  return str.repeat(n)
}




function truncate(str) {
  if (str.length < 18) {
    return str
  }
  return str.slice(0, 15) + '...'
}




function emailify(str) {

  let parts = str.split(' ');
  if (parts.length !== 2) {
    return 'Invalid'
  }

  let firstName = parts[0][0].toLowerCase();
  let lastName = parts[1].toLowerCase();
  let email = `${firstName}${lastName}.prsvr@gmail.com`

  return email
}

function reverse(str) {
  let reversedStr = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i]
  }
  return reversedStr
}





function onlyVowels(str) {
  const vowels = 'aeiouAEIOU';
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      result += str[i]
    }
  }
  return result
}



function crazyCase(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
    if (i % 2 == 0) {
      newStr += str[i].toLowerCase()
    } else {
      newStr += str[i].toUpperCase()
    }
  }
  return newStr
}



function titleCase(str) {
  const words = str.split(' ');
  const transW = words.map(words => {
    if (words.length > 0) {
      return words[0].toUpperCase() + words.slice(1).toLowerCase();
    } else {
      return words
    }
  })
  return transW.join(' ')
}



function camelCase(str) {
  const word = str.split(/[^a-zA-Z0-9]+/)
  const newWords = word.map((word, i) => {
    if (i === 0) {
      return word.toLowerCase()
    } else {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    }
  });
  return newWords.join('')

}


function crazyCase2ReturnOfCrazyCase(str) {

  let result = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === ' ') {
      result += char;
    } else {
      if (count % 2 === 0) {
        result += char.toLowerCase();
      } else {
        result += char.toUpperCase();
      }
      count++
    }
  }
  return result
}






/********************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
********************************************/

if (typeof xify === 'undefined') {
  xify = undefined;
}

if (typeof smilify === 'undefined') {
  smilify = undefined;
}

if (typeof yellingChars === 'undefined') {
  yellingChars = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof emailify === 'undefined') {
  emailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  xify,
  smilify,
  indexedChars,
  yellingChars, // <-- add this line here (no need for the comment, obvs)
  numberedChars,
  exclaim,
  repeatIt,
  truncate,
  emailify,
  reverse,
  onlyVowels,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
