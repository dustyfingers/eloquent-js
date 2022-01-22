const minimum = (num1, num2) => {

  if (typeof num1 !== 'number' || typeof num2 !== 'number') return undefined;

  if (num1 < num2) return num1;
  if (num2 < num1) return num2;
  else return undefined;

}

console.log(minimum(7.0, 3)); // returns 3