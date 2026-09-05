import out from "./logger.js";

const greet = (name) => `Hi ${name}`;   // a function stored in a const
const fns = [greet];                     // functions in an array — fine

console.log('greet("Manos")', greet("Manos"));
console.log('fns[0]("Manos")', fns[0]("Manos"));

const nums = [10, 20, 30];
nums.forEach(n => console.log(n));   // logs 10, 20, 30

const d_nums = nums.map(n => n * 2);        // [20, 40, 60]   (nums is unchanged)
nums.forEach(n => console.log(n));   // logs 10, 20, 30
console.log('after map');
d_nums.forEach(n => console.log(n));   // logs 10, 20, 30

const filtered_vals = [1, 2, 3, 4].filter(n => n % 2 === 0);   // [2, 4]
console.log(filtered_vals);

out('[1, 2, 3, 4].reduce((sum, n) => sum + n, 0)');
out([1, 2, 3, 4].reduce((sum, n) => sum + n, 0));   // 10
//   round 1: sum=0, n=1 → returns 1
//   round 2: sum=1, n=2 → returns 3
//   round 3: sum=3, n=3 → returns 6
//   round 4: sum=6, n=4 → returns 10