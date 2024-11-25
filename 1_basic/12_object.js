/**
 * Objects (ES6)
 */

// Create an object using key-value pairs.
let yuJin = {
    name: '안유진',
    group: '아이브',
    dance() {
        return `${this.name} is dancing`;
    }
};

console.log(yuJin);
console.log(yuJin.name);
console.log(yuJin['name']);

const key = 'group';
console.log(yuJin[key]);

console.log(yuJin.dance());

// Create an object using computed property names.
const nameKey = 'name';
const nameValue = '안유진';
const groupKey = 'group';
const groupValue = '아이브';

const yuJin2 = {
    [nameKey]: nameValue,
    [groupKey]: groupValue,
    dance() {
        return `${this.name} is dancing`;
    }
};

console.log(yuJin2);
console.log(yuJin2.dance());

/**
 * Objects declared with const cannot be reassigned, but their properties can be changed.
 * yuJin2 = {}; // Error
 */
yuJin2.age = 18; // Add a property
console.log(yuJin2);

yuJin2.group = '아이즈원'; // Modify a property
console.log(yuJin2);

console.log(Object.keys(yuJin2)); // Return an array of keys
console.log(Object.values(yuJin2)); // Return an array of values

// Create an object using shorthand property names.
const name = '안유진';
const group = '아이브';

const yuJin3 = {
    name,
    group,
    dance() {
        return `${this.name} is dancing`;
    }
};

console.log(yuJin3);
console.log(yuJin3.dance());

// Destructuring objects
const { name: yuJinName, group: yuJinGroup } = yuJin3;
console.log(yuJinName); // 안유진
console.log(yuJinGroup); // 아이브

// Spread operator
const yuJin4 = { ...yuJin3, age: 18 };
console.log(yuJin4); // { name: '안유진', group: '아이브', dance: [Function: dance], age: 18 }
