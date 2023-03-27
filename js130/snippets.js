/*eslint-disable */

/*

Written questions:

build your own forEach method that takes the array as its
first argument

What do we mean by declared scope? Code an example

What do we mean by visibility scope? Code an example

What do we mean by lexical scope? Code an example

What is hoisting? Code an example 

How do var, let, and const interact with hoisting? How do they differ? 
Code examples 

How do functions and classes interact with hoisting? How do they differ?

What is strict mode? How does it differ from sloppy mode?

What are the benefits of strict mode?
*/

/*

When should you use (or not use) strict mode?

What is a closure? Provide an example. 

What is the relationship between closures and scope? 

What is partial function application?
Code an example if you wish.

Explain why private data is desirable




What are IIFEs? Code an example

How do you use IIFEs?

You can use IIFEs to create inner scopes in large codebases and so 
avoid accidentally reassigning variables that might be used in that codebase.

How do you use IIFEs to create private scopes?
Code an example


How do you use blocks to create private scopes?
Code an example

How do you use IIFEs to create private data?
Code an example

Code snippets:

1) What do the three log calls below log?
*/

// var bar = 42;
// console.log(global.bar); 
// bar += 1;
// console.log(global.bar); 

// let foo = 86;
// console.log(global.foo);

/*
---------------------------------------------------------------------------


2) What will the following log?

function foo() {
  if (true) {
    var a = 1;
    let b = 2;
  }

  console.log(a);  
  console.log(b);
}

foo();
------------------------------------------------------------------------------

3) What will the following log?

function foo() {
  if (false) {
    var a = 1;
  }

  console.log(a);
}

foo();

-------------------------------------------------------------------------------

4) What is the declared scope of every identifier in the code
below?

let foo1 = 1;
var bar1 = 2;

if (true) {
  let foo2 = 3;
  var bar2 = 4;
}

function xyzzy() {
  let foo3 = 5;
  var bar3 = 6;

  if (true) {
    let foo4 = 7;
    var bar4 = 8;
  }
}

-------------------------------------------------------------------

5) What is the visibility scope of every identifier
in the code below?

let foo1 = 1;
var bar1 = 2;

if (true) {
  let foo2 = 3;
  var bar2 = 4;
}

function xyzzy() {
  let foo3 = 5;
  var bar3 = 6;

  if (true) {
    let foo4 = 7;
    var bar4 = 8;
  }
}


---------------------------------------------------------------
6) What is the lexical scope of every identifier in the code below?

let foo1 = 1; 

if (true) {
  let foo2 = 3;
}

function xyzzy() {
  let foo3 = 5;

  if (true) {
    let foo4 = 7;
  }
}

------------------------------------------------------------------------------
7) What is the lexical scope of every identifier in the code below?

var bar1 = 1; 

if (true) {
  var bar2 = 3; 
}

function xyzzy() { 
  var bar3 = 5;

  if (true) {
    var bar4 = 7;
  }
}

--------------------------------------------------------------------------------
8) What does this code look like after being hoisted?

console.log(getName());

function getName() {
  return "Pete";
}

-------------------------------------------------------------------------------

9) What does JavaScript log below?

console.log(bar);
var bar = 3;
console.log(bar);

-----------------------------------------------------------------------

10) What does JavaScript log below? ( CONT) 

console.log(foo);
let foo;

--------------------------------------------------------------------------
11) What does JavaScript log below?

console.log(qux);
const qux = 42;

------------------------------------------------------------------------------

12) What does the following code log?

console.log(baz); 

---------------------------------------------------------------------------

13) What is the hoisted version of the following code?

console.log(hello());

function hello() {
  return 'hello world';
}

----------------------------------------------------------------------------

14) Post the hoisted version of this code

console.log(hello());

var hello = function () {
  return 'hello world';
};

--------------------------------------------------------------------------

15) Post the hoisted version of this code:

bar();
var bar = 'hello';

function bar() {
  console.log('world');
}

--------------------------------------------------------------------------------

16) Post the hoisted version of this code:

var bar = 'hello';
bar();            

function bar() {
  console.log('world');
}

------------------------------------------------------------------------------

17) What is the hoisted version of this code?

bar();              
var foo = 'hello';

function bar() {
  console.log(foo);
}

-----------------------------------------------------------

18) What happens if you run this code?

let foo = "hello";

function foo() {
  console.log("hello");
}



------------------------------------------------------------------------------

19) Do all the problems at "Practice Problemns: Hoisting and the var Statement"
https://launchschool.com/lessons/43f23069/assignments/39f50f91

------------------------------------------------------------------------------

20) What will happen when this code runs?

"use strict";

function foo() {
  bar = 3.1415;

foo();
console.log(bar);

----------------------------------------------------------------

21) What will happen when this code runs?

"use strict";

let obj = {
  a: 5,
  go() {
    this.a = 42;
  },
};

let doIt = obj.go;
doIt();
console.log(obj.a);

-------------------------------------------------------------------

22) What happens when this code is run?

"use strict";

function Child(age) {
  this.age = age;
};

Child.prototype.setAge = function(newAge) {
  age = newAge;
}

let leigh = new Child(5);
leigh.setAge(6);
console.log(leigh.age);

----------------------------------------------------------

23) What will this code output?

"use strict";

console.log(1234567);
console.log(0);
console.log(0.123);
console.log(-0.123);
console.log(01234567); // error - number begins with 0
console.log(089); // error - number begins with 0 
console.log(01.23); // error - number begins with 0
console.log(-01234567); // same as above but negative still error 
console.log(-089); // same as bove 
console.log(-01.23);

-------------------------------------------------

24) Practice problem at the end of this gist:
https://launchschool.com/gists/406ba491

-------------------------------------------------------------------------

25) Without running the code below, what will be logged?
function container() {
  let name = 'riz';
  function inner() {
    return name;
  }
  return inner;
}

let returnedFunc = container();
let name = 'Daniel';
console.log(returnedFunc());

--------------------------------------------------

26) What will the following code log?

function makeCounter() {
  let counter = 0;

  return function() {
    counter += 1;
    return counter;
  }
}

let incrementCounter1 = makeCounter();
let incrementCounter2 = makeCounter();

console.log(incrementCounter1());
console.log(incrementCounter1());
console.log(incrementCounter1());
console.log(incrementCounter2());
console.log(incrementCounter2());
console.log(incrementCounter1());

------------------------------------------

27) Is this partial function application? why/why not?

function makeLogger(identifier) {
  return function(msg) {
    console.log(identifier + ' ' + msg);
  };
}

---------------------------------------------

28) Is this partial function application? why/why not?

function makeLogger(identifier) {
  return function(msg) {
    console.log(identifier, msg);
  };
}

-------------------------------------------------------------------

29) Practice problems: closures at
https://launchschool.com/lessons/43f23069/assignments/9362d2cf


---------------------------------------------------

30) Private data practice problems at:
https://launchschool.com/lessons/43f23069/assignments/3df10c91


-------------------------------------------------------------

31) 
practice problems at https://launchschool.com/lessons/43f23069/assignments/a200fbec

-------------------------------------------------------------

32) List the side effects in the function below:

function insertNumberInOrder(arrayOfNumbers) {
  arrayOfNumbers = arrayOfNumbers.slice();
  arrayOfNumbers.push(arrayOfNumbers); //
  arrayOfNumbers.sort((a, b) => a - b); //
  return arrayOfNumbers; //

*/

/*eslint-enable */