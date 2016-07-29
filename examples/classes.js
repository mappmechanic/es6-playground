
// Example Code

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return '(' + this.x + ', ' + this.y + ')';
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
    toString() {
        return super.toString() + ' in ' + this.color;
    }
}

let cp = new ColorPoint(25, 8, 'green');
cp.toString(); // '(25, 8) in green'

console.log(cp instanceof ColorPoint); // true
console.log(cp instanceof Point); // true
console.log(typeof Point)  // 'function'

// Class Expressions

var Vehicle = class {
}
 
var Vehicle = class VehicleClass {
  constructor() {
    // VehicleClass is only available inside the class itself
  }
}
 
console.log(VehicleClass); // throws an exception


// Different Methods in Classes

 class Foo {
        constructor(prop) {
            this.prop = prop;
        }
        static staticMethod() {
            return 'classy';
        }
        prototypeMethod() {
            return 'prototypical';
        }
    }
    let foo = new Foo(123);


// Getters and Setters

    class MyClass {
        get prop() {
            return 'getter';
        }
        set prop(value) {
            console.log('setter: '+value);
        }
    }

 /*
     > let inst = new MyClass();
    > inst.prop = 123;
    setter: 123
    > inst.prop
    'getter'
  */
 

 class MyArray extends Array {
        constructor(len) {
            super(len);
        }
    }
    
    // Instances of of `MyArray` work like real arrays:
    let myArr = new MyArray(0);
    console.log(myArr.length); // 0
    myArr[0] = 'foo';
    console.log(myArr.length); // 1