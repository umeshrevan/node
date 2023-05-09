const http = require('http')
const fs = require('fs');
const getData = JSON.parse(fs.readFileSync('./encryptdata.json' , 'utf-8'));
console.log(getData);

const crypto = require('crypto');
const algorithm = 'aes-256-cbc'; 
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);


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

    if(req.url === '/signin'){
        const cipher = crypto.createCipheriv(algorithm, key, iv);
        let encryptedData = cipher.update(password, "utf-8", "hex");
        encryptedData += cipher.final("hex");
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({username,encryptedData}));
        if(encryptedData !== null){
            getData.userData.push(username,encryptedData);
            const jsonObj = JSON.stringify(getData)
            fs.writeFileSync("./encryptdata.json", jsonObj);
        }

        const decipher = crypto.createDecipheriv(algorithm, key, iv);
        let decryptedData = decipher.update(encryptedData, "hex", "utf-8");
        decryptedData += decipher.final("utf8");
        console.log("Decrypted password: " + decryptedData);

    }
    })
})
server.listen(5050, ()=> {
    console.log("Server listening on port http://localhost:5050");
})