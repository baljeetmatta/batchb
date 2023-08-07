// const http=require("http");
// //console.log(http);
// const server=http.createServer();
// server.on("connection",(socket)=>{
//     console.log("Request rec.");
// })
// server.listen(3000);



const http=require("http");
const fs=require("fs");
const server=http.createServer((req,res)=>{
//console.log("Connection received");
console.log(req.url);
if(req.url=="/")
{
    res.setHeader("Content-Type","text/html");
    res.write("Welcome to <b>node</b>js");
    res.end();


}
else if(req.url=="/about.html")
{
    res.setHeader("Content-Type","text/html");
    fs.readFile("./about.html","utf-8",(err,data)=>{
        res.write(data);
        res.end();
    })
    //res.write("Welcome to about us page");

    
}
else
    res.end();
    
})

server.listen(3000,(err)=>{
    if(err)
    console.log("Error in started server....")
    else
    console.log("Server started...")

});
