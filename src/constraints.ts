{
  //
  interface Person {
    name: string;
    age: number;
  }
  interface PersonWithSkills extends Person {
    skill: string;
  }
  const personaInfo = <T extends PersonWithSkills>(person: T): string => {
    return `${person.name} is ${person.age} years old with skills with ${person.skill}`;
  };

  const info = { name: "Asif", age: 25, skill: "React" };

  const result = personaInfo(info);
  console.log(result);

  //
}
