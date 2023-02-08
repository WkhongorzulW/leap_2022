let numbers = [4, 2, 34, 4, 1, 12, 1, 4];
let duplicatedArrayNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  for (let j = 0; j < numbers.length; j++) {
    if (
      numbers[i] === numbers[j] &&
      i !== j &&
      !duplicatedArrayNumbers.includes(numbers[i])
    ) {
      duplicatedArrayNumbers.push(numbers[i]);
    }
  }
}
console.log(duplicatedArrayNumbers);
