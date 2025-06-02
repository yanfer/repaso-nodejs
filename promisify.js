const { readFile } = require("fs");
//util es un modulto que viene desde node para tener un codigo mas comodo
const { promisify } = require("util");

//eso es todo lo que se necesita para hacer una promesa
const readFilePromise = promisify(readFile);

async function read() {
 try {
  const result = await readFilePromise("./data/first.txt", "utf-8");
  const result2 = await readFilePromise("./data/second.txt", "utf-8");
  console.log(result);
  console.log(result2);
 } catch (error) {
  console.log(error);
 }
}

read();
