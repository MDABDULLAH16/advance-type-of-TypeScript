{
  //function generic

  const add = (param: string) => [param];

  const addWithGeneric = <T>(param: T): T[] => [param];

  const result = add("34");
  console.log(result);
  const result1 = addWithGeneric<number>(34);
  const result2 = addWithGeneric<string>("sd");
  console.log(result1, result2);

  const objectWithGeneric = <T>(param: T): T[] => {
    return [param];
  };
  interface User {
    name: string;
    age: number;
    isPresent: boolean;
  }
  type Users = User[];
  const user: Users = [
    {
      name: "hello",
      age: 234,
      isPresent: true,
    },
    {
      name: "hello",
      age: 234,
      isPresent: false,
    },
  ];

  const result3 = objectWithGeneric<Users>(user);
  console.log(result3);

  const arrayWithTuple = <T, Q>(X: T, Y: Q): [T, Q] => {
    return [X, Y];
  };

  const result4 = arrayWithTuple<string, number>("hello", 23);
  console.log(result4);

  // return with Something

  const freeCourse = <T>(param: T) => {
    const course = "Next Level Web Development";
    return {
      ...param,
      course,
    };
  };
  const result5 = freeCourse({
    name: "abdullah",
    age: 234,
    email: "abdullahwebdev15@gmail.com",
  });
  console.log(result5);

  //
}
