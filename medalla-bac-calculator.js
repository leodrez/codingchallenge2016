// Medalla Blood Alcohol Level Calculator
var prompt = require('prompt-sync')();
var gender = prompt('If female type 0, if male type 1 ');
var weight = prompt('Type your weight ');
var medalla = prompt('Number of Medalla\'s consumed ');
var hours = prompt('Hour\'s drinking ');

//
// console.log(gender);
// console.log(weight);
// console.log(medalla);
// console.log(hours);
var result = bac(Number(gender), Number(weight), Number(medalla), Number(hours));
function bac(gender, weight, medalla, hours){

  if (!(typeof gender === 'number') || !(typeof weight === 'number') || !(typeof medalla === 'number') || !(typeof hours === 'number')){
    return null;
  }

  if(gender === '1'){
    return  (medalla * .06 * 100 * 1.055) / (weight * .68) - (0.015 * hours);
  } else{
    return (medalla * .06 * 100 * 1.055) / (weight * .55) - (0.015 * hours);
  }
}


if (result > 0.08){
  console.log('You BAC is: ' + result + ' Pass the key');
} else{
  console.log('Your BAC is: ' + result + ' You can drive');
}
