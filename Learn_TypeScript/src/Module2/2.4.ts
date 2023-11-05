{
  //

  // Generic with interface
  interface GenericObject<X, Y> {
    name: X;
    roll: Y;
  }

  const user5: GenericObject<string, number> = {
    name: "Robin",
    roll: 19,
  };
  //
}
