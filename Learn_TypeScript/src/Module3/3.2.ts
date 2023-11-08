{
  // Inheritance in OOP

  class Person {
    name: string;
    age: number;
    address: string;

    constructor(name: string, age: number, address: string) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
    sleepTime(sleepHours: number) {
      console.log(`${this.name} will sleep ${sleepHours} hours.`);
    }
  }

  class Student extends Person {
    constructor(name: string, age: number, address: string) {
      super(name, age, address);
    }
  }

  class Teacher extends Person {
    designation: string;

    constructor(
      name: string,
      age: number,
      address: string,
      designation: string
    ) {
      super(name, age, address);
      this.designation = designation;
    }
    takeClasses(numOfClasses: number) {
      console.log(`${this.name} will take ${numOfClasses} classes.`);
    }
  }

  const student1 = new Student("Robin", 19, "Brahmanbaria");
  student1.sleepTime(5);

  const teacher1 = new Teacher("Abdullah", 34, "Dhaka", "Assistant Teacher");
  teacher1.takeClasses(4);

  //
}
