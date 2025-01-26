/*
  Twoim zadaniem będzie stworzenie dwóch klas – Employee oraz Manager.

  Klasa Employee powinna zawierać:

  właściwość name, która będzie dostępna dla wszystkich.
  właściwość department, która będzie dostępna tylko wewnątrz klasy Employee.
  salary, które będzie dostępne tylko wewnątrz klasy Employee oraz jego podklas.


  Klasa Manager powinna być podklasą klasy Employee.

  Należy zaimplementować w klasie Manager konstruktor, który będzie wywoływał konstruktor klasy nadrzędnej oraz zwiększał salary o 10000.

*/
// kod oryginalny:
// class Employee {
//   // Заповніть модифікатори доступу
//   name: string;
//   department: string;
//   salary: number;
//   constructor(name: string, department: string, salary: number) {
//     this.name = name;
//     this.department = department;
//     this.salary = salary;
//   }
//   getEmployeeDetails() {
//     return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
//   }
// }
// class Manager extends Employee {
//   // Реалізуйте конструктор та збільшіть salary на 10000
// }
// kod po zmianach:
class Employee {
    constructor(name, department, salary) {
        this.name = name;
        this.department = department;
        this.salary = salary;
    }
    getEmployeeDetails() {
        return `Name: ${this.name}, Department: ${this.department}, Salary: ${this.salary}`;
    }
}
class Manager extends Employee {
    constructor(name, department, salary) {
        // Wywołanie konstruktora klasy nadrzędnej z zwiększonym wynagrodzeniem
        super(name, department, salary + 10000);
    }
}
// Test
const employee = new Employee("John", "IT", 5000);
const manager = new Manager("Alice", "Management", 8000);
console.log("%cTask2:", "color: red; text-decoration: underline;");
console.log(`Employee` + employee.getEmployeeDetails());
console.log(`Manager` + manager.getEmployeeDetails());
console.log("\n\n");
export {};
//# sourceMappingURL=2.js.map