mySet = new Set();
mySet.add(42);
mySet.add("cat");
mySet.add("donkey");
mySet.add(105248);





console.log(mySet);
console.log(mySet.has("cat"));
console.log(mySet.has("dog"));
console.log(mySet.has(105248));
console.log(mySet.has(15));
console.log(Array.from(mySet));