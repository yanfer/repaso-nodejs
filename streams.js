//? los Steams ayudan a poder mandar un archivo grande o divir un archivo grande en multiples partes para que pueda ser transmitido facilmente

const { writeFile } = require("fs/promises");

const createBigFile = async () => {
  await writeFile("./data/bigFile.txt", "hello world".repeat(10000)); //~repeat es para decirle cuantas veces queremos repetir este texto
};

createBigFile();

//? Aqui no usamos fs/promise porque createReadStream esta basado en eventos, asi que se ejecuta despues de que pase cierto evento
const { createReadStream } = require("fs");

//! createReadStream tiene como parametro un objeto adicional y tiene propiedades diferentes
const stream = createReadStream("./data/bigFile.txt", {
  //*para pasarlo como string
  encoding: "utf-8",
  //*highWaterMark para saber cuantos chunks se envian en cada paquete, y hay muchos mas
});

//^ el evento "data" es para recibir datos
stream.on("data", (chunck) => {
  //~ un chunck es un trozo de informacion
  console.log(chunck);
});

//createReamStream tambien tiene varios eventos dentro de on
//^ "close" cuando se cierra la conexion

//^ "end" para cuando finaliza de mostrar los datos
stream.on("end", () => {
  console.log("Ya termine de leer el archivo");
});

//^ "error" para capturar el error
stream.on("error", (error) => {
  console.log(error);
});
