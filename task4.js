//1
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const combinedArray = [...arr1, ...arr2];

console.log(combinedArray);

//2
const person = { name: "John", age: 30 };

const newPerson = { ...person, gender: "male" };

console.log(newPerson);
