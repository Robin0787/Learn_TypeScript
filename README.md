# Let's learn TypeScript

### What is TypeScript

##### TypeScript is an object oriented programming language that is built on top of JavaScript with some extra features.

### What is the purpose of using TypeScript?

##### The purpose of using TypeScript is to improve the quality and reliability of JavaScript code.

###### TypeScript adds static typing to JavaScript which allows the compiler to check the types of variables and expressions at compile time. This can help to catch errors early, before they cause problems in the runtime environment.

#### How to install in our local machine

```
npm install -g typescript
```

##### Run this command to install TypeScript in you local machine and get start to write code in TypeScript.

### What's wrong with JS so that we want to use TS?

##### It's so simple. Here are the issues we face while we code in JS.

#### 1. Dynamically Typed Language.

##### It means JS add types of variables and expressions itself in the compile time. In JS we can't define the data type for variables and expressions. This is a major issue while working in a large application.

##### On the other hand, TS is a static typed language that is built on top of JS. In TS we have to define the types of variables and expressions. After defining the types we will never assign any other data types value to that variable.

#

#### 2. Difficult to maintain large codebase.

##### It's very difficult to maintain large codebase in JS. In large applications it's always better to maintain a structure. Using JS we can't maintain the structure.

##### In TS we can easily maintain a large codebase because in TS we always follow a structure. In TS we always predefine the types of variables and expressions so that further we won't get any type related confusion.

#

#### 3. Hard to find bugs.

##### In JavaScript we only get bugs in the runtime environment which is not appropriate. It will consume much time to test our code and find bugs in our code. We will only get bugs when we run our application.

##### In TypeScript we will get the errors in the development environment. TS compiler gives error at the compile time so that we can be more productive.

#

#### 4. Catch errors only in Runtime.

##### JavaScript only gives us errors in the runtime. We will get the errors only when we run our code. It's quite time consuming and doesn't give a nice developer experience when working in large application.

##### On the other hand, TypeScript gives errors in the development environment. We will get the errors in the development environment and we even don't have to run the application. It gives a nice developer experience and increase our productivity and also take less time to debug.

#

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
