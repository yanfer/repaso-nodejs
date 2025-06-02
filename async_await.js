//Async y Await son la manera mas moderna y facil de usar funciones asincronas en js

//async sirve para especificar que una funcion dentro de su contenido esta utilizando codigo asincrono

//await es cuando usamos una funcion asincrona para especificar que ese codigo va a tomar algo de tiempo

const { readFile } = require("fs");

const getText = (pathFile) => {
 return new Promise(function (resolve, reject) {
  readFile(pathFile, "utf-8", (err, data) => {
   if (err) {
    reject(err);
   }
   resolve(data);
  });
 });
};

//un requerimiento para poder usar await, es que la funcion que la contenga debe tener la palabra clave "async"
async function read() {
 /* //ya no se necesita un then o catch, sino que una vez termine la ejecucion del codigo, el await me va a retornar el resultado y yo lo puedo guardar en una constante
 //para que esto funcione es necesario que await este dentro de una funcion mucho mas grande, en este caso read()
 const result = await getText("./data/first.txt");
 //para encadenarlo no necesito  poner un then, simplemente hacemos lo mismo que con result
 const result2 = await getText("./data/second.txt");
 console.log(result);
 console.log(result2); */

 //pero si ocurre un error?, hay una sintaxis especial de js que se le conoce como un trycatch

 try {
  const result = await getText("./data/first.txt");
  const result2 = await getText("./data/second.txt");
  console.log(result);
  console.log(result2);
 } catch (error) {
  //throw se usa para parar toda la funcion desde donde es uso para abajo, se usa con new Error para saber cual fue el error que se tuvo
  console.log(error);
 }
}

read();
