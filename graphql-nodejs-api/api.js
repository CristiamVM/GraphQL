const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const resolver = require("./resolver");

const app = express();


//configuracion del endpoint para obtener los trabajos del usuario
app.use(
  "/news",
  graphqlHTTP({ //middelwere para el manejo de solicitudes GraphQL
    schema: schema,
    rootValue: resolver,
   
  })
);

//configuracion del endpoint para obtener los trabajos del usuario filtrando por categorias
app.use(
  "/newsbycategory",
  graphqlHTTP({ //middelwere para el manejo de solicitudes GraphQL
    schema: schema,
    rootValue: resolver,
  })
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`API GraphQL funcionando en http://localhost:${PORT}/`);
});
