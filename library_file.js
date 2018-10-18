const isOdd = function(numbers){
  let oddNumbers = [];
  for(number of numbers){
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
  for(number of numbers){
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
  for(number of numbers){
    sum = sum+number;
  }
  return sum;
}

// to reverse the given array.
const reverseArray = function(numbers){
  return numbers.reverse();
}

// to  every second element.
const everySecondNumber = function(numbers){
  let numberList = [];
  for(let index = 0; index < numbers.length; index++){
    if(index%2 == 0){
      numberList.push(numbers[index]);
    }
  }
  return numberList;
}


// to generate reverse fibonacci.
const reverseFibonacci = function(number){
  let fiboNumbers = [];
  fiboNumbers[1] = 0;
  fiboNumbers[0] = 1;
  for(index = 2; index < number; index++){
    fiboNumbers.unshift(fiboNumbers[0]+fiboNumbers[1]);
  }
  return fiboNumbers;
}


// to find greater number in list.
const findGreatestNumber = function(numbers){
  let greatestNumber = numbers[0];
  for(let index = 0; index < numbers.length; index++){
    if( greatestNumber <  numbers[index]){
      greatestNumber = numbers[index];
    }
  }
  return greatestNumber;
}

//to find lowest number.
const findLowestNumber = function(numbers){
  let lowestNumber = numbers[0];
  for(let index = 0; index < numbers.length; index++){
    if( lowestNumber >  numbers[index]){
      lowestNumber = numbers[index];
    }
  }
  return lowestNumber;
}

//test for average of the numbers of list.
const average = function(numbers){
  let average = calculateSum(numbers)/numbers.length;
  return average;
}



//to calculate the length of array elements.
const mappingLength = function(source){
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
const countNumberAbove = function(numbers,number){
  let count = 0;
  for(num of numbers){
    if(num > number){
      count++;
    }
  }
  return count;
}
//to count the numbers that are below to a certain threshold in an array.
const countNumberBelow = function(numbers,number){
  let  count = numbers.length-countNumberAbove(numbers,number)-1;
  return count;
}

//to find a reversed version of an array without changing the original array.
const genReverseArray = function(numbers){
  let reverse = [];
  for(number of numbers){
    reverse.push(number);
  }
  return reverseArray(reverse);
}

//to find the first position of a number in a given array.
const findFirstIndex = function(numbers,number){
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
const toCheckOrder = function(numbers){
  let index = 0;
  let numToCompare = numbers[index];
  for(index = 1; (index<numbers.length) && (numToCompare<=numbers[index]); index++){
    numToCompare = numbers[index];
  }
  return (index == numbers.length);
}

//to check the descending order of array.
const checkDescendingOrder = function(numbers){
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
const unite = function(first,second){
 let union = unique(first.concat(second));
  return union;
}


//to get the intersection of two arrays.
const getIntersection = function(first,second){
  let common = [];
  first = unique(first);
  second = unique(second);
  for( let index = 0; index < second.length; index++){
    if(first.includes(second[index])){
      common.push(second[index]);
    }
  }
  return common;
}


//first array contains and second doesn't.
const difference = function(first,second){
  first = unique(first);
  second = unique(second);
  let diff = [];
  for(number of first){
    if( !second.includes(number)){
      diff.push(number);
    }
  }
  return diff;
}

//to find if the second array is proper subset of first 
const isSubset = function(array,subsetCandidate){
  array = unique(array);
  subsetCandidate = unique(subsetCandidate);
  let count = 0;
  for( element of subsetCandidate){
    if(array.includes(element)){
      count += 1;
    }
  }
  return (count == subsetCandidate.length);
}

//to insert elements from two arrays.
const zipArrays = function(first,second){
  let zipNumbers =[];
  for(let index=0; (index<first.length && index<second.length); index++){
    zipNumbers.push([first[index],second[index]]);
  }
  return zipNumbers;
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

//to create a partitioned array.
const partition = function(array,number) {
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



exports.extractOddNumbers= extractOddNumbers;
exports.extractEvenNumbers = extractEvenNumbers;
exports.sum = calculateSum;
exports.reverse = reverseArray;
exports.number = everySecondNumber;
exports.reverseFibonacci = reverseFibonacci;
exports.greatestNum = findGreatestNumber;
exports.lowestNum = findLowestNumber;
exports.average = average;
exports.mapLength = mappingLength;
exports.countEvenNumbers = countEvenNumbers;
exports.countOddNumbers = countOddNumbers;
exports.countNumberAbove = countNumberAbove;
exports.countNumberBelow = countNumberBelow;
exports.genReverse = genReverseArray;
exports.position = findFirstIndex;
exports.ascendingOrder = toCheckOrder;
exports.descendingOrder = checkDescendingOrder;
exports.digits = extractDigits;
exports.unique = unique;
exports.union = unite;
exports.common = getIntersection;
exports.diff = difference;
exports.isSubset = isSubset;
exports.zipArrays = zipArrays;
exports.rotate = rotate;
exports.partition = partition;
