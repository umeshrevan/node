const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Welcome to the first page!!')
    })

app.get('/about', (req, res) => {
    res.send(`Welcome to about page
    <input type = "text" placeholder = "user name" value = "${req.query.name}" />
    <button> Click me </button>
    
    `)
    })

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'registration.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
})

app.listen(port, () => {
    console.log(`Example are listening on http://localhost:${port}`);
})