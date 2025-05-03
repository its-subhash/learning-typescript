// Works just as type (as of my current understaing)
// you can define methods inside interface ig.
var darsh = {
    dbId: 22,
    email: "something@",
    userId: 543,
    startTrial: function () {
        return "done";
    }
};
var some = {
    dbId: 56434,
    email: "@.com",
    userId: 6545,
    googleAuth: false,
    startTrial: function () {
        return "hey heyyyy";
    }
};
var couponForDarsh = {
    dbId: 54,
    dbID: 54,
    username: "DarshDCoding",
    couponcode: function (code, fee, discont) {
        var CouponCodeBase = ["Darsh20", "DarshDCoding45"]; //probably getting form some API call...
        if (code in CouponCodeBase) {
            var discountedPrize = fee - (fee * (discont / 100));
            return "discounted amount ".concat(discountedPrize);
        }
        return "Discount Can't be proceed, please check the code again.";
    },
};
var Raghav = {
    dbId: 45, //shit i forgot that i am already taking id in it.
    dbID: 45,
    username: "RaghavTheGenious",
    googleAuth: false,
    couponcode: function (coupon, fee, disc) {
        var CouponCodeBase = ["Darsh20", "DarshDCoding45"];
        if (coupon in CouponCodeBase) {
            var discountedPrize = fee - (fee * (disc / 100));
            return "discounted amount ".concat(discountedPrize);
        }
        return "Discount Can't be proceed, please check the code again.";
    },
};
// now....how will merchantName interface look??
var DarshDMerchant = {
    merchName: "Darshhhh", //bro I forgot to add this only...lol
    dbID: 55,
    dbId: 55,
    username: "MaiHuMerchant",
    googleAuth: false,
    couponcode: function (code, fee, disc) {
        return "Bhaad me ja.";
    },
    anotherFunc: function () {
        return 1;
    },
};
