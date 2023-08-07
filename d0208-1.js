const EventEmitter=require("events");

class  Logger extends EventEmitter
{
    log()
    {
        console.log("Working on log..");
        this.emit("Logged");
    }
}
module.exports=Logger;


// const EventEmitter=require("events");
// const event=new EventEmitter();

// function log()
// {
//     console.log("Working on log..")
//     event.emit("Logged");

// }
// module.exports.log=log;
// module.exports.event=event;
