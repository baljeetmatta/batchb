const http=require("http");
const fs=require("fs");
const server=http.createServer(handleRequest);

function handleRequest(req,res)
{
    console.log(req.url);
    if(req.url=="/" || req.url=="/index.html")
    {
        fs.readFile("index.html","utf-8",(err,data)=>{
            if(err)
            res.write("Unable to read file");
            else
            res.write(data);
        res.end();

        });

    }
    else if(req.url=="/contactus.html")
    {
        fs.readFile("contactus.html","utf-8",(err,data)=>{
            if(err)
            res.write("Unable to read file");
            else
            res.write(data);
        res.end();

        });
        
    }
    else if(req.url=="/style.css")
    {
        fs.readFile("style.css","utf-8",(err,data)=>{
            if(err)
            res.write("Unable to read file");
            else
            res.write(data);
        res.end();

        });
        
    }
    else if(req.url=="/jscript.js")
    {
       
        
    }
    else
    res.end();



}

server.listen(3000,(err)=>{
    if(err)
    console.log("Error in starting Server....")
    else
    console.log("Server started at port 3000");

})

function readData(filename)
{

     fs.readFile("jscript.js","utf-8",(err,data)=>{
            if(err)
            res.write("Unable to read file");
            else
            res.write(data);
        res.end();

        });
}