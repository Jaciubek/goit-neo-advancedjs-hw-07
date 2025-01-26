/*
  Klasa Student, która zawiera trzy właściwości: name, age oraz grade.
  Zamiast deklarować te właściwości w ciele klasy, a następnie w konstruktorze, i w końcu przypisywać im wartości,
  napisz skróconą inicjalizację.
*/
// kod oryginalny:
// class Student {
//   public name: string;
//   public age: number;
//   public grade: string;
//   constructor(name: string, age: number, grade: string) {
//     this.name = name;
//     this.age = age;
//     this.grade = grade;
//   }
// }
// kod po zmianach:
class Student {
    constructor(name, age, grade) {
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}
// Test
const student = new Student("John", 21, "A");
console.log("%cTask1:", "color: red; text-decoration: underline;");
console.log(student);
console.log("\n\n");
export {};
//# sourceMappingURL=1.js.map