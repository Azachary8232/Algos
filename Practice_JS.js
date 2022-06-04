

const letters = new Set;

letters.add(1);
letters.add("a");
letters.add(true);
letters.add(56);

console.log(letters);

let a = "variable A";

letters.add("here")
letters.add(true)
letters.add(a)

console.log(letters);
console.log(letters.values());
console.log(Array.from(letters));


