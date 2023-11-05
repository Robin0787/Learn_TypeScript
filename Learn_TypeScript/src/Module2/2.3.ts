{
  //
  // Generic type

  type GenericArray<T> = Array<T>;

  //   const numArray: number[] = [1,2,3,4,5];
  const numArray: GenericArray<number> = [1, 2, 3, 4, 5];

  //   const strArray: string[] = ['text', 'first', 'hello'];
  const strArray: GenericArray<string> = ["text", "first", "hello"];

  // const boolArray : boolean[] = [true, false, true, false];
  const boolArray: GenericArray<boolean> = [true, false, true, false];

  interface ObjectInArray {
    name: string;
    age: number;
  }

  const obj: GenericArray<ObjectInArray> = [
    {
      name: "Robin",
      age: 19,
    },
    {
      name: "Ahmed",
      age: 19,
    },
  ];

  // Tuple data type with Generic type

  type GenericTuple<x, y> = [x, y];

  const manush: GenericTuple<string, string> = ["Mr.X", "Ms.Y"];

  const manushWithID: GenericTuple<number, { name: string }> = [
    1313,
    { name: "Robin" },
  ];

  //
}
