//Nuevas versiones de node es mucho mas facil hacer promesas y ya no tenemos que convertirlo nosotros mismos, desde fs podemos convertilo con /promises
//Tengo las mismas funciones que antes pero ya estan convertidas en promesas
const { readFile } = require("fs/promises");

async function read() {
 try {
  const result = await readFile("./data/first.txt", "utf-8");
  const result2 = await readFile("./data/second.txt", "utf-8");
  console.log(result);
  console.log(result2);
 } catch (error) {
  console.log(error);
 }
}

read();
