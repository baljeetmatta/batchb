const http=require("http");
const fs=require("fs");
const server=http.createServer(handleRequest);

function handleRequest(req,res)
{
    //console.log(req.url);
    try{
   console.log( req.url.substr(1));
   res.write(readData(req.url.substr(1)));

   res.end();
    }catch(e)
    {
        res.end();
    }
   

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