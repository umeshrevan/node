const http = require ('http')
const server = http.createServer((req, res) => {
    const data = { name : "umesh" , email : "ur@gmail.com", age: 23}
    res.writeHead(200, {'content-type' : 'application/json'})
    res.write(JSON.stringify(data))
    res.end()
})

server.listen(4000, () =>{
    console.log("Server listening on port 4000");
})