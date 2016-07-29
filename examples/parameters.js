
// Default Values

function assignData(assignor = 'User1',data = {},message) {

}

function multiply(a, b = 1) {
  return a*b;
}

multiply(5); // 5

function setBackgroundColor(element, color = 'rosybrown') {
  element.style.backgroundColor = color;
}

setBackgroundColor(someDiv);            // color set to 'rosybrown'
setBackgroundColor(someDiv, undefined); // color set to 'rosybrown' too
setBackgroundColor(someDiv, 'blue');    // color set to 'blue'

// Default Value evaluated at call time

function append(value, array = []) {
  array.push(value);
  return array;
}

append(1); //[1]
append(2); //[2], not [1, 2]


// REST Parameters

function f(x, ...rest) {
  assert(Array.isArray(rest));
  assert(rest.length === 0);
}
f();


function multiply(multiplier, ...theArgs) {
  return theArgs.map(function (element) {
    return multiplier * element;
  });
}

var arr = multiply(2, 1, 2, 3); 
console.log(arr); // [2, 4, 6]

// The following example shows that you can use Array methods on rest parameters, but not on the arguments object:

function sortRestArgs(...theArgs) {
  var sortedArgs = theArgs.sort();
  return sortedArgs;
}

console.log(sortRestArgs(5,3,7,1)); // shows 1,3,5,7

function sortArguments() {
  var sortedArgs = arguments.sort(); 
  return sortedArgs; // this will never happen
}

// throws a TypeError: arguments.sort is not a function
console.log(sortArguments(5,3,7,1));


// Examples for Spread Operators


//For function calls:

myFunction(...iterableObj);

//For array literals:

[...iterableObj, 4, 5, 6]


//For destructuring:

[a, b, ...iterableObj] = [1, 2, 3, 4, 5];


var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);