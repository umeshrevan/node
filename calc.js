const http =require('http')
const addition = require('./add')
const substraction = require('./sub')
const multiplication = require('./mul')
const division = require('./div')


const calculator = ((req, res)=>{
    let data = ''
    let result
    let num1
    let num2
    console.log(req.url,req.method);
    req.on('data', (chunk) =>{
        data += chunk
    })
    req.on('end', () =>{
        const parsed=JSON.parse(data)
        num1 = parsed.num1
        num2 = parsed.num2
        //console.log(num1,num2)
        if(req.url === '/'){
            req.end("You are in Home page")
        }
    
        else if(req.url === '/addition'){
            //console.log("add",num1)
            result = addition(num1,num2);
            res.end("Addition of two number is "+result)
            console.log("Addition of two number is "+result)
        }
    
        else if(req.url === '/substraction'){
            result = substraction(num1,num2);
            res.end("Substraction of two number is "+result)
        }
    
        else if(req.url === '/multiplication'){
            result = multiplication(num1,num2);
            res.end("Multiplication of two number is "+result)
        }
    
        else if(req.url === '/division'){
            result = division(num1,num2);
            res.end("Division of two number is "+result)
        }      
    })
    
})
    

const server =http.createServer(calculator)
server.listen(4000, ()=>{
    console.log("Listening on http://localhost:4000");
})
