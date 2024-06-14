// Variables & Types
let isDone: boolean = false; // Boolean
let decimal: number = 6; // Number
let color: string = 'blue'; // String
let list2: Array<number> = [1, 2, 3]; // Array
let x: [string, number] = ['hello', 10]; // Tuple
let randomValue: any = 'Hello'; // any
let u: undefined = undefined; // undefine
let n: null = null; // null
enum Role {
    ADMIN,
    USER,
    GUEST,
}
let userRole: Role = Role.ADMIN; // Enum
let logMessage = (message: string): void => {
    console.log(message);
}; // void

// array of string both correct
let PowerOne: string[] = [];
let PowerTwo: Array<number> = [];

// functions: Types of parameters and return value type
function greet(name: string, age?: number): string {
    return 'Hello, ' + name + ' Age is ' + age;
}

// tuples
let address: [number, string, number];
address = [111, 'adarsh', 2334];

// object
let person: { name: string };
person = { name: 'jone' };

let anotherPerson: { name: string; age?: number };
anotherPerson = { name: 'Adarsh', age: 25 };

// interface : Structure of Object
interface Person {
    name: string;
    age: number;
}
interface Student {
    subject: string;
    rollNo: number;
}
let p: Person;
p = { name: 'adarsh', age: 12 };

// Union: Specify the optional both value
let p1: Person | Student;
p1 = { name: '', age: 12, subject: '' };

// Intersection:
let p2: Person & Student;
p2 = { name: '', age: 0, subject: '', rollNo: 0 };

// Enums: set of named constant
enum Colors {
    Red,
    Green,
    Blue,
}
let colors: Colors = Colors.Green;

// Alias
type Count = string | number;
let c: Count;
c = 1;
c = 'one';
// c = false

// Never
type X = string & number;
let no: [] = [];
// n.push(6);

// Class
class Car {
    brand: string;
    constructor(brand: string) {
        this.brand = brand;
    }
    getBrand() {
        console.log(this.brand + ', Hey!');
    }
}
let C1 = new Car('Audi');
C1.getBrand();

// implement
interface ICar {
    brand: string;
    model: string;
}
interface ICar2 {
    release: number;
}
class CarC implements ICar, ICar2 {
    constructor(public brand, public model, public release) {}
}

// Generics: to create reusable and type-safe components
function genNew<T>(a: T, b: T): T[] {
    return [a, b];
}
let A1 = genNew<string>('12', '2');
let A2 = genNew<number>(12, 2);

function addNewUser<T extends { id: string }>(user: T) {
    return user.id;
}

// readonly
interface PersonTwo {
    readonly _id: number;
    name: string;
}
let personTwo: PersonTwo = { _id: 123, name: 'Adarsh' };
// personTwo._id = 2344
personTwo.name = 'Akash';

/*
Utility Types  

Partial: set to optional
Pick : set of keys from type (key access)
Omit: set of keys from type (key not access)
readOny: value not change
*/
interface User {
    name: string;
    age: number;
    email: string;
}
type PartialUser = Partial<User>;
const partialUser: PartialUser = { name: 'John' };

type UserContactInfo = Pick<User, 'email'>;
const contactInfo: UserContactInfo = { email: 'john@example.com' };

type UserWithoutEmail = Omit<User, 'email'>;
const userWithoutEmail: UserWithoutEmail = { name: 'John', age: 30 };

export {};
