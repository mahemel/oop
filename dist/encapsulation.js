class Employee {
    name;
    _baseSalary;
    constructor(name, _baseSalary) {
        this.name = name;
        this._baseSalary = _baseSalary;
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
}
const employee = new Employee("Mahbub", 230000);
// employee.baseSalary = -300000;
console.log("bonus " + employee.salaryWithBonus, employee, "test");
export {};
