{
  //
  //

  interface Developer<T, Q> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike: Q;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch, null> = {
    name: "Robin",
    computer: {
      brand: "Acer",
      model: "Extensa-15",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Emilab",
      model: "ks33",
      display: "OLED",
    },
  };

  interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: Boolean;
    sleepTrack: Boolean;
  }

  interface Bike {
    model: string;
    engineCapacity: string;
  }

  const richDeveloper: Developer<AppleWatch, Bike> = {
    name: "Robin",
    computer: {
      brand: "Acer",
      model: "Extensa-15",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple",
      model: "ks33",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      model: "Yamaha",
      engineCapacity: "300cc",
    },
  };
  //
}
