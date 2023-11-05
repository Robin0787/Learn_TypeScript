"use strict";
{
    // Object Destructuring
    const user = {
        id: 234,
        name: {
            firstName: "Robin",
            middleName: "",
            lastName: "Hossen",
        },
        contactNo: +8801799618056,
        address: "Bangladesh",
    };
    const { contactNo, name: { firstName, middleName, lastName }, address, } = user;
    // Array Destructuring
    const myFriends = ["Chandler", "Joey", "Ross", "Rachel"];
    const [, , best] = myFriends;
}
