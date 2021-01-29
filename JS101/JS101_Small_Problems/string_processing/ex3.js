function letterCaseCount(string) {
  let lower = string.match(/[a-z]/g) || 0;
  let upper = string.match(/[A-Z]/g) || 0;
  let none = string.match(/[^a-z]/gi) || 0;

  return {
    lowercase: lower.length,
    uppercase: upper.length,
    neither: none.length
  };
}

console.log(letterCaseCount('123'));