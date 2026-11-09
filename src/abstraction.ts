abstract class Employee {
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
    abstract calculatePay(): number;
    abstract calculateBonus(): number;
}

//const employee = new Employee("Mahbub", 230000); // Error: Cannot create an instance of an abstract class
class Manager extends Employee {
    calculatePay(): number {
        return this.baseSalary;
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

    calculatePay(): number {
        return this.baseSalary;
    }

    calculateBonus(): number {
        return this.baseSalary + 10000;
    }
}
