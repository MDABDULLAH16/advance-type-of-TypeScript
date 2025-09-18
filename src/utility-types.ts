{
  // utility types
  //pick

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  //pick the specific type ;
  type Name = Pick<Person, "name" | "age">;

  //omit means remove the properties type and make kew types
  type Contact = Omit<Person, "name" | "age">;

  // make all required ;
  type MakeRequired = Required<Person>;

  //make all optional types;
  type MakeOptional = Partial<Person>;

  //readOnly types;
  type MakeReadOnly = Readonly<Person>;
  const person1: MakeReadOnly = {
    name: "ss",
    age: 3,
    contactNo: "3",
    email: "ad",
  };
  // person1.age=1 you can't change this because this is readOnly

  //automatic type define
  type Animal = {
    pet: string;
    cat: string;
  };

  type AllAnimal = Record<string, unknown>;

  const animal1: AllAnimal = {
    cat: "biral",
    pet: "dog",
  };

  //
}
