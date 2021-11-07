// variables are just bindings that point to values
let val = 5, val2 = 10

// functions are just bindings that point to a codeblock
const add  = (a, b) => {
  return a + b;
}

// the console object with the attached .log() method is just a binding that exists in the js environment by default!
console.log(add(val, val2))