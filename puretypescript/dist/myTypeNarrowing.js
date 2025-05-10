"use strict";
function detectType(val) {
    if (typeof val == "string") {
        return val.toUpperCase();
    }
    return val + 1;
}
;
const someFunc = (para) => {
    if (typeof para == "string") {
        para.toUpperCase();
        return "string";
    }
    else if (typeof para == "number") {
        para + 3;
        return "number";
    }
    para[0];
    return "object";
};
function provideId(id) {
    if (!id) {
        console.log("Provide id");
    }
    //somecode...
    id === null || id === void 0 ? void 0 : id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs == "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
    else if (strs === "") {
        console.log("Freaking empty string");
    }
    console.log("Put some value you ducking idiot");
    return 0;
}
;
;
;
// in operator can be used to narrowing interfaces
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        console.log(account.isAdmin);
        return account.isAdmin;
    }
    console.log(account.name);
}
