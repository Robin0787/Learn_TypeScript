{
  // OOP - Class in OOP

  interface AnimalT {
    name: string;
    species: string;
    sound: string;
  }

  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}
    makeSound() {
      console.log(`The ${this.name} says ${this.sound}.`);
    }
    callThis = () => {
      console.log(this.name);
    };
  }

  const dog = new Animal("Browne", "Dog", "Ghew Ghew");
  const cat = new Animal("Beluga", "Cat", "Meaw Meaw");

  cat.callThis();

  //
}
