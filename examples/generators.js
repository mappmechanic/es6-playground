function *foo() {
    yield 1;
    return 2;
}

var it = foo();

console.log( it.next() ); // { value:1, done:false }
console.log( it.next() ); // { value:2, done:true }

// Ways to create a Generator Function

//Via a generator function declaration:

    function* genFunc() { ··· }
    let genObj = genFunc();

//Via a generator function expression:

    const genFunc = function* () { ··· };
    let genObj = genFunc();
//Via a generator method definition in an object literal:

    let obj = {
        * generatorMethod() {
            ···
        }
    };
    let genObj = obj.generatorMethod();

//Via a generator method definition in a class definition (which can be a class declaration or a class expression [11]):

    class MyClass {
        * generatorMethod() {
            ···
        }
    }
    let myInst = new MyClass();
    let genObj = myInst.generatorMethod();