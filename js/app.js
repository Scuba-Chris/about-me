
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

var q5 = confirm('Is coding challeging but incredably fun?!')

answer.push(q5);

if(q5){
    alert('Correct! It most certainly is!!';)
}
else{
    alert('You should try it again!');
}
console.log(q5);





