const myWebAddress = "https://yanfer.netlify.app/";
const myNumber = 30;
const myArray = [10, 20, 30];
const myUser = {
 name: "yanfer",
 lastName: "araque",
};

//Este modulo puede exportar lo que sea, un string, arreglo, boolean, un objeto
//module.exports = myWebAddress;

//module no solo es para exportar un solo valor
/* const group = {
 myWebAddress: myWebAddress,
 myNumber: myNumber,
 myArray: myArray,
 myUser: myUser,
};
module.exports = group; */

//tambien no es necesario tenerla guardada en una constante, podemos simplemente exportarla en module.exports y da el mismo resultado
//tampoco es necesario especificar como si fuera un objeto, solo se necesita escribir una vez
//igual se puede simplemente especificar que el modulo se exporta por defecto sin necesidad de usar module al inicio

export default {
 myWebAddress,
 myNumber,
 myArray,
 myUser,
};
