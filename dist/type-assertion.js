"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
{
    //
    //type assertion;
    let name;
    name = "Next Level Web Development";
    console.log(name);
    name;
    console.log(name.split(" "));
    const kiloToGram = (value) => {
        if (typeof value === "string") {
            const convertValue = parseFloat(value) * 1000;
            return convertValue;
        }
        if (typeof value === "number") {
            const gm = value * 1000;
            return gm;
        }
    };
    const result = kiloToGram("55");
    const result2 = kiloToGram(5);
    console.log(result, result2);
    //
}
