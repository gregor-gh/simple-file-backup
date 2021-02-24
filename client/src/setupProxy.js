const { createProxyMiddleware } = require('http-proxy-middleware');
// used this rather than the
//"proxy": "http://localhost:3001",
// line in package.json so that file downloads would work
module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
    })
  );
};