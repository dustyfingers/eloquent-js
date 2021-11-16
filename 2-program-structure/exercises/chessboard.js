let size = 8, str = '';

for (let i = 0; i < size; i++) {
  let row = '';

  for (let j = 0; j < size; j++) {
    // if i is even, we do hash/space
    if (i % 2 === 0) {
      if (j % 2 === 0) row += '#'
      else row += ' '
    }
    // if i is odd, we do space/hash
    else {
      if (j % 2 === 0) row += ' '
      else row += '#'
    }
  }
  str += row + '\n';
}

console.log(str)