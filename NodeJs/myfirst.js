let http = require('http');
let dt = require('./MyModule')

http.createServer(function(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("The date and time are currently: "+dt.myDateTime());
    res.end('Hello Worls!');
}).listen(8000);

