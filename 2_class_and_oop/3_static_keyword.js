/**
 * Static keyword
 */
class IdolModel {
    name;
    year;

    // Static property
    static groupName = '아이브';

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // Static method
    static returnGroupName() {
        return `우리는 ${this.groupName} 입니다.`;
    }
}

const yuJin = new IdolModel('안유진', 2003);
console.log(yuJin);

console.log(IdolModel.groupName);
console.log(IdolModel.returnGroupName());

/**
 * factory pattern
 */

class IdolModel2 {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    static fromObject(object){
        return new IdolModel2(
            object.name,
            object.year
        );
    }
}