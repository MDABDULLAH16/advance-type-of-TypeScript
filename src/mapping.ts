{
  const arrayOfNumbers = [1, 2, 34, 5];

  //   const arrayOfString = arrayOfNumbers.map((number) => number.toString());
  //     console.log(arrayOfString);

  type areaString = {
    height: string;
    width: string;
  };
  type height = areaString["height"]; //look up type

  type land<T> = {
    [key in keyof T]: T[key]; //T[key] is look up type;
  };

  const landArea: land<{ height: string; width: number }> = {
    height: "32",
    width: 23,
  };
  //
}
