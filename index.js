const http = require('http');
const server = http.createServer((request,response)=>
{
    response.end(`Hello World!`);
}
);
server.listen(3001,'127.0.0.1',()=>{
    console.log(`server is running on http://127.0.0.1:3001`);
});