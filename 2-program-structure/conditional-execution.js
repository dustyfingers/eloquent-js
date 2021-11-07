// this will only work in the browser as the 'prompt' binding doesnt exist in the nodejs environment
let theNumber = Number(prompt('Pick a number'));

// this only executes if the input is a proper number
if (!Number.isNaN(theNumber)) console.log(`Your number is the square root of ${theNumber * theNumber}`);
// else this
else console.log('You didnt give me a number!');
