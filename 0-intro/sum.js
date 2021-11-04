// this function sums the numbers from 1-10
const customSum = () => {
  let total = 0, count = 0;

  while (count <= 10) {
    total += count;
    count += 1;
  }

  return total;
}

console.log(customSum()) 