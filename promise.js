//promesas, nos permite escribir codigo asincrono mas facil de entender que los callbacks, ya que se va mucho a la derecha.

const { readFile } = require("fs");

//Los callback pueden ser dificiles de leer en un proyecrto real

/* readFile("./data/first.txt", "utf-8", (err, data) => {
 if (err) {
  console.log(err);
 }

 console.log(data);
});
 */

//Para arreglar eso js tiene un objeto especial llamado promise, no se importa de ningun lado ya esta dentro del propio js
//tiene 2 parametros para saber si la tarea se resolvio o si tuvo un error

//vamos a almacenar esa promesa en una funcion
const getText = (pathFile) => {
 //se debe siempre regresar la promesa
 return new Promise(function (resolve, reject) {
  //readFile lee el archivo, en formato string, lo ejecuta como un callback
  readFile(pathFile, "utf-8", (err, data) => {
   if (err) {
    //si da un error le pasa ese error a reject
    reject(err);
   }
   //si todo sale bien pasa los datos a la funcion resolve
   resolve(data);
  });
 });
};

getText("./data/fourth.txt")
 //.then se usa para promesas y es para decir que si todo termina bien y lo reciba lo maneje de la siguiente manera
 .then((result) => console.log(result))
 .then(() => getText("./data/first.txt"))
 //este then, da el resultado de el getText en la linea de arriba
 .then((result) => console.log(result))
 //pero si todo sale mal, se usa catch, que normalmente es para manejar el error
 .catch((error) => console.log(error));
