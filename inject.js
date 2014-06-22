var http = require('http'),
    httpProxy = require('http-proxy'),
    static = require('node-static');

httpProxy.createServer(
    require('node-inject')("http://localhost:8080/js/app.js"),
    function (req,res,proxy) {
        proxy.proxyRequest(req, res, {
          host: '',
          port: 80
        });
    }
).listen(8000);


new static.Server();
