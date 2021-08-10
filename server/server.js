const express = require("express");
const db = require("./config/connection");
const { graphqlHTTP } = require("express-graphql");
const cors = require("cors");
const path = require("path")
// const expressGraphql = require("express-graphql")
const { buildASTSchema } = require("graphql");

const typeDefs = require("./graphql/schema");
const resolver = require("./graphql/resolvers");
const { authorizeUser } = require("./utils/auth");

const schema = buildASTSchema(typeDefs);

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

const loggingMiddleware = (req, res, next) => {
  authorizeUser(req);
  next();
};

app.use(loggingMiddleware);
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolver,
    graphiql: true,
  })
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

db();

app.listen(PORT, () => console.log(`Server running on ${PORT}`));
