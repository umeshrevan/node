const http =require('http');

const requestHandler = ((req, res) => {
    if(req.url === '/'){
        res.end("This is Home page");
    }
    else if(req.url==='/about'){
        let name=""
        res.end('This is :' + req.param('name'));
    }
})
const server = http.createServer(requestHandler);

server.listen(3000 ,()=> {
    console.log("Listening on localhost:3000");
})
// var http = require('http'); 
 
// function requestHandler(req, res){ 
//     res.end('It Works: ' + req.url); 
// } 
 
// var server = http.createServer(requestHandler); 
 
// // Kick off the server 
// server.listen(3000, function(){ 
    
//     console.log("Server started: http://localhost:3000"); 
// }); 