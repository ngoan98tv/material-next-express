const express = require('express');
const next = require('next');
const consoleLog = require('./middleware/console-log');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(consoleLog);

  server.get('*', (req, res) => handle(req, res));

  server.listen(port);

  console.log(`> Ready on http://localhost:${port}`);
});
