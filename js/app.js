

// var score=0

// //Question 1
// var hobby = confirm('Is scuba diving the greatest hobby know to man? (y or n)');


// function questionHobby() {
//   if(hobby) {
//     alert('You are absolutely correct!!');
//     score++;
//   }
//   else {
//     alert('You are WRONG!');
//   }
//   console.log(hobby);
// }
// questionHobby();

// //Question 2
// function questionOcean() {
//   var ocean = prompt('Is the Pacific Ocean the largest Ocean in the world?').toLowerCase();


//   if(ocean.startsWith('y')){
//     alert('You are correct!');
//     score++;
//   }
//   else{
//     alert('Try again bro!');
//   }
//   console.log(ocean);
// }
// questionOcean();

// //Question 3
// function questionFish() {
//   var fish = prompt('Is the Grunt Sculpin the coolest fish in the sea?').toLowerCase();


//   if(fish.startsWith('y')){
//     alert('HELLS to the Yeah!');
//     score++;
//   }
//   else{
//     alert('You need to go learn some fish!');
//   }
//   console.log(fish);
// }
// questionFish();

// //Question 4
// function questionDiver() {
//   var q4 = confirm('Am I an awsome scuba Diver Master?');


//   if(q4){
//     alert('Absolutely!!');
//     score++;
//   }
//   else{
//     alert('Yea Yea you are WRONG!');
//   }
//   console.log(q4);
// }
// questionDiver();

// //Question 5
// function questionCoding() {
//   var q5 = confirm('Is coding challeging but incredably fun?!');

//   if(q5){
//     alert('Correct! It most certainly is!!');
//     score++;
//   }
//   else{
//     alert('You should try it again!');
//   }
//   console.log(q5);
// }
// questionCoding();

// //Question 6
// function questionCities() {
//   for(var i = 0; i <= 4; i++){
//     var cities = prompt('How many cities have I lived in?');
//     switch(cities.toLowerCase()){
//     case '1':
//       console.log('To low!');
//       alert('To low! Try again.');
//       break;
//     case '2':
//       console.log('To low!');
//       alert('To low! Try again.');
//       break;
//     case '3':
//       console.log('Correct');
//       alert('Correct!');
//       score++;
//       i = 4;
//       break;
//     case '4':
//       console.log('To high!');
//       alert('To high! Try again.');
//       break;
//     case 'deafult':
//       console.log('Not a number');
//       alert('Not a number from 1 to 6');
//       break;
//     }}
// }
// questionCities();

// //Question 7
// var numbOfCountries = ['usa', 'canada', 'equador', 'mexico' ];

// function questionCountries() {
//   for(var i = 0; i <= 5; i++){
//     var q7 = prompt('What countries have I been to?').toLowerCase();
//     if(numbOfCountries.includes(q7)){
//       console.log('Correct');
//       alert('You are correct!!');
//       score++;
//       alert('You got ' + score + ' out of 7');
//       numbOfCountries.remove(q7);
//     }
//     else {
//       console.log('Wrong');
//       alert('Wrong try again!');
//     }
//   }
// }
// questionCountries();
