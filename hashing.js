const http = require('http')
const fs = require('fs');
const crypto = require('crypto');
const getData = JSON.parse(fs.readFileSync('./hashingdata.json' , 'utf-8'));
console.log(getData);

const server = http.createServer((req, res)=>{
    let data =''
    let username
    let password

    req.on('data', (chunk) =>{
        data += chunk;
    })

    req.on('end', ()=>{
        const parsed = JSON.parse(data)
        let {username, password} = parsed
        // username = parsed.username;
        // password = parsed.password;

    if(req.url === '/login'){
        const hashedPassword = crypto.createHash('sha256').update(password).digest('hex');
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({username,hashedPassword }));
        //res.end(JSON.stringify({getData}));

        if(hashedPassword !== null){
            getData.userData.push(username,hashedPassword);
            const jsonObj = JSON.stringify(getData)
            fs.writeFileSync("./hashingdata.json", jsonObj);
        }
    }
    })
})

server.listen(5000, ()=> {
    console.log("Server listening on port http://localhost:5000");
})