const lib = require('./library_file.js');
const assert = require('assert');


//test to separate odd numbers.
const oddNumbers = lib.separateOddNumbers;
assert.deepStrictEqual(oddNumbers([1,2,3,4,5,6]),[1,3,5]);


//test of separate even number program.
const evenNumbers = lib.separateEvenNumbers;
assert.deepStrictEqual(evenNumbers([0,1,2,3,4,5,6,7,8]),[0,2,4,6,8]);


//to calculate sum of an elements of array.
const sum = lib.sum;
assert.deepStrictEqual(sum([1,2,3,0]),6);


//test to reverse the array.
const reverse = lib.reverse;
assert.deepStrictEqual(reverse([2,4,6,8]),[8,6,4,2]);


//to find every second element.
const everySecondNumber = lib.everySecondNumber;
assert.deepStrictEqual(everySecondNumber([1,2,3,4,5,6,7]),[1,3,5,7]);


//test for reverse fibonacci but input should be greater than 1.
const reverseFibonacci = lib.reverseFibonacci;
assert.deepEqual(reverseFibonacci(15),[ 377, 233, 144, 89, 55, 34, 21, 13, 8, 5, 3, 2, 1, 1, 0 ]);


//test for greatest number
const greatestNum = lib.greatestNum;
assert.deepEqual(greatestNum([3,2,5,2,7,6,9,11,2,0]),11);


//test for lowest number
const lowestNum = lib.lowestNum;
assert.deepEqual(lowestNum([5,6,5,4,8,2,7,8]),2);


//test for average of numbers.
const average = lib.average;
assert.deepEqual(average(sum,[2,6,6,4,2]),4);


//test for mapping length.
const mapLength = lib.mapLength;
assert.deepEqual(mapLength(["suman","deepak","1"]),[5,6,1]);


//test for count odd numbers.
const countNumbers = lib.countNumbers;
assert.deepEqual(countNumbers(oddNumbers,[1,2,3,4,5,6,7]),4);


//test for count even numbers.
assert.deepEqual(countNumbers(evenNumbers,[1,2,34,4,5,6,7]),4);


//test for countNumberAbove.
const countNumberAbove = lib.countNumberAbove;
assert.deepEqual(countNumberAbove([1,2,3,4,5,6,7,8],3),5);


//test for countNumberBelow.
const countNumberBelow = lib.countNumberBelow;
assert.deepStrictEqual(countNumberBelow(countNumberAbove,[1,2,3,4,5,6,7],6),5);


//test for reversed array without changing the given array.
const reversedArray = lib.genReverseArray;
assert.deepStrictEqual(reversedArray(reverse,[1,2,3,4,5,6,7,8]),[8,7,6,5,4,3,2,1]);
assert.deepStrictEqual(reversedArray(reverse,[1,2,3,"suman",5,6,7,8]),[8,7,6,5,"suman",3,2,1]);


//to find the first position of specified number.
const position = lib.position;
assert.deepStrictEqual(position([3,4,5,7,1,7,5],1),4);
