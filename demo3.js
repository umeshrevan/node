const http = require('http')

const server =http.createServer((req , res) =>{
    let data = ""
    console.log(req.url, req.method)
    req.on('data', (chunk) =>{
        data += chunk
    })
    req.on('end', ()=>{
        const parsed = JSON.parse(data)
        if(req.url === '/book' && req.method ==='POST'){
            console.log("in");
            console.log(parsed);
        }
        })

        req.on('end', ()=>{
            const parsedData = new URLSearchParams(data);
            if (req.url ==='/getbook' && req.method ==='GET'){
            const dataObj = {};
            for (var pair of parsedData.entries()) {
            dataObj[pair[0]] = pair[1];
            }
            console.log("DataObj: ", dataObj);
            }
        })

    res.end("Done")
})

server.listen(4050, ()=>{
    console.log('Listening on port 4050');
})