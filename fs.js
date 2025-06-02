//para trabajar con los archivos en node necesitamos usar el modulo fs(file system)
const { error } = require("console");
const fs = require("fs");

/* //Este methodo lee un archivo
const first = fs.readFileSync("./data/first.txt", "utf-8");
const second = fs.readFileSync("./data/second.txt");

//devuelve un buffer, que no es mas que el dato dentro first.txt en formato crudo, para formatearlo usamos la propiedad utf-8
console.log(first); // <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64>   ----   hello world

console.log(second.toString()); // tambien podemos convertirlo a string de la siguiente manera

//para crear archivos y crea en el archivo especificado
fs.writeFileSync("./data/third.txt", "este es un tercer archivo creado");

//tambien podemos pasarle info de otro lado
const content = "este es el contenido del archivo a crear";
fs.writeFileSync("./data/fourth.txt", content, {
 //si queremos agregar mas contenido y no sobreescribir hacemos lo siguiente, 'a' es de append
 flag: "a",
}); */

//codigo sincrono, es codigo que tenemos que esperar a que termine para continuar con otras tareas
//asincono es hacer una tarea mientras se ejecute otra, asincrono usa mejor el cpu y no desperdicia con tiempos muertos

/* METODO ASYNCRONO */
//vamos a hacer lo mismo que lo que hicimos arriba de manera asincrona, para hacerlo se ejecuta una funcion, para ver si se pudo hacer o hubo un error
//Esta funcion (desde el arrow function hasta el console.log(data)) de abajo se llama un callback, porque se ejecuta despues de que se termina la tarea anterior (el fs.readFile)
fs.readFile("./data/first.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data);
  //Dentro de un callback se puede hacer una cadena sincrona, osea que este codigo se aplica despues de terminar la tarea anterior
  fs.readFile("./data/second.txt", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
    }
    console.log(data);

    fs.writeFile(
      "./data/newFile.txt",
      "archivo creado asyncronamente desde fs",
      (err, data) => {
        console.log(err);
        console.log(data);
      }
    );
  });
});
