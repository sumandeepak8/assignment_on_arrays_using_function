const assert = require('assert');
const lib = require('./library_file.js');


//test to separate odd numbers.
const oddNumbers = lib.extractOddNumbers;
assert.deepStrictEqual(oddNumbers([1,2,3,4,5,6]),[1,3,5]);


//test of separate even number program.
const evenNumbers = lib.extractEvenNumbers;
assert.deepStrictEqual(evenNumbers([0,1,2,3,4,5,6,7,8]),[0,2,4,6,8]);


//to calculate sum of an elements of array.
const sum = lib.sum;
assert.deepStrictEqual(sum([1,2,3,0]),6);


//test to reverse the array.
const reverse = lib.reverse;
assert.deepStrictEqual(reverse([2,4,6,8]),[8,6,4,2]);


//to find every second element.
const number = lib.number;
assert.deepStrictEqual(number([1,2,3,4,5,6,7]),[1,3,5,7]);


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
assert.deepEqual(average([2,6,6,4,2]),4);
assert.deepEqual(average([2,6,0,2,2,0]),2);


//test for mapping length.
const mapLength = lib.mapLength;
assert.deepEqual(mapLength(["suman","deepak","1"]),[5,6,1]);


//test for count odd numbers.
const countOddNumbers = lib.countOddNumbers;
assert.deepEqual(countOddNumbers([1,2,3,4,5,6,7]),4);


//test for count even numbers.
const {countEvenNumbers} = lib;
assert.deepEqual(countEvenNumbers([1,2,34,4,5,6,7]),4);


//test for countNumberAbove.
const countNumberAbove = lib.countNumberAbove;
assert.deepEqual(countNumberAbove([1,2,3,4,5,6,7,8],3),5);
assert.deepEqual(countNumberAbove([6,9,7,3,5,1,7,8],3),6);


//test for countNumberBelow.
const countNumberBelow = lib.countNumberBelow;
assert.deepStrictEqual(countNumberBelow([1,2,3,4,5,6,7],6),5);
assert.deepStrictEqual(countNumberBelow([1,2,4,5,6,7],4),2);


//test for reversed array without changing the given array.
const reversedArray = lib.genReverse;
assert.deepStrictEqual(reversedArray([1,2,3,4,5,6,7,8]),[8,7,6,5,4,3,2,1]);
assert.deepStrictEqual(reversedArray([1,2,3,"suman",5,6,7,8]),[8,7,6,5,"suman",3,2,1]);

//to find the first position of specified number.
const position = lib.position;
assert.deepStrictEqual(position([3,4,5,7,1,7,5],1),4);
assert.deepStrictEqual(position([7,4,6,9,1,2,5],9),3);


//test to check the ascending order of array.
const ascendingOrder = lib.ascendingOrder;
assert.deepStrictEqual(ascendingOrder([1,2,3,4,5,6]),true);
assert.deepStrictEqual(ascendingOrder([1,2,7,4,5,6]),false);
assert.deepStrictEqual(ascendingOrder([1,2,3,5,5,6]),true);

//test to check the descending order of array.
const descendingOrder = lib.descendingOrder;
assert.deepStrictEqual(descendingOrder([1,2,3,4,5,6]),false);
assert.deepStrictEqual(descendingOrder([8,5,4,2]),true);
assert.deepStrictEqual(descendingOrder([1,2,3,5,5,6]),false);


//test to extract digits from a number.
const digits = lib.digits;
assert.deepStrictEqual(digits([20981]),[2,0,9,8,1]);
assert.deepStrictEqual(digits([32987]),[3,2,9,8,7]);


//test to remove duplicacy from an array.
const unique = lib.unique;
assert.deepStrictEqual(unique([1,2,3,4,3,5,4,2,6]),[1,2,3,4,5,6]);
assert.deepStrictEqual(unique([7,2,5,7,3,5,4,2,6]),[7,2,5,3,4,6]);
assert.deepStrictEqual(unique([7,2,5,7,3,"suman",4,2,6]),[7,2,5,3,"suman",4,6]);


//test for union of arrays.
const union = lib.union;
assert.deepStrictEqual(union([1,4,5,6,1],["hello",2,3,1,0,1],),[1,4,5,6,"hello",2,3,0]);
assert.deepStrictEqual(union([0,4,5,5,1],["hello",2,3,1,0,1],),[0,4,5,1,"hello",2,3]);


//test to get intersection of two arrays.
const common = lib.common;
assert.deepStrictEqual(common([1,2,3,2,3],[0,,4,2,,1],),[2,1]);
assert.deepStrictEqual(common([1,2,3,2,3,0],[0,3,4,2,,1],),[0,3,2,1]);


//test to get diffence between two array.
const diff = lib.diff;
assert.deepStrictEqual(diff([2,4,6,8],[0,6],),[2,4,8]);
assert.deepStrictEqual(diff([0,2,4,6,1,8],[0,6,,,,,,,,],),[2,4,1,8]);
assert.deepStrictEqual(diff([0,2,," ",4,6,1,8],[0,6],),[2,undefined," ",4,1,8]);

//test if the second array is proper subset of first array.
const isSubset = lib.isSubset;
assert.deepStrictEqual(isSubset([1,2,3,49],[1,49]),true);
assert.deepStrictEqual(isSubset([1,2,"hello",40],[1,49]),false);
assert.deepStrictEqual(isSubset([1,"hello",0,40],[1,"hello",40]),true);


// test to get new array formed by two array.
const zipArrays = lib.zipArrays;
assert.deepStrictEqual(zipArrays([2,5,3],[2,5,3]),[[2,2],[5,5],[3,3]]);
assert.deepStrictEqual(zipArrays([2,5,3],[2,5]),[[2,2],[5,5]]);
assert.deepStrictEqual(zipArrays([2,"hello",3],[2,5,]),[[2,2],["hello",5]]);



// test for rotate array.
const rotate = lib.rotate;
assert.deepStrictEqual(rotate([3,6,7,2,4],2),[7,2,4,3,6]);
assert.deepStrictEqual(rotate([1,2,3,4,5],2),[3,4,5,1,2]);


//test for partioned array.
const {partition } =lib 
assert.deepStrictEqual(partition([2,3,5,7,1,4],3),[[2,3,1],[5,7,4]]);
assert.deepStrictEqual(partition([8,3,5,6,1,4],5),[[3,5,1,4],[8,6]]);

