const app = "I don't do much.";

const multiplier = (a, b) => {return a * b}

const doubler = multiplier.bind(null, 2)
console.log(doubler(5));
