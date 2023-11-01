# Let's learn TypeScript

### What is TypeScript

#### TypeScript is a object oriented programming language that is built on top of JavaScript with some extra features.

#### How to install in your local machine

```
npm install -g typescript
```

#### Run this command to install TypeScript in you local machine and get start to write code in TypeScript.

### Basic Data Types in TypeScript

```
// Basic Data types in TypeScript

// string
let firstName: string = "Robin";

// number
let phone: number = 2343;

// boolean
const isClicked: boolean = false;

// undefined
let x: undefined = undefined;

//null
let y: null = null;

//bigInt
let z: bigint = 740998n;

//symbol
let hello = Symbol.for("hello");

//Array of string values
let friends: string[] = ['Rachel', "Conway"];

// Array of number values
let rolls: number[] = [5,3,2,3,54,6];


// tuple data type.
// Tuple is a special type of array.

let coordinates: [number, number] = [1, 5];

// This is an tuple of string and number coordinates
let nameAge: [string, number] = ["Robin", 19];

// Object data type in TS
const user: object = {
    name: 'Robin',
    age: 19,
}

// Here is an example of object type with predefined properties type

const player: {
    readonly id: '17934234dfasd';
    title: 'Web Developer'; // literal types
    name: string;
    age: number;
    role: string;
    isCaptain: boolean;
    gender?: string // Optional type
} = {
    id: "12031273sdfasdf",
    title: 'Web Developer',
    name: 'Tamim Iqbal',
    age: 36,
    role: 'Left-Handed batsman',
    isCaptain: false
}
```
