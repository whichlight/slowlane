var request = require('request'),
    app = require('http').createServer(handler).listen(8080),
    fs = require('fs'),
    url = require('url');

var inject;

//script inject
fs.readFile(__dirname + '/js/app.js', 'utf8', function(err, data){
  if(err){
    console.log('error');
  }
  inject = '<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js" ></script><script>'+data+'</script>';
});

function handler (req, res) {
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log(query);
  if(req.url === "/"){
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
          if (err) {
            res.writeHead(500);
            return res.end('Error loading index.html');
          }
          res.writeHead(200)
      res.end(data);
        });
  } else if(query.slow !== "null"){
      //make request
      request(query.slow, function (error, response, body) {
        if (!error && response.statusCode == 200) {
        body+="<script>var urlSlow='"+query.slow+"';</script>"
        body+=inject;
        res.end(body);
        }
      })
  }
  else{
    fs.readFile(__dirname + req.url, function (err, data) {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading ' +req.url);
      }
      res.writeHead(200);
      res.end(data);
    });
  }
}

/*


    */

