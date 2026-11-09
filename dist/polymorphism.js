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
    calculatePay() {
        return this.baseSalary;
    }
}
class Manager extends Employee {
    describe() {
        return `Manager name is ${this.name} and base salary is ${this.baseSalary}`;
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
    describe() {
        return `Programmer name is ${this.name} and base salary is ${this.baseSalary}, Programmer type: ${this.type}`;
    }
}
const employee = new Employee("Mahbub", 230000);
const manager = new Manager("John", 300000);
const programmer = new Programmer("Alice", 150000, "Frontend");
console.log(employee.calculatePay());
console.log(manager.describe());
console.log("bonus: ", manager.calculateBonus());
console.log(programmer.describe());
export {};
