const connection = require("./Modelo/conexion");

const resolver = {
  //Hace las consultas a la base de datos para obtener las noticias del usuario
  getNoticias: async ({ idUsers }) => {

    const noticiasQuery = "SELECT * FROM news WHERE idUsers = ?";
    const [noticiasRows] = await connection.promise().query(noticiasQuery, [idUsers]);
    const noticias = noticiasRows;
    return {
      noticias: noticias
    };
  },

  //Hace la consulta a la base de datos para obtener las noticias del usuario filtadas por categorias
  getNoticiasPorCategoria: async ({ idUsers, idCategories }) => {
    const query = "SELECT * FROM news WHERE idUsers = ? AND idCategories = ?";
    const [rows] = await connection.promise().query(query, [idUsers, idCategories]);
    return rows;
  },
};

module.exports = resolver;
