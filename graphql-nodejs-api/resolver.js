const connection = require('./conexion');

const resolver = {
  getUser: async ({ id }) => {
    const query = 'SELECT * FROM news WHERE id = ?';
    const [rows] = await connection.promise().query(query, [id]);
    return rows[0];
  },
  
  getNoticias: async () => {
    const query = 'SELECT * FROM News WHERE idUsers = %s';
    const [rows] = await connection.promise().query(query);
    return rows.map((row) => ({
      title: row.title,
      short_description: row.short_description,
      permanlink: row.permanlink,
      date: row.date
    }));
  }
}

module.exports = resolver;
