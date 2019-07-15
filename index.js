const names = ["Ignacio", "Jorge", "Ana", "Didier", "Javier", "Soledad"];

const head = ([x, ...n]) => x;
const tail = ([x, ...n]) => n;

console.log("First Element", head(names));
