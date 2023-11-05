"use strict";
// Object
const friends1 = ["Adam", "Philips", "Ricky", "Johny", "Ponting"];
const friends2 = ["Rony", "Morgan", "Steven", "Joseph"];
friends1.push(...friends2);
const frontEndMentors = {
    typescript: "Mezbaul",
    redux: "Mir",
    next: "Tanmoy",
};
const backEndMentors = {
    prisma: "Firoz",
    dbms: "Mizan",
    cloud: "Nahid",
};
const allMentors = {
    ...frontEndMentors,
    ...backEndMentors,
};
// Learning rest operators
const greetFriends = (...friends) => {
    for (let frnd of friends) {
        console.log("Hi", frnd);
    }
};
greetFriends("Robin", "Abdul", "Gleen");
