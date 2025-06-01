//Node tiene modulos ya integrados que nos ayudan a hacer las cosas mas facil, uno de ellos es el modulo os
//Si no escribimos el ./ al inicio de require node va a buscar en los modulos que tenemos en la app si no, va a buscar los que trae por defecto

const os = require("os");

// os.userInfo() da informacion del usuario del pc
// console.log(os.uptime()); nos dice el tiempo que llevamos la computadora encendida en segundos.

// console.log(os.platform()); nos dice en que plataforma estamos: windows, linux, darwin(macOS)
// console.log(os.release()); para ver la version del windows
// console.log(os.totalmem()); para ver el total de la memoria
// console.log(os.freemem()); para ver el total de la memoria disponible

//No es necesario solamente usar console.log, tambien podemos usar console.table y lo muestra como una tabla
console.table({
 os: os.platform(),
 version: os.release(),
 totalMemory: os.totalmem(),
});
