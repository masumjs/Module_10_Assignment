//1). Write a function named ‘calculateSum’ that takes two arguments and returns their sum.
function calculateSum(a, b) {
  let sum = a + b;
  return sum;
}
//console.log(calculateSum(20, 30));

//2). Write a function named ‘isEven’ that takes one argument and returns true if the number is even, and false otherwise.
function isEven(num) {
  return num % 2 === 0;
}
/*console.log(isEven(11));
console.log(isEven(100));
console.log(isEven(-8));*/

//3). Write a function named ‘findMax’ that takes an array of numbers and returns the largest number in the array.
const findMax = (number) =>
  number.reduce((acc, number) => (number > acc ? number : acc), number[0]);

//console.log(findMax([222, 33, 40, 55, 70, 500, 200,]));

//4). Write a function named ‘reverseString’ that takes a string and returns the string reversed.
let reverseString = (str) => str.split("").reverse().join("");
//console.log(reverseString("I Love Bangladesh"));

//5). Write a function named ‘filterOddNumbers’ that takes an array of numbers and returns a new array containing only the odd numbers.
const filterOddNumbers = (nums) =>
  nums.filter((num) => (num % 2 !== 0 ? true : false));
//console.log(filterOddNumbers([1, 5, 9, 2, 4, 45, 25, -333,]));

//6). Write a function named ‘sumArray’ that takes an array of numbers and returns the sum of all elements.
const sumArray = (nums) => nums.reduce((acc, num) => acc + num, 0);
//console.log(sumArray([1, 5, 9, 2, 4, 45, 25, 88, 35]));

//7). Write a function named ‘sortArray’ that takes an array of numbers and returns a new array sorted in ascending order.
const sortArray = (nums) => nums.sort((a, b) => a - b);
//console.log(sortArray([22, 40, 55, 70, 50, 88, 90, 33]));

//8). Write a function named ‘capitalizeFirstLetter’ that takes a string and returns the same string with the first letter capitalized. Ex-  console.log(capitalizeFirstLetter("hello"));  // Output:  "Hello"
const capitalizeFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);
//console.log(capitalizeFirstLetter("hello"));
