const fs = require ('fs');

const http= require ('http');

///
//server

const server = http.createServer((req,res)=>{
    res.end('Hello the first serve in Node Js')
});
server.listen(8000,()=>{
    console.log('listenig to requests on port8000');
})