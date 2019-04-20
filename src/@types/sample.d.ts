declare var Alice: Person;

declare class Person {
    constructor(name: string);
    name: string;
    say(message: string): void;
}