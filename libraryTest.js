const assert = require('assert');
const lib = require('./library.js');


//test to separate odd numbers.
const oddNumbers = lib.extractOddNumbers;
assert.deepStrictEqual(oddNumbers([1,2,3,4,5,6]),[1,3,5]);
assert.deepStrictEqual(oddNumbers([0,3,4,[],6]),[3]);
assert.deepEqual(oddNumbers([-1,3,"a",[],null,undefined]),[-1,3]);


//test of separate even number program.
const evenNumbers = lib.extractEvenNumbers;
assert.deepStrictEqual(evenNumbers([0,1,2,3,4,5,6,7,8]),[0,2,4,6,8]);
assert.deepStrictEqual(evenNumbers([0,3,4,7]),[0,4])


//to calculate sum of an elements of array.
const calculateSum = lib.calculateSum;
assert.deepStrictEqual(calculateSum([1,2,3,0]),6);
assert.deepStrictEqual(calculateSum([-1,2,3,null,]),4);


//test to reverse the array.
const reverse = lib.reverse;
assert.deepStrictEqual(reverse([2,4,6,8]),[8,6,4,2]);
assert.deepStrictEqual(reverse([2,"hello",6,null,8]),[8,null,6,"hello",2]);


//to find every second element.
const getEverySecondNumber = lib.getEverySecondNumber;
assert.deepStrictEqual(getEverySecondNumber([1,2,3,4,5,6,7]),[1,3,5,7]);
assert.deepStrictEqual(getEverySecondNumber([1,2,3,null,5,6,undefined]),[1,3,5,undefined]);


//test for reverse fibonacci but input should be greater than 1.
const reverseFibonacciSeries = lib.reverseFibonacciSeries;
assert.deepEqual(reverseFibonacciSeries(15),[ 377, 233, 144, 89, 55, 34, 21, 13, 8, 5, 3, 2, 1, 1, 0 ]);
assert.deepEqual(reverseFibonacciSeries(2),[1,0]); 
assert.deepEqual(reverseFibonacciSeries(1),[0]); 
assert.deepEqual(reverseFibonacciSeries(0),[]); 


//test for greatest number
const getGreatestNumber = lib.getGreatestNumber;
assert.deepEqual(getGreatestNumber([3,2,5,2,7,6,9,11,null,2,0]),11);
assert.deepEqual(getGreatestNumber([3,2,5,Infinity]),Infinity);
assert.deepEqual(getGreatestNumber([3,undefined,5,null]),5);


//test for lowest number
const getLowestNumber = lib.getLowestNumber;
assert.deepEqual(getLowestNumber([5,6,5,4,null,2,7,8]),null);
assert.deepEqual(getLowestNumber([5,4,2,7,0,,]),0);


//test for average of numbers.
const average = lib.average;
assert.deepEqual(average([2,6,4]),4);
assert.deepEqual(average([2,6,0,2,null]),2);
assert.deepEqual(average([0]),0);


//test for mapping length.
const mappingLengthOfElements = lib.mappingLengthOfElements;
assert.deepEqual(mappingLengthOfElements(["suman","deepak","1"]),[5,6,1]);
assert.deepEqual(mappingLengthOfElements(["suman","om",0]),[5,2,undefined]);


//test for count odd numbers.
const countOddNumbers = lib.countOddNumbers;
assert.deepEqual(countOddNumbers([1,2,3,4,5,6,7]),4);
assert.deepEqual(countOddNumbers([0,undefined,7]),1);


//test for count even numbers.
const {countEvenNumbers} = lib;
assert.deepEqual(countEvenNumbers([1,2,34,4,5,6,7]),4);
assert.deepEqual(countEvenNumbers([0,2,34,undefined,5,6,7]),4);


//test for countNumbersAboveThreshold.
const countNumbersAboveThreshold = lib.countNumbersAboveThreshold;
assert.deepEqual(countNumbersAboveThreshold([1,2,3,4,5,6,7,8],3),5);
assert.deepEqual(countNumbersAboveThreshold([6,null,7,0,5,undefined],3),3);


//test for countNumbersBelowThreshold.
const countNumbersBelowThreshold = lib.countNumbersBelowThreshold;
assert.deepStrictEqual(countNumbersBelowThreshold([1,2,3,4,5,6,7],6),5);
assert.deepStrictEqual(countNumbersBelowThreshold([1,2,4,5,6,7],4),2);


