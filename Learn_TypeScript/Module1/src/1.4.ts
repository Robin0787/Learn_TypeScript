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
