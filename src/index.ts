require('dotenv').config();

const { app } = require('./app');

const port = process.env.PORT || 4000;

// <-- Server listenning -->
const server = app.listen(port, () => {
  console.log(`Listening server on Port -> http://localhost:${server.address().port}`);
});
