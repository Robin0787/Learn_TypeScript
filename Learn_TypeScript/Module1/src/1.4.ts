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
let friends: string[] = ["Rachel", "Conway"];

// Array of number values
let rolls: number[] = [5, 3, 2, 3, 54, 6];

//Now if I try to push a string to the rolls array which's type is number defined then I will get an error

// rolls.push("50");
// Now it's giving me a error :
// Argument of type 'string' is not assignable to parameter of type 'number'.

// That means we can't push a string to a number typed array.

// tuple data type.
// Tuple is a special type of array.

let coordinates: [number, number] = [1, 5];

// This is an tuple of string and number coordinates
let nameAge: [string, number] = ["Robin", 19];

// New code start's in the 1.5.ts file

// Practice Code

// Data types in TS

// 1. String
let text: string = "I love TypeScript";

// 2. Number
const number: number = 456356;

// 3. Boolean
const isChecked: Boolean = true || false;

// 4. Null
let person: null = null;

// 5. Undefined
let value: undefined = undefined;

// 6. Symbol
let helloSymbol: symbol = Symbol.for("Hello");

// 7. BigInt
let longIng: BigInt = 2423423434n;

// 8. Array
const names: string[] = ["Robin", "Hossen", "Rakib", "Miah"];

// Array of numbers
const rollNumbers: number[] = [49536, 59482, 48294, 29582, 49284, 23634];

// Array of boolean values
const checks: Boolean[] = [true, false, true, true, false, true, false, false];

// Array of mixed values
const mixedValues: (number | string | Boolean)[] = [
  34,
  "Robin",
  true,
  49,
  "Text",
  false,
];

const arr: [number, string] = [45, "Text"];

const arr2: [{ id?: string; name: string }] = [{ name: "Robin" }];

// 9. Object

const playerData: {
  readonly Team: "Bangladesh"; // Literal type data.
  firstName: string;
  lastName: string;
  age: number;
  gender: string;
  role: string;
  isMarried?: Boolean;
} = {
  Team: "Bangladesh",
  firstName: "Tamim",
  lastName: "Iqbal",
  age: 36,
  gender: "Male",
  role: "Left-Handed Batsman",
};

// 10. Function in TypeScript
