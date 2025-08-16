{
  // generic interface
  interface Developer<T, X = null> {
    name: string;
    age: number;
    smartWatch: T;
    bike?: X;
  }
  interface SmartWatch {
    name: string;
    brand: string;
  }

  interface Bike {
    name: string;
    model: string;
    engineModel: number;
  }

  const developer: Developer<SmartWatch, Bike> = {
    name: "asdf",
    age: 34,
    smartWatch: {
      name: "apple",
      brand: "Samsung",
    },
    bike: {
      name: "Yamaha",
      engineModel: 234,
      model: "tesla",
    },
  };

  interface PoorWatch {
    name: string;
    price: number;
    release: number;
  }
  const poorDeveloper: Developer<PoorWatch> = {
    name: "ami",
    age: 19,
    smartWatch: {
      name: "casio",
      price: 200,
      release: 1990,
    },
  };

  //
}
