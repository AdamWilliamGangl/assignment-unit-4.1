console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return 'Hello' + ' ' + (name);
}
// Remember to call the function to test
helloName('Tony');
console.log(helloName('Tony'));


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  // return firstNumber + secondNumber;
  let result = firstNumber + secondNumber;
  return result;
}
console.log('Running addNumbers with 8 and 12', addNumbers(8, 12));
console.log('Running addNumbers with 1 and 2', addNumbers(1, 2));


// 4. Function to multiply three numbers & return the result
function multiplyThree(valueOne, valueTwo, valueThree) {
  let sum = valueOne * valueTwo * valueThree;
  return sum;

}
console.log('Running multiplyThree with 2, 3, 4', multiplyThree(2, 3, 4));
console.log('Running multiplyThree with 5, 6, 7', multiplyThree(5, 6, 7));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  }
  else
    return false;
}
// Call the function to test each outcome (true & false)
console.log('isPositive - should say true', isPositive(801));
console.log('isPositive - should say false', isPositive(-45));
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  return array[array.length - 1];

}
console.log('Running getLast - should say 9', getLast([3, 1, 4, 1, 5, 9]));
console.log('Running getLast - should say 7', getLast([3, 2, 6, 3, 8, 2, 7]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
    else if (value !== array[i]) {
      return false;
    }
  }
}
console.log('Running find - should say False', find(1, [3, 2, 3, 6, 3, 8, 2, 7]));
console.log('Running find - should say True', find(3, [3, 2, 3, 6, 3, 8, 2, 7]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
let str=string.split('');
for (let i = 0; i < str.length; i++) {
  if (letter == str[i]) {
    return true;
  }
  else if (letter !== str[i]) {
    return false;
  }
}
}
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// 9. Function to return the sum of all numbers in an array
function sumAll() {
  let sum = 0
  // TODO: loop to add items
  return sum;
}

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.



// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
