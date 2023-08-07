const EventEmitter= require("events");
//const event=new EventEmitter();
// event.on("Clicked",function(e){
//     console.log("Module Event Clicked");
// })
class Logger extends EventEmitter
{
 log()
{
    console.log("Message from function");
    this.emit("Clicked");

}
}

module.exports=Logger;
