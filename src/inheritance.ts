class Employee {
    constructor(
        public name: string,
        protected _baseSalary: number,
    ) {}

    get baseSalary(): number {
        //to read the private property _baseSalary, we can use getter method
        return this._baseSalary;
    }

    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }
        this._baseSalary = newSalary; //to set the private property _baseSalary, we can use setter method
    }

    get salaryWithBonus(): number {
        return this._baseSalary + 10000;
    }

    describe(): string {
        return `Employee name is ${this.name} and base salary is ${this._baseSalary}`;
    }
}
class Manager extends Employee {
    constructor(name: string, _baseSalary: number, teamMemberCount: number) {
        super(name, _baseSalary);
    }

    describeWork(): string {
        return `Manager name is ${this.name} and base salary is ${this._baseSalary}`;
    }
}

const employee = new Employee("Mahbub", 230000);
const manager = new Manager("Mizan", 300000, 5);
// employee.baseSalary = -300000;

console.log(manager.describe());
