const { buildSchema } = require("graphql");

const schema = buildSchema(`
#define los campos consultables para cada noticia
type Noticia{
    title: String
    short_description: String
    permanlink: String
    date: String
    idNewsSource: ID!
    idUsers: ID!
    idCategories: ID!
}

#define los campos consultables para cada usuario
type User {
  idUsers: ID!
  first_name: String
  noticias: [Noticia]
}


  type Query {
    getNoticias(idUsers: ID!): User
    getNoticiasPorCategoria(idUsers: ID!, idCategories: ID!): [Noticia]
  }
`);

module.exports = schema;
