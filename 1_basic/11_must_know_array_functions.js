/**
 * Array Methods (ES6)
 */
const iveMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
console.log(iveMembers);

// push()
console.log('-----------------');
console.log(iveMembers.push('코드팩토리')); // Returns new length
console.log(iveMembers);

// pop()
console.log('-----------------');
console.log(iveMembers.pop()); // Returns removed element
console.log(iveMembers);

// shift()
console.log('-----------------');
console.log(iveMembers.shift()); // Returns removed element
console.log(iveMembers);

// unshift()
console.log('-----------------');
console.log(iveMembers.unshift('안유진')); // Returns new length
console.log(iveMembers);

// splice()
console.log('-----------------');
console.log(iveMembers.splice(0, 3)); // Returns removed elements
console.log(iveMembers);

// Reset array
const originalMembers = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];
let members = [...originalMembers];

// concat()
console.log('-----------------');
const concatenated = members.concat('리얼'); // Returns new array
console.log(concatenated);
console.log(members);

// slice()
console.log('-----------------');
const sliced = members.slice(0, 3); // Returns new array
console.log(sliced);
console.log(members);

// Spread Operator
console.log('-----------------');
const iveMembers2 = [...members];
console.log(iveMembers2);

const iveMembers3 = [members];
console.log(iveMembers3);

const iveMembers4 = members;
console.log(iveMembers4);

console.log(iveMembers4 === members);

console.log([...members] === members);

// join()
console.log('-----------------');
console.log(members.join()); // Returns string
console.log(members.join('/'));
console.log(members.join(', '));

// sort() and reverse()
console.log('-----------------');
console.log(members.sort()); // Returns sorted array
console.log(members.reverse()); // Returns reversed array

let numbers = [1, 9, 7, 5, 3];
console.log('-----------------');
console.log(numbers);

// Sorting with compare function
numbers.sort((a, b) => (a > b ? 1 : -1));
console.log(numbers); // Ascending order

numbers.sort((a, b) => (a > b ? -1 : 1));
console.log(numbers); // Descending order

// map() -> Returns a new array by calling a function on every element
console.log('-----------------');
console.log(members.map(x => x)); // Returns a copy of the array
console.log(members.map(x => `아이브: ${x}`));

console.log(
    members.map(x => (x === '안유진' ? `아이브: ${x}` : x))
);

// filter() -> Returns a new array with elements that pass the test
numbers = [1, 8, 7, 6, 3];
console.log('-----------------');
console.log(numbers.filter(x => x > 5)); // Returns [8, 7, 6]

// Additional ES6 Array Methods

// forEach() -> Executes a provided function once for each array element
console.log('-----------------');
members.forEach(member => console.log(`멤버: ${member}`));

// find() -> Returns the first element that satisfies the condition
const found = members.find(member => member === '레이');
console.log(found); // 레이

//fineIndex() -> Returns the index of the first element that satisfies the condition
const foundIndex = members.findIndex(member => member === '레이');
console.log(foundIndex); // 1

// some() -> Checks if any elements pass the test
const hasMember = members.some(member => member === '가을');
console.log(hasMember); // true

// every() -> Checks if all elements pass the test
const allHaveLength = members.every(member => member.length > 1);
console.log(allHaveLength); // true

// reduce() -> Applies a function against an accumulator and each element
const totalLength = members.reduce((acc, member) => acc + member.length, 0);
console.log(totalLength); // Sum of lengths of all member names

// includes() -> Determines whether the array includes a certain element
const includesLee = members.includes('이서');
console.log(includesLee); // true