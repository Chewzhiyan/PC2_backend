/* //var x = 12;  
let x = 12; 
// can assign any value to the variable

x = "Zhi Yan"; 

console.log("My message"); 
// print whatever message that pass inside the () onto terminal window

console.log(x);
// print variable
 */
/* console.log(`Value of x: ${x}`);
// backclick `` for message, ${} for the variable
console.log("Value of x: " + x); */

/* let x = 12;
let y = 3;

console.log(
  "Value of x: " + x + ", Value of y: " + y + ", and " + x + "/" + y + " = ",
  +(x / y)
);

console.log(`Value of x: ${x}, Value of y: ${y}, and ${x}/${y} = ${x / y}`); */

/* let age = 19;
if (age > 18) {
    console.log("You can vote!");
} else {
    console.log("You cannot vote right now.");
}
//conditional statements */

// set function
// function <name of function>(<parameters>)
// call function
// <name of function>(<value of parameters)

/* function print_sum(a, b) {
    console.log(`a: ${a}`);
    console.log(`b: ${b}`);
  
    console.log(`a + b = ${a + b}`);
  }
  
  print_sum(2, 3); */

/*   function add(a, b) {
    return a + b;
  }
  
  var sum = add(2, 3);
  
  console.log(`Sum: ${sum}`); */

/*   // anonymous functions - wrong syntax without a variable, cannot be use standalone

  var function_to_print_sum = function (a, b) {
    console.log("a + b = " + (a + b)); //print output
  };
  
  function_to_print_sum(4, 4); //call function */

/*   //arrow function = >
  var function_to_print_sum = (a, b) => {
    console.log("a + b = " + (a + b));
  };
  
  function_to_print_sum(4, 4); */

  // can pass function as parameters
  // call back function always pass as parameters
  // function <name of function that call back function>(<parameters>, <call back function>)
  // call back function will make it generic, allow changes by adding functions to execute
  // operation - eg of call back function

  function print_after_operation(a, b, operation) {
    var result = operation(a, b);
    console.log("Result: " + result);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function product(a, b) {
    return a * b;
  }
  
  print_after_operation(3, 4, add); // a = 3. b = 4, operation = add
  print_after_operation(3, 4, product);
  print_after_operation(3, 4, (a, b) => {
    return a - b;
  }); // put function directly inside the call back, (a, b) => {return a - b;} is the call back function for this line (operation)

  