// Object data type in TS
const user: object = {
  name: "Robin",
  age: 19,
};

// Here is an example of object type with property type

const player: {
  readonly id: string; // Readonly Property
  name: string;
  age: number;
  role: string;
  isCaptain: boolean;
  gender: string;
  isMarried?: boolean; // Optional type
} = {
  id: "12031273sdfasdf",
  name: "Tamim Iqbal",
  age: 36,
  role: "Left-Handed batsman",
  isCaptain: false,
  gender: "Male",
  isMarried: true,
};

// 9. Object

const playerInfo: {
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
