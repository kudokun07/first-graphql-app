const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());

const db = require('./config/keys_dev').mongoURI;

mongoose
  .connect(db)
  .then(() => console.log('Database Connected.'))
  .catch(err => console.log(err));

app.use(
  '/graphql', 
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

const PORT = process.env.PORT || 4000;

app.listen(4000, () => {
  console.log('------------------------------------');
  console.log(`Now App is listening on port ${PORT}.`);
  console.log('------------------------------------');
})