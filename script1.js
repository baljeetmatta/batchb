//const script=require("./script");


//script=1;

//console.log(script);
//const os=require("os");
//console.log(os.totalmem());
const fs=require("fs");
/*
const contents=fs.readFileSync("./script.js","utf-8");
console.log(contents);

fs.readFile("./script.js","utf-8",(err,data)=>{

    if(err)
    console.log("Error:",err);
    else
    console.log(data);

})
*/
/*
function sum(a,b)
{


}
sum(2);

fs.writeFileSync("./test.txt","Data");
fs.writeFile("./test.txt","utf-8",(err)=>{

})
*/
const data=fs.readdirSync("./");
console.log(data);
