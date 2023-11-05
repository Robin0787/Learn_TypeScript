{
  //
  // Type assertion

  let data: any;

  data = "I love Bangladesh";
  const result = (data as string).charAt(3);
  //   console.log(result);

  data = 10;
  const result2 = (data as number).toFixed(2);
  //   console.log(result2);

  const minuteToSecond = (
    minute: string | number
  ): string | number | undefined => {
    if (typeof minute == "string") {
      const result = +minute * 60;
      return result.toString();
    } else if (typeof minute === "number") {
      const result = minute * 60;
      return result;
    }
  };

  const result3 = minuteToSecond(12) as number;
  const result4 = minuteToSecond("12") as string;
  console.log({ result3, result4 });

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }

  //
}
