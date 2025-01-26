/*
  Tworzysz grę, w której są postacie o różnych rolach.
  Obecnie pracujesz nad klasą Wizard, która ma implementować dwa interfejsy - ICharacter i ISpellCaster.

  Zdefiniuj interfejsy ICharacter i ISpellCaster tak, aby odpowiadały wymaganiom klasy Wizard.
  Interfejs ICharacter powinien zawierać właściwości name i level, a także metody introduce i levelUp.
  Interfejs ISpellCaster powinien zawierać metodę castSpell.
*/
// Implementacja klasy Wizard
class Wizard {
    constructor(name, level) {
        this.name = name;
        this.level = level;
        if (this.level < 1) {
            throw new Error("Level too low");
        }
    }
    introduce(phrase) {
        console.log(`${phrase}, I am ${this.name}`);
    }
    castSpell() {
        console.log("Casting a spell, behold my power!");
    }
    levelUp() {
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
//# sourceMappingURL=3.js.map