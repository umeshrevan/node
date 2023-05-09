const http = require('http')

const server =http.createServer((req , res) =>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        console.log('req' , 'res')
        if (req.url == '/') {
            res.statusCode = 200;
            res.end("<h1>This is first page.</h1>");
        }
        else if(req.url == '/register') {
            res.statusCode = 200;
            res.end(`
            <form action="login.html">
            <input type ="email" id="email" placeholder="Email">
            <br>
            <br>
            <input type ="password" id="pwd" placeholder="Password">
            <br>
            <br>
            <input type="submit" value="Submit" onclick="addData()"> 
            </form>
            <script>
            function addData(){
                var email = document.getElementById('email').value;
                var pass = document.getElementById('pwd').value;
            
                localStorage.setItem('userEmail',email);
                localStorage.setItem('userPwd',pass);
            
                // localStorage.userEmail = email;
                // localStorage.userPwd = pass;
            }
            </script>
            `);
        }
        else if(req.url == '/login.html?') {
            res.statusCode = 200;
            res.end(`
            <form>
            <h2>Login Page</h2>
            Email:<input type ="email" id="email">
            <br>
            <br>
            Password:<input type ="password" id="pwd">
                <br>
            <br>
            <input type="submit" value="Submit" onclick="checkData()">
            </form>
            <script> 
            function checkData(){
                var enterEmail = document.getElementById('email').value;
                var enterPwd = document.getElementById('pwd').value;
            
                //get data from local storage
            
                var getEmail = localStorage.getItem('userEmail');
                var getPwd = localStorage.getItem('userPwd');
            
                if(enterEmail == getEmail)
                {
                    if(enterPwd == getPwd)
                    {
                    alert("Login successful");
                    }
                    else
                    {
                    alert("Wrong passord");
                    }
                }
                else
                {
                    alert("Invalid details");
                }
            }
            </script>
            `)
        }
        else{
            res.statusCode = 400;
            res.end("<h1> Page Not Found</h1>");
        }
})

server.listen(8080, ()=>{
    console.log('Listening on port 8080');
})