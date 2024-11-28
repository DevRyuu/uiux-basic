/**
 * Inheritance
 */
class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

class FemaleIdolModel extends IdolModel {
    dance() {
        return `${this.name}이 춤을 춥니다.`;
    }

}

class MaleIdolModel extends IdolModel {
    rap() {
        return `${this.name}이 랩을 합니다.`;
    }
}

const yuJin = new FemaleIdolModel('안유진', 2003);
console.log(yuJin);

const jiMin = new MaleIdolModel('박지민', 1995);
console.log(jiMin);

console.log(yuJin.name);
console.log(yuJin.dance());
console.log(jiMin.rap());

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);