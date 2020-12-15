const fs = require ('fs');

/// command for read a file .txt to save in a variable 
const textIn = fs.readFileSync('./txt/input.txt','utf-8');
console.log(textIn);

const textOut = `${textIn} \n Create on:${Date.now()} `;

// command for write a file .txt with a variable concatenado 
fs.writeFileSync('./txt/output.txt',textOut);

fs.readFile(/)