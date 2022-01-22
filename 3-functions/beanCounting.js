const beanCounter = (searchStr, bean) => {

  if (typeof searchStr !== 'string' || typeof bean !== 'string') return undefined;

  const beans = searchStr.match(new RegExp(`${bean}`, 'g'));

  if (beans) return beans.length;
  else return 0;

}

console.log(beanCounter("Big Bad Boyyyeeee heyooooo", "B")) // returns 3
console.log(beanCounter("Big Bad Boyyyeeee heyooooo", "o")) // returns 6
console.log(beanCounter("Big Bad Boyyyeeee heyooooo", "y")) // returns 4
console.log(beanCounter("Big Bad Boyyyeeee heyooooo", "x")) // returns 0