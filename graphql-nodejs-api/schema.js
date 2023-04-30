
const { buildSchema } = require('graphql');

const schema = buildSchema(`
type Noticia{
    title: String
    short_description: String
    permanlink: String
    date: String
}

  type Query {
    getNoticia(id: ID!): Noticia
    getNoticias: [Noticia]
  }
`);

module.exports = schema;
