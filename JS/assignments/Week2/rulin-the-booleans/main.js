/********************
 * YOUR CODE BELOW! *
 ********************/
function moreThan5(num) {
  if (num > 5) {
    return true
  } else {
    return false
  }

}

function isNewTopScore(num1, num2) {
  if (num1 > num2) {
    return true
  } else {
    return false
  }
}

function isInDanger(num) {
  if (num >= 60 && num <= 71) {
    return true
  } else {
    return false
  }

}

function isCoasting(num) {
if(num >=72 && num <= 83){
  return true
}else{
  return false
}
}

function isSucceeding(num){
if(num >= 84 && num <=92){
  return true
}else{
  return false
}
}

function isFailing(num){
if (num <60){
  return true
}else{
  return false
}
}

function isAcing(num){
if (num > 92){
  return true
}else{
  return false
}
}

function isStudent(str){
  if (str === "student"){
    return true
  }else{
    return false
  }

}

function isTeacher(str){
  if (str === "teacher"){
    return true
  }else{
    return false
  }

}

function isAdmin(str){
  if (str === "admin"){
    return true
  }else{
    return false
  }

}

function isElementary(str){
  if (str === "elementary"){
    return true
  }else{
    return false
  }

}

function areDifferentPeople(str1,str2){
if(str1 !== str2){
  return true
}else{
  return false
}
}

function isMiddleSchoolTeacher(str, num){
  if(str === 'teacher' && num <=  8 && num >= 6){
    return true
  }else{
    return false
  }

}


function notAnElementarySchoolAdministrator(str1, str2){
if (str1 !== `elementary` || str2 !== `admin` || str1 === str2){
  return true
}else{
  return false
}
}





/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
