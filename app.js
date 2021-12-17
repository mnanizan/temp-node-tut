const http = require('http')
//req=request, res=respond
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is the short history')
    }
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page</p>
        <a href='/'>back home</a>
    `)
})

//what port the server should listen to
server.listen(5000)

