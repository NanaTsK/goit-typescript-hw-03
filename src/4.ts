// const key = new Key();

// const house = new MyHouse(key);
// const person = new Person(key);

// house.openDoor(person.getKey());

// house.comeIn(person);

// export {};

class Key {
	private signature: number;
	constructor() {
		this.signature = Math.random();
	}
	getSignature(): number {
		return this.signature;
	}
}
class Person {
	constructor(private key: Key) {
		this.key = key;
	}
	getKey(): Key {
		return this.key;
	}
}

abstract class House {
	protected door: boolean;
	protected key: Key;
	private tenants: Person[] = [];
	abstract openDoor(key: Key): void;
	constructor(key: Key) {
		this.key = key;
	}
	comeIn(person: Person) {
		if (this.door) {
			this.tenants.push(person);
			console.log("You entered the house.");
		} else {
			console.log("Door is closed. You can't enter.");
		}
	}
}

class MyHouse extends House {
	openDoor(key: Key) {
		if (key.getSignature() === this.key.getSignature()) {
			this.door = true;
			console.log("Door is opened.");
		} else {
			console.log("Wrong key. Door is closed");
		}
	}
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
