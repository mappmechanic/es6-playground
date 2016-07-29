//Although variable is a misnomer since you can nest patterns as deep as you would like:

var [foo, [[bar], baz]] = [1, [[2], 3]];
console.log(foo);
// 1
console.log(bar);
// 2
console.log(baz);
// 3


//Furthermore, you can skip over items in the array being destructured:

var [,,third] = ["foo", "bar", "baz"];
console.log(third);
// "baz"

//And you can capture all trailing items in an array with a "rest" pattern:

var [head, ...tail] = [1, 2, 3, 4];
console.log(tail);
// [2, 3, 4]


//When you access items in the array that are out of bounds or don't exist, you get the same result you would by indexing: undefined.

console.log([][0]);
// undefined

var [missing] = [];
console.log(missing);
// undefined


/*
Destructuring Objects
 */

var robotA = { name: "Bender" };
var robotB = { name: "Flexo" };

var { name: nameA } = robotA;
var { name: nameB } = robotB;

console.log(nameA);
// "Bender"
console.log(nameB);
// "Flexo"
There is a helpful syntactical shortcut for when the property and variable names are the same:

var { foo, bar } = { foo: "lorem", bar: "ipsum" };
console.log(foo);
// "lorem"
console.log(bar);
// "ipsum"
And just like destructuring on arrays, you can nest and combine further destructuring:

var complicatedObj = {
  arrayProp: [
    "Zapp",
    { second: "Brannigan" }
  ]
};

var { arrayProp: [first, { second }] } = complicatedObj;

console.log(first);
// "Zapp"
console.log(second);
// "Brannigan"
When you destructure on properties that are not defined, you get undefined:

var { missing } = {};
console.log(missing);
// undefined
One potential gotcha you should be aware of is when you are using destructuring on an object to assign variables, but not to declare them (when there is no let, const, or var):

{ blowUp } = { blowUp: 10 };
// Syntax error
This happens because the engine attempts to parse the expression as a block statement (for example, { console } is a valid block statement). The solution is to either wrap the pattern or the whole expression in parenthesis:

({ safe }) = {};
({ andSound } = {});
// No errors

/*
MULTIPLE RETURN ITEMS
 */

function returnMultipleValues() {
  return [1, 2];
}
var [foo, bar] = returnMultipleValues();

// Alternatively, you can use an object as the container and name the returned values:

function returnMultipleValues() {
  return {
    foo: 1,
    bar: 2
  };
}
var { foo, bar } = returnMultipleValues();

// IMPORTING SUBSET OF A MODULE

const { SourceMapConsumer, SourceNode } = require("source-map");