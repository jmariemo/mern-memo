const express = require('express');
const path = require('path');
const db = require('./config/connection');
// const routes = require("./routes");
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001; 

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
    persistedQueries: false,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
};

// create pathway to Apollo Server using GraphQL schema
const startApolloServer = async () => {
    await server.start();
    server.applyMiddleware({ app });

    db.once("open", () => {
        app.listen(PORT, () => {
         console.log(`API server running on port ${PORT}!`);
            // the console log where the GQL API is tested
          console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`)
        });
    });
};

// call async function to start the server
startApolloServer();


