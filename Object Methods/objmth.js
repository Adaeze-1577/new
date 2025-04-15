let personalInfo = {
    name: "Alice ApeJoye",
    age: 30,
};

let contactInfo = {
    email: "aliceapejoye@gmsil.com",
    phone: "08145567890",
};


let userProfile1 = Object.assign({}, personalInfo, contactInfo);
console.log(userProfile1);
