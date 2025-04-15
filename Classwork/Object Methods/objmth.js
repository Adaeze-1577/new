let personalInfo = {
    name: "Alice Akor",
    age: 30,
};

let contactInfo = {
    email: "aliceakor@gmsil.com",
    phone: "08145567890",
};


let userProfile1 = Object.assign({}, personalInfo, contactInfo);
console.log(userProfile1);
