const http = require("http")
const { createDeflateRaw } = require("zlib")
const fs = require("fs");



const server = http.createServer((req, res)=> {

const url = req.url
let tableData = "<table border=`1`><tr><th>name</th><th>height</th><th>birth_year</th><th>gender</th><th>url</th></tr>"
if(url === '/list'){
    fetch('https://swapi.dev/api/people')
    .then(res => res.json())
    .then(data => {
        createData(data)
        res.write(tableData)
        res.end()
    })
   
}

else if(url === '/'){
    fs.readFile('springishere.jpg', function(error, file) {

        var imagedata = Buffer.from(file).toString('base64');
    
        res.writeHead(200, {'content-type':'text/html'});
        res.write("<h1>Welcome</h1> <img src='data:springishere.jpg;base64,"+imagedata+"' width='400'/>");
        res.end();
    
        });


}



else{
    res.write("Page Not Found")
    res.end()
}


function createData(data){
    data.results.forEach(element => {
        tableData+=`<tr><td>${element.name}</td><td>${element.height}</td><td>${element.birth_year}</td><td>${element.gender}</td><td>${element.url}</td></tr>`
        
    });
    tableData+= `</table>`
}

}).listen(8090,console.log(`Server is listening on port 8090`))