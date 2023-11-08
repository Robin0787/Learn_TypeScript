"use strict";
{
    const addCourse = (student) => {
        return {
            ...student,
            course: "Next Level Web Development",
        };
    };
    const student1 = addCourse({
        id: 234,
        name: "Robin",
        email: "robin@gmail.com",
    });
    const student2 = addCourse({
        id: 2342,
        name: "Rachel",
        email: "rachel@gmail.com",
        age: 19,
        userName: "rachel834",
        address: "America",
    });
    const student3 = addCourse({
        id: 234,
        name: "Adam",
        email: "adam@gmail.com",
        age: 24,
    });
    console.log(student1);
    //
}
