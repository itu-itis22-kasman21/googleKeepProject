const express = require('express');
const http = require('http');
const path = require('path');


const app = express();
const server = http.createServer(app);

const PORT = process.env.PORT || 3000;

const indexRouteController = require('./routes/indexRoute');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  if (!req.query || typeof req.query != 'object')
    req.query = {};
  if (!req.body || typeof req.body != 'object')
    req.body = {};

  next();
});

app.use('/', indexRouteController);

server.listen(PORT, () => {
  console.log(`Server is on port ${PORT} running`);
});