"use strict";
// Basic Data types in TypeScript
// string
let firstName = "Robin";
// number
let phone = 2343;
// boolean
const isClicked = false;
// undefined
let x = undefined;
//null
let y = null;
//bigInt
let z = 740998n;
//symbol
let hello = Symbol.for("hello");
//Array of string values
let friends = ["Rachel", "Conway"];
// Array of number values
let rolls = [5, 3, 2, 3, 54, 6];
//Now if I try to push a string to the rolls array which's type is number defined then I will get an error
// rolls.push("50");
// Now it's giving me a error :
// Argument of type 'string' is not assignable to parameter of type 'number'.
// That means we can't push a string to a number typed array.
// tuple data type.
// Tuple is a special type of array.
let coordinates = [1, 5];
// This is an tuple of string and number coordinates
let nameAge = ["Robin", 19];
// New code start's in the 1.5.ts file
// Practice Code
// Data types in TS
// 1. String
let text = "I love TypeScript";
// 2. Number
const number = 456356;
// 3. Boolean
const isChecked = true || false;
// 4. Null
let person = null;
// 5. Undefined
let value = undefined;
// 6. Symbol
let helloSymbol = Symbol.for("Hello");
// 7. BigInt
let longIng = 2423423434n;
// 8. Array
const names = ["Robin", "Hossen", "Rakib", "Miah"];
// Array of numbers
const rollNumbers = [49536, 59482, 48294, 29582, 49284, 23634];
// Array of boolean values
const checks = [true, false, true, true, false, true, false, false];
// Array of mixed values
const mixedValues = [
    34,
    "Robin",
    true,
    49,
    "Text",
    false,
];
const arr = [45, "Text"];
const arr2 = [{ name: "Robin" }];
// 9. Object
const playerData = {
    Team: "Bangladesh",
    firstName: "Tamim",
    lastName: "Iqbal",
    age: 36,
    gender: "Male",
    role: "Left-Handed Batsman",
};
// 10. Function in TypeScript
