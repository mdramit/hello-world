const x = "ManosD";
let y = 19;
const mult = (a, b) => a * b;
console.log(`My name is ${x}`);
console.log(mult(6,7));

const doc = {
  title: "Contract",
  pages: 12,
  signed: false
};
console.log(doc.title);           // "Contract"  — dot access
console.log(doc["title"]);        // "Contract"  — bracket access (useful when the key is in a variable)
doc.author = "Manos";   // just assign to add a new property
delete doc.signed;      // and remove one
console.log(doc.author);
