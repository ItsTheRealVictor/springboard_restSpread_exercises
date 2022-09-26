/*
Given this function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
Refactor it to use the rest operator & an arrow function:
Write an ES2015 Version */

const example = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function filterOutOdds(arr) {
  return [...arr].filter((num) => num % 2 === 0);
}
// or according to the solution (same result)
const filterOutOddsFancy = (arr) => [...arr].filter((num) => num % 2 === 0);

// console.log(filterOutOdds(example))
// console.log(filterOutOddsFancy(example))
/**
findMin
Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1
 */

const findMin = (...args) => Math.min(...args);

console.log(findMin(1, 3, 5, 4, -5));

/*
Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
 */

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// console.log(mergeObjects({a:1, b:2}, {c:3, d:4}))

/*
doubleAndReturnArgs
Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8] */

const doubleAndReturnArgs = (arr, ...args) => [
  ...arr,
  ...args.map((elm) => elm * 2),
];

// console.log(doubleAndReturnArgs([1,2,3],4,4)) // [1,2,3,8,8]
// console.log(doubleAndReturnArgs([2],10,4)) // [2, 20, 8]

/*
Slice and Dice!
For this section, write the following functions using rest, spread and refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not modifying the existing inputs.
*/

/* remove a random element in the items array
and return a new array without that item. */

const itemsExample = [1, 2, 3, 4, 5];
const removeRandom = (items) => {
  let index = Math.floor(Math.random() * [...items].length);
  return [...items.slice(0, index), ...items.slice(index + 1)];
};

// console.log(removeRandom(itemsExample))
// console.log(removeRandom(itemsExample))
// console.log(removeRandom(itemsExample))
// console.log(removeRandom(itemsExample))
// console.log(removeRandom(itemsExample))
// console.log(removeRandom(itemsExample))
// console.log(removeRandom(itemsExample))
// console.log(removeRandom(itemsExample))
// console.log(removeRandom(itemsExample))
// console.log(removeRandom(itemsExample))
// console.log(removeRandom(itemsExample))
// console.log(removeRandom(itemsExample))
// console.log(removeRandom(itemsExample))

/** Return a new array with every item in array1 and array2. */

const extend = (arr1, arr2) => [...arr1, ...arr2];
console.log(extend([1, 2], [3, 4, 5, 1]));

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

/** Return a new object with a key removed. */

const removeKey = (obj, key) => ({ [key]: undefined, ...obj });

/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({ ...obj1, obj2 });

/** Return a new object with a modified key and value. */
    
const update = (obj, key, val) => ( { ...obj, [key]: val });
