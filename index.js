const fs = require ('fs');

const http= require ('http');
const url= require ('url');



///
//server

const server = http.createServer((req,res)=>{
    const pathName= req.url;
    if (pathName==='/' ||pathName ==='/overview'){
        res.end('This the OverView');
    }else if (pathName === '/protuct'){
        res.end('This the Product')
    }else{
        res.writeHead(404,{
            'Content-type':'text/html',
            'my-own-header': 'hello-word'
        });
      res.end('<h1>Page not Foud');
    }
});
server.listen(8000,()=>{
    console.log('listenig to requests on port8000');
})