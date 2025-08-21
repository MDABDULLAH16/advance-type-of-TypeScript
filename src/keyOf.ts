{
  // key of generic

  type Rich = {
    bike: string;
    watch: string;
    car: string;
  };

  type owner1 = "bike" | "watch" | "car";
  type owner = keyof Rich;

  const getProperty = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "abc",
    age: 23,
    class: 4,
    address: "ctg",
  };

  const result = getProperty(user, "address");
  console.log(result);

  //
}
