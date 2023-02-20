//import your http
const http = require("http")

//create server with HTTP
const server = http.createServer((req, res)=> {
console.log("Server is created")
})

//initiate a port
const PORT = 2020;

//listen to server
server.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))