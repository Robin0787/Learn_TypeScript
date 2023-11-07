{
  // utility types in TypeScript

  // Pick utility
  type User = {
    id: number;
    name: string;
    age: number;
    email: string;
  };

  type NameAge = Pick<User, "name" | "age">;

  // Omit utility
  type UserWithoutAge = Omit<User, "age">;

  const user: UserWithoutAge = {
    id: 234,
    name: "Robin",
    email: "robin@gmail.com",
  };

  // Required utility
  type RequiredUserType = Required<User>;

  // Partial utility
  type PartialUser = Partial<User>;

  // Readonly utility

  type ReadonlyUser = Readonly<User>;

  const user1: ReadonlyUser = {
    id: 234,
    name: "Robin",
    age: 19,
    email: "robin@gmail.com",
  };

  // Record utility
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   }

  type MyObj = Record<string, string>;
  const obj1: MyObj = {
    a: "Aa",
    b: "Bb",
    c: "Cc",
    d: "Dd",
  };

  const user2: Record<string, unknown> = {
    id: 213423,
    name: "Robin",
    age: 19,
    isMarried: false,
  };

  console.log(user2);
  //
}
