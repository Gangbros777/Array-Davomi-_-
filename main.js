let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];
let containsN = [];
let doesNotContainN = [];

for (let i = 0; i < letterSearch.length; i++) {
  if (letterSearch[i].includes('n')) {
    containsN.push(letterSearch[i]);
  } else {
    doesNotContainN.push(letterSearch[i]);
  }
}

console.log("N harfi qatnashgan so'zlar:", containsN);
console.log("N harfi qatnashmagan so'zlar:", doesNotContainN);
