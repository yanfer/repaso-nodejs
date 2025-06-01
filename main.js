/* const web = require("./module/myModule");

console.log(web);
 */

//No es necesario traer todo el modulo, tambien se puede traer solo parte de el
//al poner unas llaves y con vscode darle en ctrl + espacio, se pueden ver todos los modulos que se pueden llamar
//podemos llamar el modulo default de la siguiente manera
const { myNumber, myWebAddress } = require("./module/myModule").default;

//tambien podemos llamar modulos completos y sacarlos mas adelante sus funciones como metodos.
const math = require("./math/index");

console.log(myNumber);
console.log(myWebAddress);

console.log(math);
console.log(math.add(10, 20));
console.log(math.subtract(10, 20));
console.log(math.multiply(10, 20));
console.log(math.divide(10, 20));
