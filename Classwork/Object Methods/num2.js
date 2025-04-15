const product = {
    id: "HP 101",
    name: "Laptop",
    price: 999.99,
    available: true,
};

const formattedArray = Object.entries(product).map(([key, value]) => `${key}: ${value}`);
console.log(formattedArray);
