{
  // Statics in OOP

  class Counter {
    static count: number = 0;
    static increment() {
      return (Counter.count += 1);
    }
    static decrement() {
      return (Counter.count -= 1);
    }
  }

  //   const counter1 = new Counter();
  console.log(Counter.increment());
  console.log(Counter.increment());
  console.log(Counter.increment());

  //   const counter2 = new Counter();
  console.log(Counter.increment());
  //
}
