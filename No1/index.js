var http = require('http');
var fs = require('fs');

var myServer=http.createServer((req,res)=>{
    
    var path =req.url;
    switch(path){
        case "/":{
            var homedata=fs.readFileSync("home.html",(err)={
            });
            res.writeHead(200,{"content-encoding":"text/html"})
            res.end(homedata);

            break;
        }
        case '/login':{
            var logindata=fs.readFileSync("login.html",(err)={
            });
            res.writeHead(200,{"content-encoding":"text/html"})
            res.end(logindata);
        }
        default:{
            // res.send("404 server not found");
            res.end("404 server not found");
        }
    }
})

myServer.listen(8001,()=>{
    console.log("server started 8001");
})
