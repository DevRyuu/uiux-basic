/**
 * 함수
 */

/**
 * 파라미터 - 함수에서 입력받는 값
 * 인수 - 함수를 호출할 때 전달하는 값
 */
function calculate(number) {
    console.log((number * 10 / 2 % 3).toString());
}

calculate(4);
calculate(5);

/**
 * 기본 매개변수
 */
function multiply(x, y = 10) {
    console.log(x * y);
}

multiply(2, 4);
multiply(2);

/**
 * 반환 값 받기
 */
console.log('--------');
function multiply(x, y) {
    return x * y;
}

const result1 = multiply(2, 4);
console.log(result1);

/**
 * 화살표 함수 (Arrow Function)
 */
console.log('--------');
const multiply2 = (x, y) => {
    return x * y;
}
console.log(multiply2(2, 4));

const multiply3 = (x, y) => x * y;
console.log(multiply3(2, 4));

// 매개변수가 하나일 때는 괄호 생략 가능
const multiply4 = x => x * 10;
console.log(multiply4(2));

/**
 * 커링 (Currying)
 */
const multiply5 = x => y => z => `x: ${x}, y: ${y}, z: ${z}`;
console.log(multiply5(1)(2)(3));

function multiply6(x) {
    return function(y) {
        return function(z) {
            return `x: ${x}, y: ${y}, z: ${z}`;
        }
    }
}
console.log(multiply6(1)(2)(3));

const multiplyTwo = (x, y) => x * y;
console.log(multiplyTwo(4, 5));

const multiplyThree = (x, y, z) => {
    console.log(arguments);
    return x * y * z;
}
console.log('--------');
console.log(multiplyThree(4, 5, 6));

/**
 * 나머지 매개변수 (Rest Parameters)
 */
const multiplyAll = (...args) => {
    return args.reduce((a, b) => a * b, 1);
}
console.log(multiplyAll(3, 4, 5, 6, 7, 8, 9, 10));

/**
 * 즉시 실행 함수 (IIFE - Immediately Invoked Function Expression)
 */
((x, y) => {
    console.log(x * y);
})(4, 5)

/**
 * 타입과 인스턴스 확인
 */
console.log(typeof multiply);
console.log(multiply instanceof Object);