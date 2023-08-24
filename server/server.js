const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./utils/auth');
const path = require('path');
const db = require('./config/connection');

// import typeDefs + resolvers
const { typeDefs, resolvers } = require('./schemas');
const { start } = require('repl');

const app = express();
const PORT = process.env.PORT || 3001; 

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
    persistedQuearies: false,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../client/build")));
};

// create pathway to Apollo Server using GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
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

startApolloServer(typeDefs, resolvers);
