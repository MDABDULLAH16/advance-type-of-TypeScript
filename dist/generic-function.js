"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    //function generic
    const add = (param) => [param];
    const addWithGeneric = (param) => [param];
    const result = add("34");
    console.log(result);
    const result1 = addWithGeneric(34);
    const result2 = addWithGeneric("sd");
    console.log(result1, result2);
    const objectWithGeneric = (param) => {
        return [param];
    };
    const user = [
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
    const result3 = objectWithGeneric(user);
    console.log(result3);
    const arrayWithTuple = (X, Y) => {
        return [X, Y];
    };
    const result4 = arrayWithTuple("hello", 23);
    console.log(result4);
    // return with Something
    const freeCourse = (param) => {
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
