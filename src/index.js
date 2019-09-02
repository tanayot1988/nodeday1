const http = require('http')


const server = http.createServer((req, res) => {
    const url = req.url

switch(url){
    case '/':
        res.end('<h1>Home Page</h1>')
        break;
    case '/about':
        res.end('<h1>About Page</h1>')
        break;

    case '/register':
        res.end('<h1>Register Page</h1>')
         break;

    case '/order':
        res.end('<h1>Order Page</h1>')
         break;         

    default:
           res.end('<h1>Page Not Found</h1>')
        break;
}



    console.log(url)
    
    res.end('<h1>Hello Tanayot OAT</h1>')
})

const port = process.env.port
server.listen(port)

