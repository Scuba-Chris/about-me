
var answers = [];

var hobby = confirm('Is scuba diving the greatest hobby know to man? (y or n)');

answers.push(hobby);
if(hobby) {
  alert('You are absolutely correct!!');
}
else{
  alert('You are WRONG!');
}
console.log(hobby);

var ocean = prompt('Is the Pacific Ocean the largest Ocean in the world?').toLowerCase();

answers.push(ocean);

if(ocean.startsWith('y')){
  alert('You are correct!');
}
else{
  alert('Try again bro!');
}
console.log(ocean);

var fish = prompt('Is the Grunt Sculpin the coolest fish in the sea?').toLowerCase();

answers.push(fish);

if(fish.startsWith('y')){
  alert('HELLS to the Yeah!');
}
else{
  alert('You need to go learn some fish!');
}
console.log(fish);

var q4 = confirm('Am I an awsome scuba Diver Master?');

answers.push(q4);

if(q4){
  alert('Absolutely!!');
}
else{
  alert('Yea Yea you are WRONG!');
}
console.log(q4);

var q5 = confirm('Is coding challeging but incredably fun?!');
answers.push(q5);

if(q5){
  alert('Correct! It most certainly is!!');
}
else{
  alert('You should try it again!');
}
console.log(q5);

answers.push(cities);
for(var i = 0; i <= 4; i++){
  var cities = prompt('How many cities have I lived in?');
  switch(cities.toLowerCase()){
  case '1':
    console.log('To low!');
    alert('To low! Try again.');
    break;

  case '2':
    console.log('To low!');
    alert('To low! Try again.');
    break;

  case '3':
    console.log('Correct');
    alert('Correct!');
    i = 4;
    break;

  case '4':
    console.log('To high!');
    alert('To high! Try again.');
    break;

  case 'deafult':
    console.log('Not a number');
    alert('Not a number from 1 to 6');
    break;

  }}

answers.push(q7);

var numbOfCountries = ['usa', 'canada', 'equador', 'mexico' ];

for(var i = 0; i <= 5; i++){
  var q7 = prompt('What countries have I been to?').toLowerCase();
  if(numbOfCountries.includes(q7)){
    console.log('Correct');
    alert('You are correct!!');
    alert('You got ' + answers.indexOf() + ' out of 7' );
    numbOfCountries.remove(q7);
  }
  else {
    console.log('Wrong');
    alert('Wrong try again!');
  }
}

