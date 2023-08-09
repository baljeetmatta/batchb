const http=require("http");
const fs=require("fs");
const server=http.createServer(handleRequest);

function handleRequest(req,res)
{
    console.log(req.url);
    if(req.url=="/" || req.url=="/index.html")
    {
        res.write(  readData("index.html"))
        res.end();

    }
    else if(req.url=="/contactus.html")
    {
        res.write(  readData("contactus.html"))
        res.end();
        
    }
    else if(req.url=="/style.css")
    {
      res.write(  readData("style.css"));
      res.end();
        
    }
    else if(req.url=="/jscript.js")
    {
       
      res.write(  readData("jscript.js"));
      res.end();

        
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

   /*  fs.readFile(filename,"utf-8",(err,data)=>{
            if(err)
            return "Unable to read file";
            else
            return data;
        

        });
        */
       let contents=fs.readFileSync(filename,"utf-8");
       return contents;
       
}