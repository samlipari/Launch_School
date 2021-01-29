
function generateCode() {
  let chars = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let sections = [8, 4, 4, 4, 12];

  let code = '';

  sections.forEach((section, sectionIdx) => {
    for (let index = 1; index <= section; index++) {
      let random = Math.floor(Math.random() * chars.length);
      code += chars[random];
    }
    if (sectionIdx < sections.length - 1) {
      code += '-';
    }
  });
  return code;
}

console.log(generateCode());
console.log(generateCode());
console.log(generateCode());