{
  //

  // Generic constraint with keyof operator

  // type Vehicles = {
  //     bike: string;
  //     car: string;
  //     ship: string;
  // }

  // type Owner = 'bike' | 'car' | 'ship';

  // type Owner2 = keyof Vehicles;

  // const vehicle : Owner2 = 'car';

  // const getPropertyValue = <X, Y extends keyof X> (obj: X, key: Y) => {
  //     return obj[key];
  // }

  // const user = {
  //     name: 'Robin',
  //     age: 19,
  //     email: 'mohammadrobin636@gmail.com'
  // }

  // const result = getPropertyValue(user, 'age');

  // Practice constraint types in TypeScript

  interface Student {
    id: number;
    name: string;
    email: string;
  }
  const addCourse = <T extends Student>(student: T) => {
    return {
      ...student,
      course: "Next Level Web Development",
    };
  };

  const student1 = addCourse({
    id: 234,
    name: "Robin",
    email: "robin@gmail.com",
  });

  const student2 = addCourse({
    id: 2342,
    name: "Rachel",
    email: "rachel@gmail.com",
    age: 19,
    userName: "rachel834",
    address: "America",
  });

  const student3 = addCourse<{
    id: number;
    name: string;
    email: string;
    age?: number;
  }>({
    id: 234,
    name: "Adam",
    email: "adam@gmail.com",
    age: 24,
  });

  console.log(student1);

  //
}
