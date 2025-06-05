//11a. Crae an array of numbers: cons nums= [10,20,30]; Modify the last value in this array and change it to 99.
const nums = [10, 20, 30];
nums[2] = 99;
console.log(nums); //Output: [ 10, 20, 99 ]

//11b. Crate a function getLastValue(array) that takes an array and returns the last value in the array.
const getLastValue = (arr) => arr[arr.length - 1];
console.log(getLastValue(nums));//Output:99

//11c. Create a function arraySwap(array) that takes an array and returns an array where the first and last values are swapped (or switched.)
const arrNum = [1, 2, 4, 5, 8];
const arrStr = ["You", "Marry", "Me", "?", "Will"];

const arraySwap = (arr) => {
  let firstVal = arr[0];
  let lastVal = arr[arr.length - 1];
  arr[0] = lastVal;
  arr[arr.length-1]= firstVal
  return arr
};
console.log(arraySwap(arrNum));//Output:[ 8, 2, 4, 5, 1 ]
console.log(arraySwap(arrStr));//Output:[ 'Will', 'Marry', 'Me', '?', 'You' ]


