{
  // Mapped types

  //   interface AreaNumber {
  //     height: string;
  //     width: string;
  //   }

  type Area<T, Q> = {
    [key in keyof T]: Q;
  };

  const area: Area<
    {
      height: number;
      width: number;
    },
    string
  > = {
    height: "12",
    width: "4",
  };

  //
}