//test for reversed array without changing the given array.
const reversedArray = lib.generateReverse;
assert.deepStrictEqual(reversedArray([1,2,3,4,5,6,7,8]),[8,7,6,5,4,3,2,1]);
assert.deepStrictEqual(reversedArray([1,2,3,"suman",5,6,7,8]),[8,7,6,5,"suman",3,2,1]);

//to find the first getFirstIndex of specified number.
const getFirstIndex = lib.getFirstIndex;
assert.deepStrictEqual(getFirstIndex([3,4,5,7,1,7,5],1),4);
assert.deepStrictEqual(getFirstIndex([7,4,6,9,1,2,5],9),3);


//test to check the ascending order of array.
const isAscending = lib.isAscending;
assert.deepStrictEqual(isAscending([1,2,3,4,5,6]),true);
assert.deepStrictEqual(isAscending([1,2,7,4,5,6]),false);
assert.deepStrictEqual(isAscending([1,2,3,5,5,6]),true);

//test to check the descending order of array.
const isDescending = lib.isDescending;
assert.deepStrictEqual(isDescending([1,2,3,4,5,6]),false);
assert.deepStrictEqual(isDescending([8,5,4,2]),true);
assert.deepStrictEqual(isDescending([1,2,3,5,5,6]),false);


//test to extract extractDigits from a number.
const extractDigits = lib.extractDigits;
assert.deepStrictEqual(extractDigits([20981]),[2,0,9,8,1]);
assert.deepStrictEqual(extractDigits([32987]),[3,2,9,8,7]);


//test to remove duplicacy from an array.
const unique = lib.unique;
assert.deepStrictEqual(unique([1,2,3,4,3,5,4,2,6]),[1,2,3,4,5,6]);
assert.deepStrictEqual(unique([7,2,5,7,3,5,4,2,6]),[7,2,5,3,4,6]);
assert.deepStrictEqual(unique([7,2,5,7,3,"suman",4,2,6]),[7,2,5,3,"suman",4,6]);


//test for getUnion of arrays.
const getUnion = lib.getUnion;
assert.deepStrictEqual(getUnion([1,4,5,6,1],["hello",2,3,1,0,1],),[1,4,5,6,"hello",2,3,0]);
assert.deepStrictEqual(getUnion([0,4,5,5,1],["hello",2,3,1,0,1],),[0,4,5,1,"hello",2,3]);


//test to get intersection of two arrays.
const getCommonElements = lib.getCommonElements;
assert.deepStrictEqual(getCommonElements([1,2,3,2,3],[0,,4,2,,1],),[2,1]);
assert.deepStrictEqual(getCommonElements([1,2,3,2,3,0],[0,3,4,2,,1],),[0,3,2,1]);


//test to get difference between two array.
const difference = lib.difference;
assert.deepStrictEqual(difference([2,4,6,8],[0,6],),[2,4,8]);
assert.deepStrictEqual(difference([0,2,4,6,1,8],[0,6,,,,,,,,],),[2,4,1,8]);
assert.deepStrictEqual(difference([0,2,," ",4,6,1,8],[0,6],),[2," ",4,1,8]);

//test if the second array is proper subset of first array.
const isSubset = lib.isSubset;
assert.deepStrictEqual(isSubset([1,2,3,49],[1,49]),true);
assert.deepStrictEqual(isSubset([1,2,"hello",40],[1,49]),false);
assert.deepStrictEqual(isSubset([1,"hello",0,40],[1,"hello",40]),true);


// test to get new array formed by two array.
const zipArray = lib.zipArray;
assert.deepStrictEqual(zipArray([2,5,3],[2,5,3]),[[2,2],[5,5],[3,3]]);
assert.deepStrictEqual(zipArray([2,5,3],[2,5]),[[2,2],[5,5]]);
assert.deepStrictEqual(zipArray([2,"hello",3],[2,5,]),[[2,2],[5,"hello"]]);



// test for rotate array.
const rotate = lib.rotate;
assert.deepStrictEqual(rotate([3,6,7,2,4],2),[7,2,4,3,6]);
assert.deepStrictEqual(rotate([1,2,3,4,5],2),[3,4,5,1,2]);


//test for partioned array.
const {getPartition } =lib 
assert.deepStrictEqual(getPartition([2,3,5,7,1,4],3),[[2,3,1],[5,7,4]]);
assert.deepStrictEqual(getPartition([8,3,5,6,1,4],5),[[3,5,1,4],[8,6]]);

