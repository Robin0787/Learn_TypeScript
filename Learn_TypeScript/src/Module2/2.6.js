"use strict";
{
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return {
            course,
            ...student,
        };
    };
    const student1 = addCourseToStudent({
        id: 1233,
        name: "Robin",
        age: 19,
        email: "mohammadrobin636@gmail.com",
        hasWatch: "Apple Watch",
    });
    const student2 = addCourseToStudent({
        id: 1244,
        name: "Rachel",
        age: 22,
        email: "reachel@gmail.com",
        devType: "NLWD",
    });
    const student3 = addCourseToStudent({
        id: 1255,
        name: "Clerk",
        age: 25,
        email: "clerk@gmail.com",
        computer: {
            brand: "Acer",
            model: "Extensa-15",
            releaseYear: 2018,
        },
    });
    console.log(student3);
    //
}
