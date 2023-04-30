const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const resolver = require('./resolver');

const app = express();

app.use('/news', graphqlHTTP({
  schema: schema,
  rootValue: resolver.getNoticias,
  graphiql: true, // Habilita el IDE GraphiQL para probar las consultas en el navegador
}));

app.use('/newsbycategory', graphqlHTTP({
  schema: schema,
  rootValue: resolver.getUser,
  graphiql: true, // Habilita el IDE GraphiQL para probar las consultas en el navegador
}));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor GraphQL funcionando en http://localhost:${PORT}/`);
});