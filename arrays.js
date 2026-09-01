const nums = [10, 20, 30];
console.log(nums.length);         // 3
console.log(nums[0]);             // 10
nums.push(40);      // add to the end → [10,20,30,40]

console.log(nums);
const mixed = [1, "two", true, null];  
console.log(mixed);

console.log('Type of nums', typeof nums);
console.log('Check if Array.isArray works: ', Array.isArray(nums));

const const_nums = [1, 2, 3];
console.log('nums is const and is ', const_nums);
console.log('Pushing 4 to nums');
const_nums.push(4);    
console.log('nums is now ', const_nums);
console.log('Array can change, pointer not');

console.log(`Let us iterate over the values`);
for (const n of const_nums) {
  console.log(n);
}