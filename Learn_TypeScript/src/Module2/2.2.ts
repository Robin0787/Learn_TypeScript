{
  //

  // Interface in TypeScript

  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: number };

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User1 {
    role: number;
  }

  const user: UserWithRole2 = {
    name: "Robin",
    age: 19,
    role: 7,
  };

  // interface with array
  type Roll1 = number[];

  const rollNumbers: Roll1 = [1, 2, 3, 4, 5];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumbers2: Roll2 = [6, 7, 8, 9, 10];

  // Interface with Function

  type Add = (a: number, b: number) => number;
  const add: Add = (a, b) => a + b;
  add(9324, 234);

  interface Add2 {
    (a: number, b: number): number;
  }
  const add2: Add2 = (a, b) => a + b;
  add2(5324, 3233);
  //
}
