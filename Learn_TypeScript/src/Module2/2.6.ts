{
  //

  // Generic with Function type

  //   const createArray = (param: string): string[] => {
  //     return [param];
  //   };

  //   const createArrayWithGeneric = <T>(param: T): T[] => {
  //     return [param];
  //   };

  //   const result = createArray("Bangladesh");
  //   const resultGeneric = createArrayWithGeneric<string>("Bangladesh");

  //   interface User {
  //     id: string;
  //     name: string;
  //   }

  //   const resultGenericObject = createArrayWithGeneric<User>({
  //     id: "234",
  //     name: "Robin",
  //   });

  //   const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
  //     return [param1, param2];
  //   };

  //   const resultGenericTuple = createArrayWithTuple<string, number>(
  //     "I love you",
  //     3000
  //   );
  //   console.log(resultGenericTuple);

  //   const addCourseToStudent = <T>(student: T): T => {
  //     const course = "Next Level Web Development";
  //     return {
  //       course,
  //       ...student,
  //     };
  //   };

  //   interface Student {
  //     name: string;
  //     age: number;
  //     email: string;
  //   }
  //   const result = addCourseToStudent<Student>({
  //     name: "Robin",
  //     age: 19,
  //     email: "mohammadrobin636@gmail.com",
  //   });

  //   console.log(result);

  // Constraints

  interface Student {
    id: number;
    name: string;
    age: number;
    email: string;
  }

  const addCourseToStudent = <T extends Student>(student: T): T => {
    const course = "Next Level Web Development";
    return {
      course,
      ...student,
    };
  };

  const student1 = addCourseToStudent({
    id: 1233,
    name: "Robin",
    age: 19,
    email: "mohammadrobin636@gmail.com",
    hasWatch: "Apple Watch",
  });
  const student2 = addCourseToStudent({
    id: 1244,
    name: "Rachel",
    age: 22,
    email: "reachel@gmail.com",
    devType: "NLWD",
  });
  const student3 = addCourseToStudent({
    id: 1255,
    name: "Clerk",
    age: 25,
    email: "clerk@gmail.com",
    computer: {
      brand: "Acer",
      model: "Extensa-15",
      releaseYear: 2018,
    },
  });

  console.log(student3);
  //
}
