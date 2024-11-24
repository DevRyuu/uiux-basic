/**
 * Operators (연산자)
 */

/**
 * 산술 연산자 (Arithmetic Operators)
 * +, -, *, /, %, ++, --
 */
console.log(10 + 10); // 20
console.log(10 - 10); // 0
console.log(10 * 10); // 100
console.log(10 / 10); // 1
console.log(10 % 10); // 0

console.log('-----------------');

console.log(10 * (10 + 10)); // 200

let number = 1;

/**
 * 증가와 감소 (Increment and Decrement)
 */
number++;
console.log(number); // 2

number--;
console.log(number); // 1

/**
 * 연산자의 위치 (Operator Position)
 */
let result = 1;
console.log(result); // 1

result = number++;
console.log(result, number); // 1 2

result = ++number;
console.log(result, number); // 3 3

/**
 * 숫자 타입이 아닌 타입에 +, - 연산자를 사용하면 (Using +, - on non-number types)
 */
let sample = '99';
console.log(+sample); // 99
console.log(typeof +sample); // number

console.log(sample); // '99'
console.log(typeof sample); // string

sample = true;
console.log(+sample); // 1
console.log(typeof +sample); // number

sample = false;
console.log(+sample); // 0
console.log(typeof +sample); // number

sample = '안유진';
console.log(+sample); // NaN -> Not a Number

/**
 * 할당 연산자 (Assignment Operators)
 */
number = 100;
console.log(number); // 100

number += 10;
console.log(number); // 110

number *= 10;
console.log(number); // 1100

number /= 10;
console.log(number); // 110

number %= 10;
console.log(number); // 0

/**
 * 비교 연산자 (Comparison Operators)
 * 
 * 1) 값의 비교 (Value Comparison)
 * 2) 값과 타입의 비교 (Value and Type Comparison)
 */
console.log(5 == 5); // true
console.log(5 == '5'); // true
console.log(0 == ''); // true
console.log(0 == false); // true
console.log(1 == true); // true

console.log(5 === 5); // true
console.log(5 === '5'); // false
console.log(0 === ''); // false
console.log(0 === false); // false
console.log(1 === true); // false

console.log(5 != 5); // false
console.log(5 != '5'); // false
console.log(0 != ''); // false
console.log(0 != false); // false
console.log(1 != true); // false

console.log(5 !== 5); // false
console.log(5 !== '5'); // true
console.log(0 !== ''); // true
console.log(0 !== false); // true
console.log(1 !== true); // true

/**
 * 대소 관계 비교 연산자 (Relational Operators)
 */
console.log(5 > 5); // false
console.log(5 >= 5); // true
console.log(5 < 5); // false
console.log(5 <= 5); // true

/**
 * 삼항 조건 연산자 (Ternary Operator)
 */
let age = 15;
let ageResult = (age >= 18) ? '성인' : '미성년자';
console.log(ageResult); // '미성년자'

/**
 * 논리 연산자 (Logical Operators)
 * 
 * 1) AND (&&) -> 모두 true일 때 true
 * 2) OR (||) -> 하나라도 true일 때 true
 */
console.log(true && true); // true
console.log(true && false); // false

console.log(true || true); // true
console.log(true || false); // true

 /**
  * 단축평가 (Short-circuit Evaluation)
  * 
  * &&를 사용했을 때 좌측이 true면 우측 값 반환
  * &&를 사용했을 때 좌측이 false면 좌측 값 반환
  * ||를 사용했을 때 좌측이 true면 좌측 값 반환
  * ||를 사용했을 때 좌측이 false면 우측 값 반환
  */
console.log('-----------------');
console.log(true || '아이브'); // true
console.log(false || '아이브'); // '아이브'
console.log(true && '아이브'); // '아이브'
console.log(false && '아이브'); // false

console.log(true && true && '아이브'); // '아이브'

/**
 * 지수 연산자 (Exponentiation Operator)
 */
console.log(2 ** 3); // 8
console.log(2 ** 0); // 1

/**
 * null 병합 연산자 (Nullish Coalescing Operator)
 */
let name;
console.log(name); // undefined

name = name ?? '아이브';
console.log(name); // '아이브'

name = name ?? '블랙핑크';
console.log(name); // '아이브'

let name2;
name2 ??= '코드팩토리';
console.log(name2); // '코드팩토리'
