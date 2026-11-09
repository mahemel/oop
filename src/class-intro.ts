/*
interface Employee {
    name: string;
    baseSalary: number;
}
const employee: Employee = {
    name: "Mahbub",
    baseSalary: 220000,
};

const employee2 = {
    name: "Mizan",
    baseSalary: 120000,
};

*/

class Employee {
    name: string;
    baseSalary: number;
    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
}

const employee = new Employee("Mahbub", 220000);
const employee2 = new Employee("Mizan", 120000);

console.log(employee instanceof Employee, employee2);
