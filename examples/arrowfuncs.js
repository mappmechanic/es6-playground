(param1, param2, …, paramN) => { statements }
(param1, param2, …, paramN) => expression
         // equivalent to:  => { return expression; }

// Parentheses are optional when there's only one parameter:
(singleParam) => { statements }
singleParam => { statements }

// A function with no parameters requires parentheses:
() => { statements }


// ES5 Version

function getVerifiedToken(selector) {
  return getUsers(selector)
    .then(function (users) { return users[0]; })
    .then(verifyUser)
    .then(function (user, verifiedToken) { return verifiedToken; })
    .catch(function (err) { log(err.stack); });
}
 

// ES6 Version

function getVerifiedToken(selector) {
  return getUsers(selector)
    .then(users => users[0])
    .then(verifyUser)
    .then((user, verifiedToken) => verifiedToken)
    .catch(err => log(err.stack));
}


// Problem to 'this' being reinitialized with every function 

function Person() {
  var self = this; // Some choose `that` instead of `self`. 
                   // Choose one and be consistent.
  self.age = 0;

  setInterval(function growUp() {
    // The callback refers to the `self` variable of which
    // the value is the expected object.
    self.age++;
  }, 1000);
}

// Solution in ES6

function Person(){
  this.age = 0;

  setInterval(() => {
    this.age++; // |this| properly refers to the person object
  }, 1000);
}

var p = new Person();


// Using Call & Apply methods 

var adder = {
  base : 1,
    
  add : function(a) {
    var f = v => v + this.base;
    return f(a);
  },

  addThruCall: function(a) {
    var f = v => v + this.base;
    var b = {
      base : 2
    };
            
    return f.call(b, a);
  }
};

console.log(adder.add(1));         // This would log to 2
console.log(adder.addThruCall(1)); // This would log to 2 still

// ERRORS

var func = () => {  foo: 1  };               // Calling func() returns undefined!
var func = () => {  foo: function() {}  };   // SyntaxError: function statement requires a name

// Correct Way
var func = () => ({ foo: 1 });