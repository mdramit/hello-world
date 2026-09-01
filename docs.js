const docs = [
  { title: "NDA",     pages: 3,  signed: true  },
  { title: "Lease",   pages: 12, signed: false },
  { title: "Invoice", pages: 1,  signed: true  },
];

const signedTitles = docs
  .filter(d => d.signed)      // keep signed docs → [NDA, Invoice]
  .map(d => d.title);         // pull out titles  → ["NDA", "Invoice"]

console.log('signedTitles', signedTitles);
const totalPages = docs.reduce((sum, d) => sum + d.pages, 0);   // 16

console.log('totalPages = ', totalPages);

console.log('docs', docs);

const over_5p_titles = docs
  .filter(d => d.pages > 5)
  .map(d => d.title);

console.log('over_5p_titles docs ', over_5p_titles);

