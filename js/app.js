'use strict';

var score=0;

var whatName = prompt('what is you name?');
alert(whatName + ', thank you for coming to my page!');
console.log(whatName);

//Question 1
var hobby = prompt('Is scuba diving the greatest hobby know to man? (y or n)');


function questionHobby() {
  if(hobby.startsWith('y')) {
    alert('You are absolutely correct!!');
    score++;
  }
  else {
    alert('You are WRONG!');
  }
  console.log(hobby);
}
questionHobby();

//Question 2
function questionOcean() {
  var ocean = prompt('Is the Pacific Ocean the largest Ocean in the world?').toLowerCase();


  if(ocean.startsWith('y')){
    alert('You are correct!');
    score++;
  }
  else{
    alert('Try again bro!');
  }
  console.log(ocean);
}
questionOcean();

//Question 3
function questionFish() {
  var fish = prompt('Is the Grunt Sculpin my favorite fish in the sea?').toLowerCase();


  if(fish.startsWith('y')){
    alert('HELLS to the Yeah they are!');
    score++;
  }
  else{
    alert('You need to go learn some fish!');
  }
  console.log(fish);
}
questionFish();

//Question 4
function questionDiver() {
  var q4 = prompt('Am I an awsome scuba Diver Master?').toLowerCase();


  if(q4.startsWith('y')){
    alert('Absolutely!!');
    score++;
  }
  else{
    alert('Yea Yea you are WRONG!');
  }
  console.log(q4);
}
questionDiver();

//Question 5
function questionCoding() {
  var q5 = prompt('Is coding challeging but incredably fun?!').toLowerCase();

  if(q5.startsWith('y')){
    alert('Correct! It most certainly is and i LOVE IT!!');
    score++;
  }
  else{
    alert('You should try it again!');
  }
  console.log(q5);
}
questionCoding();

// Question 6
var tries = 0;
var guessRight = false;

function questionCities() {
  for(var guesses = 1; guesses <= 4; guesses++) {
    tries++;
    var q6 = parseInt(prompt('how many cities have i lived in?'));
    if(q6 === 4){
      alert('You are correct. I have lived in 4 cites (Federal Way, Kent. Black Diamond, and Auburn.');
      console.log('cities lived in, Correct');
      score++;
      guessRight = true;
      break;
    }
    else if(q6 > 4){
      alert('You are to high. Please try again.');
      console.log('wrong, to high');
    }
    else if(q6 < 4){
      alert('You are to low. Please try agian');
      console.log('wrong: to low');
    }
  }
  alert('After, ' + tries + ' guesses, you are ' + guessRight);
}
questionCities();

// Question 7
var numbOfCountries = ['usa', 'canada', 'equador', 'mexico' ];

function questionCountries() {
  for(var i = 0; i <= 6; i++){
    var q7 = prompt('What countries have I been to?').toLowerCase();
    if(numbOfCountries.includes(q7)){
      console.log('Correct' + q7);
      alert('You are correct!! I have been to the USA, canada, equador, and mexico.');
      score++;
      numbOfCountries.remove(q7);
    }
    if (i === 6 ){
      console.log('answer was wrong');
      alert('Good try but you ran out of guesses. I have been to the usa, canada, equador, and mexico.');
    }
    else {
      console.log('Wrong');
      alert('Wrong try again!');
    }
  }
}
questionCountries();
alert('You got ' + score + ' out of 7');
