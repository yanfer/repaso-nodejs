//mandar y recibir archivos desde un navegador a un servidor web, se le conoce como http, es una forma de comunicar distintos computadores

const http = require("http");

//Create server tenemos que crear una funcion que se encargue de recibir los datos request y response
//Un servidor es un programa que se va a estar ejecutando siempre, no debe para su funcion
const server = http.createServer((request, response) => {
  //podemos decirle que si entra a cierto url dentro del localhost, puede dar un mensaje, en este caso about
  if (request.url === "/about") {
    response.write("acerca de");
    //se le debe poner un return para que termine la funcion si no, pasara a la siguiente tarea y tirara un error
    return response.end();
  }
  //tambien podemos agregar etiquetas html a las respuestas, si usamos backsticks podemos agregar mucho mas que simplemente una linea de codigo
  response.write(`
    <h1>Not Found</h1>
    <p>Esta pagina no se encontro</p>
    <a href="/about">ir a about</a>
    `);
  //Node pide que despues de escribir el contenido que se envia al cliente llame la funcion response.end para decir que ya acabo el mensaje
  response.end();
  //como esta funcion siempre tiene que estarse ejecutando dentro de ella, vamos a ejecutar despues de este metodo, un metodo .listen
  //metodo listen es para asignar el puerto en el que se estara escuchando
});

server.listen(3000);

console.log("servidor escuchando en el puerto 3000");
