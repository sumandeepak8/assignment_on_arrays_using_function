const isOdd = function(numbers){
  let oddNumbers = [];
  for(let number of numbers){
    if(number%2 != 0){
      oddNumbers.push(number);
    }
  }
  return oddNumbers;
}


// to separate the odd numbers out of an array.
const extractOddNumbers = function(numbers){
  return isOdd(numbers);
}


const isEven = function(numbers) {
  let evenNumbers = [];
  for(let number of numbers){
    if(number%2 == 0){
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}


// to separate even numbers.
const extractEvenNumbers = function(numbers){
  return isEven(numbers);
}

// to find the sum of number.
const calculateSum = function(numbers){
  let sum = 0;
  for(let number of numbers){
    sum = sum+number;
  }
  return sum;
}

// to reverse the given array.
const reverse = function(numbers){
  return numbers.reverse();
}

// to  every second element.
const getEverySecondNumber = function(numbers){
  let numberList = [];
  for(let index = 0; index < numbers.length; index++){
    if(index%2 == 0){
      numberList.push(numbers[index]);
    }
  }
  return numberList;
}


// to generate reverse fibonacci.
const reverseFibonacciSeries = function(number){
  let fiboNumbers = [];
  if(number >0){
    fiboNumbers.unshift(0);
  }
  if(number>1){
    fiboNumbers.unshift(1);
  }
  for(index = 2; index < number; index++){
    fiboNumbers.unshift(fiboNumbers[0]+fiboNumbers[1]);
  }
  return fiboNumbers;
}


// to find greater number in list.
const getGreatestNumber = function(numbers){
  let greatestNumber = numbers[0];
  for(let index = 0; index < numbers.length; index++){
    if( greatestNumber <  numbers[index]){
      greatestNumber = numbers[index];
    }
  }
  return greatestNumber;
}

//to find lowest number.
const getLowestNumber = function(numbers){
  let lowestNumber = numbers[0];
  for(let index = 0; index < numbers.length; index++){
    if( lowestNumber > numbers[index]){
      lowestNumber = numbers[index];
    }
  }
  return lowestNumber;
}


//test for average of the numbers of list.
const average = function(numbers){
  let averageNumber = calculateSum(numbers)/numbers.length;
  return averageNumber;
}


//to calculate the length of array elements.
const mappingLengthOfElements = function(source){
  let elementLengths = [];
  for(element of source){
    elementLengths.push(element.length);
  }
  return elementLengths;
}


// to count the odd numbers.
const countEvenNumbers = function(numbers){
  let count = extractEvenNumbers(numbers).length;
  return count;
}


// to count the even numbers.
const countOddNumbers = function(numbers){
  let count = extractOddNumbers(numbers).length;
  return count;
}


// to count the numbers the are above to a certain threshold in an array.
const countNumbersAboveThreshold = function(numbers,threshold){
  let count = 0;
  for(num of numbers){
    if(num > threshold){
      count++;
    }
  }
  return count;
}


//to count the numbers that are below to a certain threshold in an array.
const countNumbersBelowThreshold = function(numbers,threshold){
  let  count = numbers.length-countNumbersAboveThreshold(numbers,threshold)-1;
  return count;
}

//to find a reversed version of an array without changing the original array.
const generateReverse = function(numbers){
  let numberArray = [];
  for(let number of numbers){
    numberArray.push(number);
  }
  return reverse(numberArray);
}

//to find the first position of a number in a given array.
const getFirstIndex = function(numbers,number){
  let indexOfNumber;
  for(let index = 0; index < numbers.length; index++){
    if(numbers[index] == number){
      indexOfNumber = index;
      numbers.length = 0;
    }
  }
  return indexOfNumber;
}


//to check if the array is in ascending order.
const isAscending = function(numbers){
  let index = 0;
  let numToCompare = numbers[index];
  for(index = 1; (index<numbers.length) && (numToCompare<=numbers[index]); index++){
    numToCompare = numbers[index];
  }
  return (index == numbers.length);
}


//to check the descending order of array.
const isDescending = function(numbers){
  let index = 0;
  let numToCompare = numbers[index];
  for(index = 1; (index<numbers.length) && (numToCompare>=numbers[index]); index++){
    numToCompare = numbers[index];
  }
  return (index == numbers.length);
}

//to extract digits of a number in array.
const extractDigits = function(number){
  let digits = [];
  number = number.toString().split("");
  let length = number.length;
  for(let index = 0; index < length; index++){
    digits[index] = parseInt(number.shift());
  }
  return digits;
}

//to unique the elements of array.
const unique = function(numbers){ 
  let uniqueNumbers = [];
  let index = 0;
  uniqueNumbers[index] = numbers[index]
  for(index = 1; index < numbers.length; index++){
    if(!uniqueNumbers.includes(numbers[index]))
      uniqueNumbers.push(numbers[index]);
  }
  return uniqueNumbers;
}


//to get union of two array.
const getUnion = function(first,second){
  let union = unique(first.concat(second));
  return union;
}


//to get the intersection of two arrays.
const getCommonElements = function(first,second){
  let commonElements = [];
  first = unique(first);
  second = unique(second);
  for( let index = 0; index < second.length; index++){
    if(first.includes(second[index])){
      commonElements.push(second[index]);
    }
  }
  return commonElements;
}


//first array contains and second doesn't.
const difference = function(first,second){
  first = unique(first);
  second = unique(second);
  let elements = [];
  for(let number of first){
    if( !second.includes(number)){
      elements.push(number);
    }
  }
  return elements;
}


//to find if the second array is proper subset of first 
const isSubset = function(array,subsetCandidate){
  array = unique(array);
  subsetCandidate = unique(subsetCandidate);
  let count = 0;
  for( let element of subsetCandidate){
    if(array.includes(element)){
      count += 1;
    }
  }
  return (count == subsetCandidate.length);
}

//to insert elements from two arrays.
const zipArray = function(first,second){
  let zipElements =[];
  for(let index=0; (index<first.length && index<second.length); index++){
    zipElements.push([first[index],second[index]]);
  }
  return zipElements;
}

//to rotate the given array.
const rotate = function(array,times){
  let element;
  for(let index=0; index<times; index++){
    element = array.shift();
    array.push(element);
  }
  return array;
}

//to create a getPartitioned array.
const getPartition = function(array,number) {
  let lessNumber = [];
  let remaining = [];
  let length = array.length;
  for(let index=0; index<length; index++){
    if(array[index]>number){
      remaining.push(array[index]);
      continue;
    }
    lessNumber.push(array[index]);
  }
  array = [];
  array.push(lessNumber);
  array.push(remaining);
  return array; 
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
