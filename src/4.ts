// kod oryginalny
// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

// kod po zmianach:
// Definicja klasy Key
class Key {
    private signature: number;
  
    constructor() {
      this.signature = Math.random();
    }
  
    public getSignature(): number {
      return this.signature;
    }
  }
  
  // Definicja klasy Person
  class Person {
    private key: Key;
  
    constructor(key: Key) {
      this.key = key;
    }
  
    public getKey(): Key {
      return this.key;
    }
  }
  
  // Definicja abstrakcyjnej klasy House
  abstract class House {
    public door: boolean;
    protected key: Key;
    protected tenants: Person[];
  
    constructor(key: Key) {
      this.key = key;
      this.door = false;
      this.tenants = [];
    }
  
    public comeIn(person: Person): void {
      if (this.door) {
        this.tenants.push(person);
        console.log(
          `Osoba z kluczem o podpisie ${person
            .getKey()
            .getSignature()} weszła do domu.`
        );
      } else {
        console.log("Nie można wejść, drzwi są zamknięte.");
      }
    }
  
    public abstract openDoor(key: Key): void;
  }
  
  // Definicja klasy MyHouse dziedziczącej po House
  class MyHouse extends House {
    constructor(key: Key) {
      super(key);
    }
  
    public openDoor(key: Key): void {
      if (key.getSignature() === this.key.getSignature()) {
        this.door = true;
        console.log("Drzwi zostały otwarte.");
      } else {
        this.door = false; // Zamknięcie drzwi w przypadku nieprawidłowego klucza
        console.log("Nieprawidłowy klucz. Drzwi zostały zamknięte.");
      }
    }
  }
  
  // Testowanie implementacji
  console.log("%cTask4:", "color: red; text-decoration: underline;");
  
  // Tworzenie klucza
  const key = new Key();
  
  // Tworzenie domu z utworzonym kluczem
  const house = new MyHouse(key);
  
  // Tworzenie osoby posiadającej ten sam klucz
  const person = new Person(key);
  
  // Próba otwaria drzwi za pomocą klucza osoby
  house.openDoor(person.getKey());
  
  // Próba wejścia do domu przez osobę
  house.comeIn(person);
  
  // Dodatkowy Test: Osoba z innym kluczem próbuje otworzyć drzwi
  // Zamknięcie drzwi, bo wcześniej zostały otwarte
  house.door = false; //ważne!!!!
  
  const anotherKey = new Key();
  const anotherPerson = new Person(anotherKey);
  
  // Próba otwaria drzwi za pomocą innego klucza
  house.openDoor(anotherPerson.getKey());
  
  // Próba wejścia do domu przez osobę z innym kluczem
  house.comeIn(anotherPerson);
  
  export {};