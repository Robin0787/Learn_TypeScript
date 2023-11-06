{
  // Practice Module - 2

  // type assertion
  //   let value: any;
  //   value = 33;
  //   const result = (value as number).toFixed(2);
  //   value = "I love JavaScript";
  //   const result2 = (value as string).charAt(8);

  //   interface Error {
  //     message: string;
  //   }

  //   try {
  //   } catch (error) {
  //     console.log((error as Error).message);
  //   }

  //   // Interface

  //   interface User {
  //     name: string;
  //     age: number;
  //   }

  //   const user: User = {
  //     name: "Robin",
  //     age: 19,
  //   };

  //   interface Arr {
  //     [index: number]: number;
  //   }

  //   type Arr2 = number[];

  //   const arr: Arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  // Generic

  type CustomType<T, Q> = Array<T | Q>;

  const arr1: CustomType<number, unknown> = [1, 2, 3, 4, 5];
  const arr2: CustomType<string, unknown> = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
  ];
  const arr3: CustomType<Boolean, null> = [
    true,
    false,
    false,
    true,
    true,
    null,
    null,
  ];
}
