const express = require('express');
const next = require('next');
const consoleLog = require('./middleware/console-log');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const expressApp = express();

  expressApp.use(consoleLog);

  expressApp.get('*', (req, res) => nextHandle(req, res));

  expressApp.listen(port);
  console.log(`> Ready on http://localhost:${port}`);
});
