{
  // Practice Module - 2

  // interface User1 {
  //   id: number;
  //   name: string;
  //   age: number;
  // }

  // interface User2 {
  //   address: {
  //     current: string;
  //     permanent: string;
  //   };
  // }

  // type User = User1 & User2;

  // const user: User = {
  //   id: 234,
  //   name: "Robin",
  //   age: 19,
  //   address: {
  //     current: "Brahmanbaria",
  //     permanent: "Brahmanbaria",
  //   },
  // };

  // interface Arr {
  //   [index: number]: number
  // }

  // const arr: Arr = [1,2,3,4,5,6];

  // Generics in TS

  type CustomType<T> = T;

  const text: CustomType<string> = "I love Bangladesh";

  const arr: CustomType<number[]> = [1, 2, 3, 4, 5];

  type CustomObj<T> = T;

  const obj: CustomObj<{ id: number; name: string; age: number }> = {
    id: 234234,
    name: "Robin",
    age: 19,
  };

  interface Person<T> {
    id: number;
    name: string;
    role: string;
    bike: T;
  }

  interface Bike {
    brand: string;
    model: string;
  }

  const person: Person<Bike> = {
    id: 2342,
    name: "Robin",
    role: "Full-Stack Developer",
    bike: {
      brand: "Yamaha",
      model: "Yamaha x-12",
    },
  };
  console.log(person);

  const isTrue: Boolean = !!"true";

  type GenericArray<T> = T[];

  const arr2: GenericArray<number> = [1, 2, 3, 4, 5];

  console.log(arr2);

  //
}
