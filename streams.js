//? los Steams ayudan a poder mandar un archivo grande o divir un archivo grande en multiples partes para que pueda ser transmitido facilmente

const { writeFile } = require("fs/promises");

const createBigFile = async () => {
  await writeFile("./data/bigFile.txt", "hello world");
};

createBigFile();
