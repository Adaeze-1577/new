const settings = {
    theme: "dark",
    notification: true,
};

Object.freeze(settings);


settings.theme = "light"; 
console.log(settings.theme); 


console.log(Object.isFrozen(settings)); 
