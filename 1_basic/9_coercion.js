/**
 * Type Conversion
 * 
 * 1) Explicit Conversion
 * 2) Implicit Conversion
 */

let age = 36;

// Explicit conversion to string using toString()
let stringAge = age.toString();
console.log(stringAge, typeof stringAge);

// Explicit conversion to string using String()
let stringAge2 = String(age);
console.log(stringAge2, typeof stringAge2);

// Implicit conversion to string using concatenation
let test = 36 + '';
console.log(test, typeof test);

// Implicit conversion: string + number => string
let number = '98' + 2;
console.log(number, typeof number);

// Implicit conversion in arithmetic operations
console.log('98' * 2, typeof ('98' * 2)); // number
console.log('98' - 2, typeof ('98' - 2)); // number

/**
 * It's recommended to use explicit conversions
 */
console.log(typeof (99).toString(), (99).toString());
console.log(typeof (true).toString(), (true).toString());
console.log(typeof (Infinity).toString(), (Infinity).toString());

console.log(typeof parseInt('99'), parseInt('99'));
console.log(typeof parseFloat('99.99'), parseFloat('99.99'));
console.log(typeof Number('99'), Number('99'));

// Additional examples using ES6 features
const binary = 0b1010; // binary literal
const octal = 0o744;    // octal literal
const hexadecimal = 0xFF; // hexadecimal literal

console.log(binary, typeof binary);
console.log(octal, typeof octal);
console.log(hexadecimal, typeof hexadecimal);

/**
 * Converting to Boolean type
 */
console.log(!'x'); // false
console.log(!!'x'); // true
console.log(Boolean('x')); // true

console.log(Boolean(0)); // false
console.log(Boolean('0')); // true

console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false

console.log(Boolean({})); // objects are always true
console.log(Boolean([])); // arrays are always true

// Additional Boolean conversion examples
console.log(Boolean('')); // false
console.log(Boolean(NaN)); // false
console.log(Boolean('false')); // true
