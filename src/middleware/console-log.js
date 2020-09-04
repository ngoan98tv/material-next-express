module.exports = function consoleLog(req, res, next) {
  const ip = req.ip;
  const timestamp = new Date().toISOString();
  const method = req.method;
  const fullPath = req.headers.host + req.path;
  const userAgent = req.headers['user-agent'];
  console.log(`[${timestamp}][${ip}] - ${method} ${fullPath} - ${userAgent}`);
  next();
};
