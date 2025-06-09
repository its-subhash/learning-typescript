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

//11d. Create a for loop that counts up from 0 to 10, but counts up by 2 
// (0,2,4, ..., 8,10)

const upByTwo=[]
for (let i=0; i<=10; i+=2){
  upByTwo.push(i)
}
console.log(upByTwo)

//11e. Create a for loop that counts down form 5 to 0
const downTillFive =[]
for (let i=5; i>=0; i--){
  downTillFive.push(i)
}
console.log(downTillFive)

//11f. Do exercises 11d and 11e, but using while loops.
const whileUpByTwo=[]
const whileDownTillFive=[]
let i=0
while (i<=10){
  whileUpByTwo.push(i)
  i+=2
}

let j=5
while (j>=0){
  whileDownTillFive.push(j)
  j--
}
console.log(whileUpByTwo, whileDownTillFive)

//11g. Create a loop that takes an array of numbers and creates a new array where each number is increased by 1.

function increaseByOne (arr){
  for (i=0; i<arr.length; i++){
    arr[i] = arr[i]+1
  }
  return arr
}
let arr=[1,2,3,4]
console.log(increaseByOne(arr))
console.log(arr)

//11h. Create a function addOnd(array) taht takes an array of numbers and returns an array where each number is increased by 1.
// Done already...


//11i. create a function addNum(array, num) that takes an array of numbers and returns an array where each number is increased by 'num'.

function addNum(arr, num){
  for (let i=0; i<arr.length; i++){
    arr[i] = arr[i]+num
  }
  return arr
}
console.log(addNum([1,2,3],2)) //[ 3, 4, 5 ]
console.log(addNum([1,2,3],3)) //[ 4, 5, 6 ]
console.log(addNum([-2, -1, 0, 99],2)) //[ 0, 1, 2, 101 ]


//11j. Create a function addArrays(array1, array2) that takes 2 arrays of numbers and adds each number in the array together.

const addArrays= (arr1, arr2)=>{
  try{
    if(arr1.length != arr2.length){
      console.log("Array lengths does not match")
      return 0
    }else{
      const finalArr=[]
      for (let i=0; i< arr1.length; i++){
        finalArr.push(arr1[i]+arr2[i])
      }
      return finalArr
    }
  }catch(e){
    console.log(e)
    return 0
  }
}

console.log(addArrays([1,1,2],[1,1,3]))
console.log(addArrays([1,2,3],[4,5,6]))
console.log(addArrays([1,2],[2]))
console.log(addArrays([1, 'r', false,()=>"yo"], ["b", true, false,2]))

//11k. Create a function countPositive(nums) that takes an array of numbers and returns how many numbers in the array are greate than 0.

const countPositive=(arr)=>{
  let count=0
  for (let i=0; i<arr.length; i++){
    if (arr[i] > 0){
      count++
    }
  }
  return count
}

console.log(countPositive([1,-3, 5]))
console.log(countPositive([-2, 3, -5, 7, 10]))



// CHALLENGE EXERCISES....


//11l. Create a function minMax(nums) that takes an array of numbers and returns an object with the minimum and maximum numbers in the array (do this using a loop insted of using something like Math.min)

const minMax =(arr)=>{
  let min=arr[0]
  let max=arr[0]
  for (let i=0; i<arr.length; i++){
    if (arr[i]>max){
      max = arr[i]
    } else if (arr[i]<min){
      min = arr[i]
    }
  }
  return `min: ${min}, max: ${max}`
}

console.log(minMax([1,-3,5]))
console.log(minMax([-2, 3, -5, 7, 10]))

//11n. Create a function countWords(words) tahat takes an array of strings and returns an object with how many times each string appreared.

const countWords =(arr) =>{
  countObject={}
  for (let i =0; i<arr.length; i++){
    const word = arr[i]
    if (countObject[word]){
      countObject[word]++
    }else{
      countObject[word] =1
    }
  }
console.log(countObject)
}
countWords(['apple', 'grapes', 'apple', 'banana'])
