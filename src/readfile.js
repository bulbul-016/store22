const fs = require('fs');
const text = fs.readFileSync('index.js', "utf-8");
console.log(text);