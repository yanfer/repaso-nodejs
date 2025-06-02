//en node vamos a estar usando los eventos todo el tiempo y crearemos un event emitter, node provee un modulo para crear eventos
//podemos llamarlo como querramos pero lo dejamos asi para ser correctos con la documentacion de nodejs
//EventEmitter aqui es un constructor
const EventEmitter = require("events");

//ahora creamos un nuevo evento de la siguiente manera
//^ new esta relacionada con la manera de crear objetos en javascript, new hace uso de los elementos del constructor para usarlos en este nuevo objeto
//Este nuevo objeto va a permitir escuchar determinados eventos
const customEmitter = new EventEmitter();

//?.emit es para emitir un evento, es como si le hubiera dado click para que se active
//?.on sirve para escuchar determinado evento cuando pase, es como el addEventListener

//lo que aqui hacemos es que cuando escuches un evento, "response" por ejemplo, vamos a recibir datos "data" y los vere por consola
//! Es importante que primero cree el evento y luego ejecute los emits

customEmitter.on("response", (data, secondData) => {
  console.log("recived");
  console.log(data);
  console.log(secondData);
});

customEmitter.emit("response", "Hello World", [1, 2, 3]);
