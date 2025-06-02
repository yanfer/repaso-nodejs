//El modulo path sirve para saber (y mas cuando se despliega la app en un servidor) si se esta en windows o linux y ejecuta determinada logica dependiendo de donde estemos

const path = require("path");

//El metodo join sirve para unir directorios o rutas de directorios o carpetas, tengan o no el slash /, path lo pone por uno
const filePath = path.join("/public", "dist", "styles", "main.css"); //  \public\dist\styles\main.css

//basename permite extraer el archivo base de toda una url
console.log(path.basename(filePath)); // main.css

//dirname devuelve solo la ruta de los directorios o carpetas sin el archivo base. lo contrario a basename
console.log(path.dirname(filePath)); //  \public\dist\styles

//parse da la misma informacion de la ruta de un archivo pero lo da en un formato de objeto.
console.log(path.parse(filePath));
/* {
  root: '\\',
  dir: '\\public\\dist\\styles',
  base: 'main.css',
  ext: '.css',
  name: 'main'
} */

// Si le damos una ruta a resolve tratara de completarlo a partir de la ruta del sistema operativo
console.log(path.resolve("dist")); // C:\Users\yanfe\Documents\DEV\NodeJS\repaso-nodejs\dist
