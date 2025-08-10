{
  //
  //type assertion;
  let name: any;
  name = "Next Level Web Development";
  console.log(name);

  name as string;
  console.log(name.split(" "));

  const kiloToGram = (value: string | number): string | number | undefined => {
    if (typeof value === "string") {
      const convertValue = parseFloat(value) * 1000;
      return convertValue;
    }
    if (typeof value === "number") {
      const gm = value * 1000;
      return gm;
    }
  };

  const result = kiloToGram("55") as string;
  const result2 = kiloToGram(5) as number;
  console.log(result, result2);

  //
}
