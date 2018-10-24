// to get the sum of two numbers.
const sum = function(firstNumber,secondNumber){
  return firstNumber+secondNumber;
}

// to check if the given number is odd.
const isOdd = function(number){
  return (number%2 == 1 || number%2 == -1);
}

// to separate the odd numbers out of an array.
const extractOddNumbers = function(numbers){
  return numbers.filter(isOdd);
}

// to check if the number is even.
const isEven = function(number){
  return  (number%2 == 0);
}

// to separate even numbers.
const extractEvenNumbers = function(numbers){
  return numbers.filter(isEven);
}

// to find the sum of number.
const calculateSum = function(numbers){
  return numbers.reduce(sum,0);
}

// to reverse the given array.
const reverse = function(numbers){
  return numbers.reverse();
}

// to check if the element is at second position from the last second element.
const isSecondElement = function(number,index){
  return (index%2 == 0)
}

// to get every second element.
const getEverySecondNumber = function(numbers){
  return numbers.filter(isSecondElement);
}

const fibonacciElement = function(result){
  result.unshift(result[0]+result[1]);
  return result;
}

// to generate reverse fibonacci.
const reverseFibonacciSeries = function(number){
  if(number == 0){
    return [];
  }
  if(number == 1){
    return [0];
  }
  let array = Array(number-2).fill(1);
  return array.reduce(fibonacciElement,[1,0])
}


// to check if the current number is greater than the last greatest number.
const getGreater = function(previous,current){
  if(previous>current){
    return previous;
  }
  return current;
}

// to find greater number in list.
const getGreatestNumber = function(numbers){
  return numbers.reduce(getGreater); 
}

// getLower function for getLowestNumber.
const getLower = function(previous,current){
  if(current<previous){
    return current;
  }
  return previous;
}

//to find lowest number.
const getLowestNumber = function(numbers){
  return numbers.reduce(getLower); 
}

//test for average of the numbers of list.
const average = function(numbers){
  return calculateSum(numbers)/numbers.length;
}

//to calculate the length of array elements.
const mappingLengthOfElements = function(source){
  const calcLength = function(element) {
    return element.length;
  }
  return source.map(calcLength);
}


// to count the odd numbers.
const countEvenNumbers = function(numbers){
  return extractEvenNumbers(numbers).length;
}


// to count the even numbers.
const countOddNumbers = function(numbers){
  return extractOddNumbers(numbers).length;
}

// callback function for countNumbersAboveThreshold.
const isAbove = function(threshold){
  return function(element){
    return element>threshold
  }
}

// to count the numbers the are above to a certain threshold in an array.
const countNumbersAboveThreshold = function(numbers,threshold){
  return numbers.filter(isAbove(threshold)).length;
}

//to count the numbers that are below to a certain threshold in an array.
const countNumbersBelowThreshold = function(numbers,threshold){
  return numbers.length-countNumbersAboveThreshold(numbers,threshold)-1;
}

const returnSameElement = function(){
  return true;
}

//to find a reversed version of an array without changing the original array.
const generateReverse = function(numbers){
  return reverse(numbers.filter(returnSameElement));
}

//to find the first position of a number in a given array.
const getFirstIndex = function(numbers,number){
  return numbers.indexOf(number);
}

const isAscendingCallBackFunc = function(accumulator,element){
  if(accumulator.element > element) accumulator.result = false;
  result = accumulator.result;
  return {element,result}
}

//to check if the array is in ascending order.
const isAscending = function(numbers){
  const initialValue = {element:numbers[0],result:true};
  return numbers.reduce(isAscendingCallBackFunc,initialValue).result;
}

//to check the descending order of array.
const isDescending = function(numbers){
  return isAscending(reverse(numbers));
}

const getDigits = function(element){
  return parseInt(element);
}

//to extract digits of a number in array.
const extractDigits = function(number){
  return number.toString().split("").map(getDigits);
}

const getUniqueElement = function(elements,element){
  if(!elements.includes(element))elements.push(element)
  return elements;
}

//to unique the elements of array.
const unique = function(numbers){ 
  return numbers.reduce(getUniqueElement,[]);
}

//to get union of two array.
const getUnion = function(first,second){
  return unique(first.concat(second));
}


const isCommon = function(uniqueFirst){
  return function(element){
  return uniqueFirst.includes(element);
}
}

//to get the intersection of two arrays.
const getCommonElements = function(first,second){
  let uniqueFirst = unique(first);
  let uniqueSecond = unique(second);
  return uniqueSecond.filter(isCommon(uniqueFirst));
}

// callback function to get the difference between two arrays.
const isOnlyInFirst = function(common) {
  return function (element){
    return !common.includes(element);
  }
}

//first array contains and second doesn't.
const difference = function(first,second){
  let common = getCommonElements(first,second);
  return first.filter(isOnlyInFirst(common));
}

// callback function for isSubset function.
const isIncludes = function(set){
  return function(result,element){
    return (result && set.includes(element));
  }
}

//to find if the second array is proper subset of first 
const isSubset = function(array,subsetCandidate){
  let set = unique(array);
  let subset = unique(subsetCandidate);
  return subset.reduce(isIncludes(set),true);
}

const getZipElement = function(numbers){
  return function(zip,element){
    zip.push([element,numbers.shift()]);
    return zip;
  }
}

//to insert elements from two arrays.
const zipArray = function(first,second){
  if(first.length > second.length){
    return second.reduce(getZipElement(first.slice(0,first.length)),[]);
  }
  return first.reduce(getZipElement(second.slice(0,second.length)),[]);
}

//to rotate the given array.
const rotate = function(array,times){
  return array.slice(times,array.length).concat(array.slice(0,times));
}

// callback function for getPartition.
const partition = function(number){
  return function(result,element){
    if(element>number) {
      result[1].push(element)
      return result
    }
    result[0].push(element);
    return result;
  }
}

//to create a getPartitioned array.
const getPartition = function(array,number) {
  return array.reduce(partition(number),[[],[]])
}


exports.extractOddNumbers = extractOddNumbers;
exports.extractEvenNumbers = extractEvenNumbers;
exports.calculateSum = calculateSum;
exports.reverse = reverse;
exports.getEverySecondNumber = getEverySecondNumber;
exports.reverseFibonacciSeries = reverseFibonacciSeries;
exports.getGreatestNumber= getGreatestNumber;
exports.getLowestNumber = getLowestNumber;
exports.average = average;
exports.mappingLengthOfElements = mappingLengthOfElements;
exports.countEvenNumbers = countEvenNumbers;
exports.countOddNumbers = countOddNumbers;
exports.countNumbersAboveThreshold = countNumbersAboveThreshold;
exports.countNumbersBelowThreshold = countNumbersBelowThreshold;
exports.generateReverse = generateReverse;
exports.getFirstIndex = getFirstIndex;
exports.isAscending = isAscending;
exports.isDescending = isDescending;
exports.extractDigits = extractDigits;
exports.unique = unique;
exports.getUnion = getUnion;
exports.getCommonElements = getCommonElements;
exports.difference = difference;
exports.isSubset = isSubset;
exports.zipArray = zipArray;
exports.rotate = rotate;
exports.getPartition = getPartition;
