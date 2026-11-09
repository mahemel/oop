class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
    }
    get baseSalary() {
        //to read the private property _baseSalary, we can use getter method
        return this._baseSalary;
    }
    set baseSalary(newSalary) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary; //to set the private property _baseSalary, we can use setter method
    }
    get salaryWithBonus() {
        return this._baseSalary + 10000;
    }
    describe() {
        return `Employee name is ${this.name} and base salary is ${this._baseSalary}`;
    }
}
class Manager extends Employee {
    constructor(name, _baseSalary, teamMemberCount) {
        super(name, _baseSalary);
    }
    describeWork() {
        return `Manager name is ${this.name} and base salary is ${this._baseSalary}`;
    }
}
const employee = new Employee("Mahbub", 230000);
const manager = new Manager("Mizan", 300000, 5);
// employee.baseSalary = -300000;
console.log(manager.describe());
export {};
