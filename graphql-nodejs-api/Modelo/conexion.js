const mysql = require("mysql2");

//crea la conexion a la base de datos
const connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "password",
  database: "proyecto_web_noticias",
});

//muestra si hubo algun error en la base de datos
connection.connect((error) => {
  if (error) {
    console.error("Error al conectar a la base de datos:", error);
  } else {
    console.log("Conexión exitosa a la base de datos");
  }
});

module.exports = connection;
