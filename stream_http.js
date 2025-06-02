const http = require("http");
const { createReadStream } = require("fs");

const server = http.createServer((req, res) => {
  const fileSteam = createReadStream("./data/bigFile.txt", {
    encoding: "utf-8",
  });

  fileSteam.on("data", (chunk) => {
    //? createReadStream tiene un metodo especial llamado "pipe", para pasar el dato a otra funcion, y se lo vamos a pasar al objeto response
    fileSteam.pipe(res);
  });

  fileSteam.on("error", (error) => {
    console.log(error);
  });
});

server.listen(3000);
console.log(`server on port ${3000}`);
