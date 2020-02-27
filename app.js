const express = require('express');
const graphql = require('express-graphql');

const db = require ('./db');
const schema = require('./schema/schema');

// App Setup
const app = express();
const port = process.env.PORT || 4000;

// routes
app.use ('/api',graphql({
    schema,
}));

app.use ('/graphiql',graphql({
    schema,
    graphiql: true
}));
// Start API
app.listen(port, () => {
    console.log('YouthLIVE API Started on port 4000');
});
