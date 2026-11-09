class Employee {
    constructor(
        public name: string,
        protected _baseSalary: number,
    ) {}

    get baseSalary(): number {
        return this._baseSalary;
    }

    set baseSalary(newSalary: number) {
        if (newSalary < 0) {
            throw new Error("Salary cannot be negative value");
        }

        this._baseSalary = newSalary;
    }

    describe(): string {
        return `Employee name is ${this.name} and base salary is ${this._baseSalary}`;
    }

    calculatePay(): number {
        return this.baseSalary;
    }
}

class Manager extends Employee {
    override describe(): string {
        return `Manager name is ${this.name} and base salary is ${this.baseSalary}`;
    }
    calculateBonus(): number {
        return this.baseSalary + 20000;
    }
}

class Programmer extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        public type: string,
    ) {
        super(name, baseSalary);
    }

    override describe(): string {
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
