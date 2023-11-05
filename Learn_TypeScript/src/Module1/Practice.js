"use strict";
{
    // Practice TypeScript
    const text = "I love JavaScript";
    const numbers = [1, 2, 3, 4, 5];
    const data = ["Robin", 19];
    const obj = {
        country: "Bangladesh",
        name: "Robin",
        age: 19,
        role: "Batsman all-rounded",
        isMarried: false,
        height: "5 feet 4 inches",
    };
    const obj2 = {
        name: "",
        age: 19,
        address: {
            district: "Brahmanbaria",
            upazila: "Nasirnagar",
        },
    };
    const addSum = (...nums) => {
        const sum = nums.reduce((previousValue, currentValue) => previousValue + currentValue);
        return sum;
    };
    addSum(34, 5, 4, 3, 4, 53);
    const greet = (...friends) => {
        // console.log(friends);
    };
    greet("Robin", "Rakib", "Rony", "Rahat");
    const { name, age, skills, } = {
        name: "Robin",
        age: 19,
        skills: ["JavaScript", "React", "Express.js", "MongoDB"],
    };
    // Union type
    const data1 = ["Robin", 19];
    const developer = {
        name: "Robin",
        skills: ["React.js", "Express.js", "MongoDB"],
        designation1: "Front-End Developer",
        designation2: "Back-End Developer",
    };
    // nullish coalescing operator
    const isAuthorized = "";
    const result = isAuthorized ?? false;
    console.log(result);
}
