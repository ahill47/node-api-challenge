const express = require('express');
const actionRouter = require('./routers/actionRouter');
const projectRouter = require('./routers/projectRouter');

const server = express();
// endpoint 
server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);


server.get('/', (req, res) => {
    res.send(`<h2>Welcome to my API!</h2>`);
  });

module.exports = server;