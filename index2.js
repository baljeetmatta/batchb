const http=require("http");
const fs=require("fs");
const server=http.createServer(handleRequest);

function handleRequest(req,res)
{
    //console.log(req.url);
   
   //console.log( req.url.substr(1));
   let filename=""
   if(req.url=="/")
   filename="index.html"
else
filename=req.url.substr(1);

let data=readData(filename);
if(data=="")
{
    res.writeHead(404);
    res.write(readData("404.html"));
}
else
   res.write(data);

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
    //    try{
    //    let contents=fs.readFileSync(filename,"utf-8");
    //    return contents;
    //    }catch(e)
    //    {
    //     return "";

    //    }
       
    if(fs.existsSync(filename))
    {
        let contents=fs.readFileSync(filename,"utf-8");
       return contents;
    }
    else
    return "";


}