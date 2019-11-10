export class Person {
    constructor(
        public name: string,
        public age: number
    ) { }

    setName(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setAge(age: number) {
        this.age = age;
    }

    getAge(): number {
        return this.age;
    }
}

