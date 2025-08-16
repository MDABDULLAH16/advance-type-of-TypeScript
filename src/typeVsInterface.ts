{
  //

  type User = {
    name: string;
    address: string;
    age: number;
  };

  //if i declare same Type of interface, thats auto marge ;
  interface Employ {
    email: string;
    contact: number;
  }
  interface Employ {
    address: string;
  }

  const employ: Employ = {
    email: "abc@gmail.com",
    address: "dhaka",
    contact: 234,
  };
  console.log(employ);
  ///

  // array type declare with interface;
  interface Number {
    [index: number]: number;
  }
  const numbers: Number = [12, 23, 4, 53, 3];
  console.log(numbers);

  //function with interface:
  interface Add {
    (num1: number, num2: number): number;
  }

  const add: Add = (num1, num2) => num1 + num2;

  //
}
