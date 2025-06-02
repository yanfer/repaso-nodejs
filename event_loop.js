//Normalmente al ejecutar un codigo se ejecuta de manera sincrona

console.log("first");

//Aqui vemos que el codigo de js se ejecuta de manera asincrona, ya que first y third no tuvieron que esperar para que se ejecutara second
//primero de ejecuta first, pero como second tiene un timeout, node lo coloca para despues como una tarea pendiente y sigue con third

/* setTimeout(() => {
 console.log("second");
}, 3000); */

//Si pusieramos su timeout en 0 pensariamos que seguiria como antes, pero al igual que el ejemplo anterior lo ejecuta hasta despues.
//Lo que hace node para poder manejar distintas tareas al mismo tiempo es que cuando una tarea se va haciendo, ve si hay una tarea que se tendra tiempo para ejecutarse aunque sea 0 y lo pondra para despues

setTimeout(() => {
 console.log("second");
}, 0);

console.log("third");

const http = require("http");

const server = http.createServer((req, res) => {
 if (req.url === "/") {
  res.write("welcome to the server");
  return res.end();
 }

 if (req.url === "/about") {
  //blocking code, este codigo bloquea el hilo de ejecucion de node, ya que no permite que que se interactue con otro hilo del servidor
  //por eso se usa codigo asincrono, ya que se ejecuta en un segundo plano mientras el codigo se ejecuta o se trae mas peticiones

  /* for (let i = 0; i < 10000; i++) {
   console.log(Math.random() * i);
  }
 */

  return res.end("About page");
 }

 res.end("not found");
});

server.listen(3000);
console.log("server on port 3000");
