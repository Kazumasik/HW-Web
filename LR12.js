//Завдання 1
function sumInput() {
  let nums = [];
  while (true) {
    let value = prompt("Введите число", 0);
    if (value === "" || value === null || !isFinite(value)) 
      break;
    nums.push(+value);
  }
  let sum = 0;
  for (let number of nums) {
    sum += number;
  }
  return sum;
}
console.log(sumInput());

//Завдання 2
let mass = [1, -2, 3, 4, -9, 6]

function getMaxSubSum(mass) {
  let sum = 0
  for(let i = 0; i < mass.length; i++) {
    if(mass[i] >= 0){
      sum += mass[i];
    }
  }
  return sum
}

console.log(getMaxSubSum(mass))