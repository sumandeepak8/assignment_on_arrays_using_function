//to separate the odd numbers out of an array.
const separateOddNumbers = function(numbers){
  let indexOfOddNumber = 0;
  let oddNumbers =[];
  for(let index = 0; index < numbers.length; index++){
    if(numbers[index]%2 !=0 ){
      oddNumbers[indexOfOddNumber] = +numbers[index];
      indexOfOddNumber += 1;
    }
  }
  return oddNumbers;
}

//to separate even numbers.
const separateEvenNumbers = function(numbers){
  let indexOfEvenNumber = 0;
  let evenNumbers =[];
  for(let index = 0; index < numbers.length; index++){
    if(numbers[index]%2 ==0 ){
      evenNumbers[indexOfEvenNumber] = +numbers[index];
      indexOfEvenNumber += 1;
    }
  }
  return evenNumbers;
}

//to find the sum of number.
const sumOfNumbersOfList = function(numbersList){
  let sum = 0;
  for(let indexOfListNumbers = 0; indexOfListNumbers < numbersList.length; indexOfListNumbers++){
    sum = sum+numbersList[indexOfListNumbers];
  }
  return sum;
}

// to reverse the given array.
const reverseArray = function(numberArray){
  let reverseNumberArray = [];
  for(let index = 0; index <= numberArray.length-1; index++){
    reverseNumberArray.unshift(numberArray[index]);
  }
  return reverseNumberArray;
}

//to select every second element.
const selectEverySecondNumber = function(numberList){
  let everySecondNumberList = [];
  let indexForEverySecondNumberList = 0;
  for(let index = 0; index < numberList.length; index++){
    if(index%2 ==0){
      everySecondNumberList[indexForEverySecondNumberList] = numberList[index];
      indexForEverySecondNumberList++;
    }
  }
  return everySecondNumberList;
}


// to generate reverse fibonacci.
const genReverseFibonacciSeries = function(number){
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
const averageOfNumbers = function(sumOfNumbersOfList,numbers){
  let average = sumOfNumbersOfList(numbers)/numbers.length;
  return average;
}


//to calculate the length of array elements.
const mappingLength = function(names){
  namesLength = [];
  for(let index = 0; index<names.length; index++){
    namesLength[index] = names[index].length;
  }
  return namesLength;
}


//to count the odd numbers.
const countNumbers = function( reference,numbers){
  let count = reference(numbers).length;
  return count;
}

//to count the numbers the are above to a certain threshold in an array.
const countNumberAbove = function(numbers,number){
  let length = numbers.length;
  let count = 0;
  for(let index = 0; index<length; index++){
    if(numbers[index] > number){
      count++;
    }
  }
  return count;
}

//to count the numbers that are below to a certain threshold in an array.
const countNumberBelow = function(countNumberAbove,numbers,number){
  let  count = numbers.length-countNumberAbove(numbers,number)-1;
  return count;
}

//to find a reversed version of an array without changing the original array.
const genReverseArray = function(reverseArray,numbers){
  return reverseArray(numbers);
}

//to find the first position of a number in a given array.
const findFirstPosition = function(numbers,number){
  let positionOfNumber;
  for(let index = 0; index < numbers.length; index++){
    if(numbers[index] == number){
      positionOfNumber = index;
      numbers.length = 0;
    }
  }
  return positionOfNumber;
}

exports.separateOddNumbers= separateOddNumbers;
exports.separateEvenNumbers = separateEvenNumbers;
exports.sum = sumOfNumbersOfList;
exports.reverse = reverseArray;
exports.everySecondNumber = selectEverySecondNumber;
exports.reverseFibonacci = genReverseFibonacciSeries;
exports.greatestNum = findGreatestNumber;
exports.lowestNum = findLowestNumber;
exports.average = averageOfNumbers;
exports.mapLength = mappingLength;
exports.countNumbers = countNumbers;
exports.countNumberAbove = countNumberAbove;
exports.countNumberBelow = countNumberBelow;
exports.genReverseArray = genReverseArray;
exports.position = findFirstPosition;

