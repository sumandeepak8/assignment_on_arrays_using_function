// to get the sum of two numbers.
const sum = function(num1,num2){
  return num1+num2;
}
exports.sum = sum;

// to check if the given number is odd.
const isOdd = function(number){
    return (number%2 == 1 || number%2 == -1);
}

// to separate the odd numbers out of an array.
const extractOddNumbers = function(numbers){
  return numbers.filter(isOdd);
}

// to check if the number is even.
const isEven = function(number) {
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

const getLower = function(previous,current){
if(current<previous)
  return current;
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

const isLower = function(element,threshold){
  return element>threshold
}


// to count the numbers the are above to a certain threshold in an array.
const countNumbersAboveThreshold = function(numbers,threshold){
const callBack = function(element){
  return isLower(element,threshold);
}
 return numbers.filter(callBack).length;
}


//to count the numbers that are below to a certain threshold in an array.
const countNumbersBelowThreshold = function(numbers,threshold){
  let  count = numbers.length-countNumbersAboveThreshold(numbers,threshold)-1;
  return count;
}

//to find a reversed version of an array without changing the original array.
const generateReverse = function(numbers){
  const returnElement = function() {
    return true;
  }
  let numberArray = numbers.filter(returnElement);
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
  let initialValue = {cv:numbers[0],result:true};
  const createObject = function(acc,cv){
    if(acc.cv > cv) acc.result = false;
    result = acc.result;
    return {cv,result}
  }
  let boolean = numbers.reduce(createObject,initialValue).result;
  return boolean;
}

//to check the descending order of array.
const isDescending = function(numbers){
  const createObject = function(acc,cv){
    if(acc.cv <cv)acc.result = false;
    result = acc.result ;
    return {cv,result};
  }
  let initialValue = {cv:numbers[0],result:true};
  let boolean = numbers.reduce(createObject,initialValue).result
  return boolean;
}

//to extract digits of a number in array.
const extractDigits = function(number){
  const getDigits = function(element){
    return parseInt(element);
  }
  return number.toString().split("").map(getDigits);
}

//to unique the elements of array.
const unique = function(numbers){ 
  const isIncluded = function(elements,element){
    if(!elements.includes(element))elements.push(element)
    return elements;
  }
  return numbers.reduce(isIncluded,[]);
}


//to get union of two array.
const getUnion = function(first,second){
  return unique(first.concat(second));
}


//to get the intersection of two arrays.
const getCommonElements = function(first,second){
  first = unique(first);
  second = unique(second);
  const isIncluded = function(first,element){
    return first.includes(element);
  }
  return second.filter(function(element){return isIncluded(first,element)});
}


//first array contains and second doesn't.
const difference = function(first,second){
  first = unique(first);
  second = unique(second);
  const isIncluded = function(first,element){
    return !first.includes(element);
  }
  return first.filter(function(element){return isIncluded(second,element)});
}


//to find if the second array is proper subset of first 
const isSubset = function(array,subsetCandidate){
  array = unique(array);
  subsetCandidate = unique(subsetCandidate);
  const isIncluded = function(array,element){
    return (array.includes(element));
  }
  const isTrue = function(element){
    return (element == true);
  }
  return subsetCandidate.map(function(element){return isIncluded(array,element)}).every(isTrue);
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
