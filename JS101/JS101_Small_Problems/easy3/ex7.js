function twice(num) {
  let str = num.toString();
  let index = str.length / 2;


  if (str.length % 2 !== 0) {
    return Number(str) * 2;
  } else {
    let firstHalf = str.substring(0, index);
    let secondHalf = str.substring(index);

    if (firstHalf === secondHalf) {
      return Number(str);
    } else {
      return Number(str) * 2;
    }
  }
}

console.log(twice(7676));

/*
Input: number
Output: number

Rules:
- even length number
- left side digits are exactly the same as it's right side digits
- if not a double number, return number * 2
- if a double number, return as is

Data Structure - Number
Algorithm:
- check if even length number - convert to string
- if no, return number * 2
- if yes, split number in half, does left side match right side?
- if yes, return number
- if no, return number * 2
*/