// let example

function func() {
    if (true) {
        let tmp = 123;
    }
    console.log(tmp); // ReferenceError: tmp is not defined
}


// const example

const foo = 'abc';
foo = 'def'; // TypeError

const obj = {};
obj.prop = 123;
console.log(obj.prop); // 123

obj = {}; // TypeError

// If you wanted obj to truly be a constant, you’d have to freeze its value:

const obj = Object.freeze({});
obj.prop = 123; // TypeError


// The temporal dead zone


if (true) { // enter new scope, TDZ starts

    // Uninitialized binding for `tmp` is created
    tmp = 'abc'; // ReferenceError
    console.log(tmp); // ReferenceError

    let tmp; // TDZ ends, `tmp` is initialized with `undefined`
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}


// Time Based and not Space Based

if (true) { // enter new scope, TDZ starts
    const func = function () {
        console.log(myVar); // OK!
    };

    // Here we are within the TDZ and
    // accessing `myVar` causes a ReferenceError

    let myVar = 3; // TDZ ends
    func(); // called outside TDZ
}


// Parameters

 function func(arg) {
        let arg; // static error: duplicate declaration of `arg`
 }