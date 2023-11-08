"use strict";
{
    //
    // Type assertion
    let data;
    data = "I love Bangladesh";
    const result = data.charAt(3);
    //   console.log(result);
    data = 10;
    const result2 = data.toFixed(2);
    //   console.log(result2);
    const minuteToSecond = (minute) => {
        if (typeof minute == "string") {
            const result = +minute * 60;
            return result.toString();
        }
        else if (typeof minute === "number") {
            const result = minute * 60;
            return result;
        }
    };
    const result3 = minuteToSecond(12);
    const result4 = minuteToSecond("12");
    console.log({ result3, result4 });
    try {
    }
    catch (error) {
        console.log(error.message);
    }
    //
}
