/*
  Tworzysz grę, w której są postacie o różnych rolach.
  Obecnie pracujesz nad klasą Wizard, która ma implementować dwa interfejsy - ICharacter i ISpellCaster.

  Zdefiniuj interfejsy ICharacter i ISpellCaster tak, aby odpowiadały wymaganiom klasy Wizard.
  Interfejs ICharacter powinien zawierać właściwości name i level, a także metody introduce i levelUp.
  Interfejs ISpellCaster powinien zawierać metodę castSpell.
*/

// реалізація класу Wizard
// kod oryginalny
// class Wizard implements ICharacter, ISpellCaster {
//   constructor(public name: string, public level: number) {
//     if (this.level < 1) {
//       throw new Error("Level too low");
//     }
//   }

//   introduce(phrase: string): void {
//     console.log(phrase + ", " + this.name);
//   }

//   castSpell(): void {
//     console.log("Casting a spell, behold my power!");
//   }

//   levelUp(): void {
//     this.level++;
//     console.log(`Level up! New level is ${this.level}`);
//   }
// }

// // тестування класу
// const wizard = new Wizard("Merlin", 15);

// wizard.introduce("I am the mighty wizard");
// wizard.castSpell();
// wizard.levelUp(); // Level up! New level is 16

// kod po zmianach:
// Definicje interfejsów
interface ICharacter {
    name: string;
    level: number;
  
    introduce(phrase: string): void;
    levelUp(): void;
  }
  
  interface ISpellCaster {
    castSpell(): void;
  }
  
  // Implementacja klasy Wizard
  class Wizard implements ICharacter, ISpellCaster {
    constructor(public name: string, public level: number) {
      if (this.level < 1) {
        throw new Error("Level too low");
      }
    }
  
    introduce(phrase: string): void {
      console.log(`${phrase}, I am ${this.name}`);
    }
  
    castSpell(): void {
      console.log("Casting a spell, behold my power!");
    }
  
    levelUp(): void {
      this.level++;
      console.log(`Level up! New level is ${this.level}`);
    }
  }
  
  // Testowanie klasy Wizard
  console.log("%cTask3:", "color: red; text-decoration: underline;");
  const wizard = new Wizard("Merlin", 15);
  
  wizard.introduce("I am the mighty wizard");
  wizard.castSpell();
  wizard.levelUp(); // Level up! New level is 16
  console.log("\n\n");
  
  export {};