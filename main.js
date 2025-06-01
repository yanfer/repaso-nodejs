/* const web = require("./module/myModule");

console.log(web);
 */

//No es necesario traer todo el modulo, tambien se puede traer solo parte de el
//al poner unas llaves y con vscode darle en ctrl + espacio, se pueden ver todos los modulos que se pueden llamar
const { myNumber, myWebAddress } = require("./module/myModule").default;

console.log(myNumber);
console.log(myWebAddress);
