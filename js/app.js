'use strict';
var userName = prompt('Hello, what\'s your name?');
console.log('The user said their name is ' + userName);

var answerOne = prompt('Hi ' + userName + '! Welcome to my guessing game! First question, have I ever lived in a foreign country?').toLocaleLowerCase();
if (answerOne === 'yes' || answerOne === 'y'){
  alert('You are correct ' + userName + '! I studied abroad in Seoul, South Korea and lived in Sydney, Australia for 6 months!');
  console.log('The user got the correct answer for number 1');
}
else if (answerOne === 'no' || answerOne === 'n'){
  alert('You are wrong ' + userName + '! I studied abroad in Seoul, South Korea and lived in Sydney, Australia for 6 months!');
  console.log('The user got the wrong answer for number 1');
}
else {
  alert('Please answer yes/no');
  console.log('The user entered an incorrect input for number 1');
}

var answerTwo = prompt('Is pizza my favorite food?').toLocaleLowerCase();
if (answerTwo === 'no' || answerTwo === 'n'){
  alert('You are correct ' + userName + '! I would choose Thai, Korean, or Vietnamese food over pizza anyday.');
  console.log('The user got the correct answer for number 2');
}
else if (answerTwo === 'yes' || answerTwo === 'y'){
  alert('You are wrong ' + userName + '! I would choose Thai, Korean, or Vietnamese food over pizza anyday.');
  console.log('The user got the wrong answer for number 2');
}
else {
  alert('Please answer yes/no');
  console.log('The user entered an incorrect input for number 2');
}


var answerThree = prompt('Am I from Seattle?').toLocaleLowerCase();
if (answerThree === 'yes' || answerThree === 'y'){
  alert('You are correct ' + userName + '! I\'m a born and raised Seattleite!');
  console.log('The user got the correct answer for number 3');
}
else if (answerThree === 'yes' || answerThree === 'y'){
  alert('You are wrong ' + userName + '! I\'m a born and raised Seattleite!');
  console.log('The user got the wrong answer for number 3');
}
else {
  alert('Please answer yes/no');
  console.log('The user entered an incorrect input for number 3');
}

var answerFour = prompt('Do I watch Game of Thrones?').toLocaleLowerCase();
if (answerFour === 'no' || answerFour === 'n'){
  alert('You are correct ' + userName + '! I never got into it, I\'m more into comedy shows some of my favorites are: Bob\'s Burgers, 30 Rock, and Schitt\'s Creek.');
  console.log('The user got the correct answer for number 4');
}
else if (answerFour === 'yes' || answerFour === 'y'){
  alert('You are wrong ' + userName +'! I never got into it, I\'m more into comedy shows some of my favorites are: Bob\'s Burgers, 30 Rock, and Schitt\'s Creek.');
  console.log('The user got the wrong answer for number 4');
}
else {
  alert('Please answer yes/no');
  console.log('The user entered an incorrect input for number 4');
}

var answerFive = prompt('Do I speak any languages other than English?').toLocaleLowerCase();
if (answerFive === 'no' || answerFive === 'n'){
  alert('You are correct ' + userName + '! I wish! I want to learn French.');
  console.log('The user got the correct answer for number 5');
}
else if (answerFive === 'yes' || answerFive === 'y'){
  alert('You are wrong ' + userName +'! I wish! I want to learn French.');
  console.log('The user got the wrong answer for number 5');
}
else {
  alert('Please answer yes/no');
  console.log('The user entered an incorrect input for number 5');
}
