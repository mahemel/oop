class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary;
    }
    describe() {
        return `Employee name is ${this.name} and base salary is ${this._baseSalary}`;
    }
}
//const employee = new Employee("Mahbub", 230000); // Error: Cannot create an instance of an abstract class
class Manager extends Employee {
    calculatePay() {
        return this.baseSalary;
    }
    calculateBonus() {
        return this.baseSalary + 20000;
    }
}
class Programmer extends Employee {
    type;
    constructor(name, baseSalary, type) {
        super(name, baseSalary);
        this.type = type;
    }
    calculatePay() {
        return this.baseSalary;
    }
    calculateBonus() {
        return this.baseSalary + 10000;
    }
}
export {};
