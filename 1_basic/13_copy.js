/**
 * Copy by value vs Copy by reference
 * 
 * 1) All primitive values are copied by value.
 * 2) Objects and arrays are copied by reference.
 */

// Copy by value
let original = '안녕하세요';
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진 입니다.';
console.log('-----------------');
console.log(original);
console.log(clone);

// Copy by reference
let originalObj = {
    name: '안유진',
    group: '아이브',
};
let cloneObj = originalObj;

console.log('-----------------');
console.log(originalObj);
console.log(cloneObj);

originalObj.group = '아이즈원';
console.log('-----------------');
console.log(originalObj);
console.log(cloneObj);

console.log(originalObj === cloneObj);
console.log(original === clone);

/**
 * Spread Operator
 */
const yuJin = {
    ...originalObj,
};
console.log('-----------------');
console.log(yuJin);

console.log(originalObj === yuJin);

const yuJin2 = {
    ...originalObj,
    age: 18,
};
console.log('-----------------');
console.log(yuJin2);

const yuJin3 = {
    name: '히토미',
    ...originalObj,
};
console.log('-----------------');
console.log(yuJin3);

const numbers = [1, 3, 5 ,7, 9];
const nubmers2 = [
    ...numbers,
    11,
];
console.log('-----------------');
console.log(nubmers2);
