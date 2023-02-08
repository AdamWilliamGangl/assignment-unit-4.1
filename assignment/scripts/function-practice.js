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
console.log('Running getLast - should say 1', getLast([3, 2, 6, 3, 8, 2, 1]));
console.log('Running getLast - should say undefined', getLast([]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (value === array[i]) {
      return true;
    }
  }
  return false;
}
console.log('Running find - should say False', find(1, [3, 2, 3, 6, 3, 8, 2, 7]));
console.log('Running find - should say True', find(3, [0, 2, 3, 6, 3, 8, 2, 7]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let str = string.split('');
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
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (x = 0; x < array.length; x++) {
    sum += array[x]
  }
  return sum;
}
console.log('Running sumAll - should say 15', sumAll([1, 2, 3, 4, 5]));
console.log('Running sumAll - should say 30', sumAll([2, 4, 6, 8, 10]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

function positiveArray(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log('Running positiveArray - should read [1,2,3,4,5]', positiveArray([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]))

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
//From CodeWars:
//A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. 
//In this Kata, we will restrict ourselves to decimal (base 10).
//For example, take 153 (3 digits), which is narcissistic:
// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:
// 1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:
// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10. 
// This may be True and False in your language, e.g. PHP.
// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

function narcissistic(num1) {
  let newNarc = Array.from(String(num1), Number); //Create a new array, splitting each digit of the input parameter
  let comparison = []; //Create a new array to place the values from newNarc raised to the power of the Newnarc.length
  let sum = 0; //Create a variable 'sum' for combining the values in the comparison array. This will be used to compare against the original input parameter
  for (let i = 0; i < newNarc.length; i++) {
    comparison.push((newNarc[i] ** newNarc.length))
  }
  console.log('the value of the input number is', num1)
  console.log('NewNarc is equal to', newNarc);
  console.log('Comparison is equal to', comparison);
  for (let x = 0; x < comparison.length; x++) {
    sum += comparison[x]
  }
  console.log('The sum of the individual number, raised to the power of the number of digits is equal to', sum)
  if (sum === num1) {
    return true;
  } else {
    return false;
  }
}
console.log('The result of the function is:', narcissistic(153))
console.log('The result of the function is:', narcissistic(1652))