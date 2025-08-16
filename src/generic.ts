{
  //generic type;

  //   const rollNumbers: number[] = [23, 3, 3, 4, 4, 5];
  const rollNumbers: Array<number> = [23, 3, 3, 4, 4, 5];

  //   const friends: string[] = ["a", "b", "c"];
  const friends: Array<string> = ["a", "b", "c"];

  //   const boolArray: boolean[] = [false, true, false];
  const boolArray: Array<boolean> = [false, true, false];

  // Array of object
  type GenericArray<T> = T[];
  const names: GenericArray<{ name: string; age: number }> = [
    {
      name: "mejba",
      age: 12,
    },
    {
      name: "jhankar",
      age: 23,
    },
  ];
  console.log(names);

  //
}
