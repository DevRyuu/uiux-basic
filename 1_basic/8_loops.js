/**
 * Loops
 * 
 * 1) for
 * 2) while
 * 3) for...in
 * 4) for...of
 */

for (let i = 0; i < 10; i++) {
    console.log(i);
}

let mark = '';
for (let i = 0; i < 6; i++) {
    for (let j = 0; j < 6; j++) {
        mark += '*';
    }
    mark += '\n';
}
console.log(mark);

/**
 * for...in
 * 
 * Returns the index or key.
 */
const yuJin = {
    name: '안유진',
    group: '아이브',
    birth: '1996-09-01'
};

for (const key in yuJin) {
    console.log(`${key}: ${yuJin[key]}`);
}

const iveMembersArray = ['안유진', '장원영', '이나경', '박시안', '장세나', '이하은'];

for (const index in iveMembersArray) {
    console.log(`${index}번째 멤버: ${iveMembersArray[index]}`);
}

/**
 * for...of
 * 
 * Returns the value.
 */
for (const member of iveMembersArray) {
    console.log(member);
}

/**
 * while
 */
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

/**
 * do...while
 * 
 * Executes the loop body at least once.
 */
let count = 0;
do {
    console.log(count);
    count++;
} while (count < 10);

/**
 * break
 */
console.log('--------');
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

console.log('--------');
let number = 0;
while (number < 10) {
    number++;
    if (number === 5) {
        break;
    }
    console.log(number);
}

/**
 * continue
 */
console.log('--------');
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

console.log('--------');
number = 0;
while (number < 10) {
    number++;
    if (number === 5) {
        continue;
    }
    console.log(number);
}