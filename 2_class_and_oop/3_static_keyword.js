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
 * factory constructor
 */

class IdolModel2 {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    // Object factory
    static fromObject(object) {
        return new IdolModel2(
            object.name,
            object.year,
        );
    }

    // List factory
    static fromList(list) {
        return new IdolModel2(
            list[0],
            list[1],
        );
    }
}

const yuJin2 = IdolModel2.fromObject({
    name: '안유진',
    year: 2003,
});

console.log(yuJin2);

const wonYoung = IdolModel2.fromList(
    [
        '장원영',
        2004,
    ]
);

console.log(wonYoung);