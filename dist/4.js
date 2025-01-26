// kod oryginalny
// const key = new Key();
// const house = new MyHouse(key);
// const person = new Person(key);
// house.openDoor(person.getKey());
// house.comeIn(person);
// kod po zmianach:
// Definicja klasy Key
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
// Definicja klasy Person
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
// Definicja abstrakcyjnej klasy House
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (this.door) {
            this.tenants.push(person);
            console.log(`Osoba z kluczem o podpisie ${person
                .getKey()
                .getSignature()} weszła do domu.`);
        }
        else {
            console.log("Nie można wejść, drzwi są zamknięte.");
        }
    }
}
// Definicja klasy MyHouse dziedziczącej po House
class MyHouse extends House {
    constructor(key) {
        super(key);
    }
    openDoor(key) {
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Drzwi zostały otwarte.");
        }
        else {
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
//# sourceMappingURL=4.js.map