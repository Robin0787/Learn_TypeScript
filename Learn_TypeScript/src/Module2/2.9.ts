{
  // Conditional Type
  type a1 = null;
  type b1 = undefined;

  type X = a1 extends null ? true : false;

  const value: X = true;

  interface Sheikh {
    bike: string;
    car: string;
    ship: string;
  }

  type checkVehicle<T> = T extends keyof Sheikh ? true : false;

  type hasVehicle = checkVehicle<"car">;

  const isHasVehicle: hasVehicle = true;

  console.log(isHasVehicle);

  //
}
