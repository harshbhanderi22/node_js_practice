const http = require('http')

function firstserver(req, res) {
    res.write("It's Respoonse")
    res.end()
}

http.createServer((r, a) => {
    a.write("<h1>Hii,Welcome Its Harsh here with his first basic browser server</h1>")
    a.end()
}
).listen(3000)