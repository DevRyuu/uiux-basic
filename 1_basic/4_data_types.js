/**
 * Data Types
 * 
 * 여섯 개의 Primitive Types와
 * 한 개의 Object Type이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (참/거짓)
 * 4) Undefined (정의되지 않음)
 * 5) Null (비어있음)
 * 6) Symbol (ES6에서 추가됨)
 * 
 * 7) Object (객체)
 *    - Array
 *    - Function
 *    - Object
 */

/**
 * Number 타입
 */
const age = 36;
console.log(typeof age);
console.log('------------');

const temperature = -36.5;
const pi = 3.14;
console.log(typeof temperature);
console.log(typeof pi);
console.log('------------');

const infinity = Infinity;
const nInfinity = -Infinity;
console.log(typeof infinity);
console.log(typeof nInfinity);
console.log('------------');

/**
 * String 타입
 */
const codefactory = '코드팩토리';
console.log(typeof codefactory);

const ive = '"아이브" 안유진';
console.log(typeof ive);
console.log('------------');

/**
 * Template Literals
 * 
 * Escaping Characters
 * 1) newline -> \n
 * 2) tab -> \t
 * 3) backtick -> \`
 * 
 */
const iveYuJin = `아이브\n안유진`;
console.log(iveYuJin);
const iveWonYoung = `아이브\t장원영`;
console.log(iveWonYoung);
const backTick = `아이브\`백틱`;
console.log(backTick);

const iveWonYoung2 = `아이브 ' " / ?
장원영`;
console.log(iveWonYoung2);
console.log(typeof iveWonYoung2);

const groupName = '아이브';
console.log(`${groupName} 안유진`);

/**
 * Boolean 타입
 */
const isTrue = true;
const isFalse = false;
console.log(typeof isTrue);

/**
 * Undefined 타입
 * 
 * 사용자가 직접 값을 할당하지 않은 경우 지정되는 값이다
 */
let noInit;
console.log(noInit);
console.log(typeof noInit);

/**
 * Null 타입
 * 
 * undefined와 마찬가지로 값이 없다는 뜻이나
 * JS에서는 개발자가 의도적으로 값을 초기화할 때 사용한다.
 */
let init = null;
console.log(init);
console.log(typeof init); // JS의 오류로 null이 object로 표시된다.

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 프리미티브 값들과 다르게 Symbol 함수를 호출하여 생성한다.
 * ES6에서 추가되었다.
 */
const test1 = '1';
const test2 = '1';
console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');
console.log(symbol1 === symbol2);

/**
 * Object 타입
 * 
 * Map
 * Key:Value 쌍으로 이루어진 데이터 구조
 */
const dictionary = {
    red: '빨강',
    green: '초록',
    blue: '파랑',
};

console.log(dictionary);
console.log(dictionary['red']);

/**
 * Array 타입
 */
const iveMembersArray = [
    '안유진',
    '가을',
    '레이',
    '장원영',
    '리즈',
    '이서',
];

console.log(iveMembersArray);
console.log(iveMembersArray[0]);
console.log(iveMembersArray[4]);

iveMembersArray[0] = '유진';
console.log(iveMembersArray);
console.log(typeof iveMembersArray);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시하는 것
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다
 * 
 * JS -> dynamic typing
 */
