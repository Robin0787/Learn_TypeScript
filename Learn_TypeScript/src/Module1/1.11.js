"use strict";
{
    // ternary operator || optional chaining || nullish coalescing operator
    const age = 15;
    const status = age >= 18 ? "Adult" : "Teenager";
    // nullish coalescing operator
    const isAuthenticated = {};
    const result = isAuthenticated ?? "Guest";
    console.log(result);
}
