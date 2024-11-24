/**
 * Hoisting
 */
console.log('Hello');
console.log('World');

// console.log(name);
// let name = '코드팩토리';
// console.log(name);

/**
 * Hoisting이란 무엇인가?
 * 
 * 모든 변수 선언이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상을 이야기한다.
 * var 키워드를 사용할 때 발생하며, let과 const는 호이스팅되지 않는다.
 */
let name;
console.log(name); // undefined
name = '코드팩토리';
console.log(name); // 코드팩토리

console.log(yuJin); // ReferenceError: Cannot access 'yuJin' before initialization
let yuJin = '안유진';