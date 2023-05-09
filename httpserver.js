const http = require('http');
const port = require = process.env.PORT || 3000
const server = http.createServer((req , res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    console.log('req' , 'res')
    if (req.url == '/') {
        res.statusCode = 200;
        res.end("<h1>This is first page.</h1>");
    }
    else if(req.url == '/home') {
        res.statusCode = 200;
        res.end("<h1>This is home page.</h1>");
    }
    else{
        res.statusCode = 400;
        res.end("<h1> Page Not Found</h1>");
    }
    
});

server.listen (port , () => {
    console.log(`Server is listening on port ${port}`);
});