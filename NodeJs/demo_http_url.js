let http = require('http')
let url = require('url');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
        res.write(req.url);
        var q = url.parse(req.url,true).query;
        let txt = q.year + " " + q.month;
        res.end(txt)
        
        res.end();
  
}).listen(7000);
