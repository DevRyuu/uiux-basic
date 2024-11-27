/**
 * Class keyword  
 */
class IdolModel {
    // Property
    name;
    year;

    // Constructor
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // Method
    sayName() {
        return `안녕하세요 ${this.name} 입니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);

const wonYoung = new IdolModel('장원영', 2004);
console.log(wonYoung);

console.log(yuJin.name);
console.log(wonYoung.year);

console.log(yuJin.sayName());

console.log(typeof IdolModel); // function
console.log(typeof yuJin); // object