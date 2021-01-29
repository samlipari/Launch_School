function getGrade(num1, num2, num3) {
  let average = (num1 + num2 + num3) / 3;
  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else if (average < 60 && average >= 0) {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));
console.log(getGrade(50, 50, 95));