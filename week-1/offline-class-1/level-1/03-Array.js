// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// shift()
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// unshift()
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);

// map()
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// filter()
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function(item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// find()
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function(item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);




// WITH EXPLANATION - // Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// push() - It adds the element at the end of an array.
const arr = [1,2,3,4];
arr.push(5);
console.log("push-->",arr); // [1,2,3,4,5]

// pop() - It removes the last element from an array.
const arr2 = [1,2,3,4,5];
arr2.pop();
console.log("pop-->", arr2); // [1,2,3,4,5]

// shift() - It removes the element at the start of an array.
const arr3 = [1,2,3,4,5];
arr3.shift();
console.log("shift-->",arr3);

// unshift() - It add the element at the start of an array
const arr4 = [1,2,3,4,5];
arr4.unshift(10);
console.log("unshift-->",arr4);

// splice() - It takes the some part out from an array (and also remove that part from original array); and return that in new array.
// It takes the starting index and the count of numbers to delete.
// And add the all parameters in the array after 2nd parameter.

// splice modified original array
const arr5 = [1,2,3,4,5,6];
const removedValue = arr5.splice(3,5);
console.log("spliceRemoved-->", removedValue)
console.log("arr5-->", arr5);

// slice() - It take the some part out from an array.
// slice does not modify original array
const arr6 = [1,2,3,4,5,6,7,8];
const slicedVal = arr6.slice(2,5);
console.log("slice-->", slicedVal);

// concat() - It combines two array or add values in an array
const arr7 = [1,2,3,4,5];
// const arr8 = [6,7,8,9,10];
const combinedArray = arr7.concat(2,8);
console.log("combinedArr-->", combinedArray);

// forEach() -> It is used to loop through an array. Takes the callback funcion with an each element.
const arr8 = [1,2,3,4,5];
console.log("forEach =>")
arr8.forEach(item => {
    console.log(item)
})