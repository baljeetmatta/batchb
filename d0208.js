// const EventEmitter=require("events");
// const events=new EventEmitter();



// events.on("Data",(data)=>{
// console.log("Data message received",data);

// })

// events.emit("Data",{id:0,msg:"First Message"});
// events.emit("Data",{id:0,msg:"Second  Message"});
// const EventEmitter =require("events");
// const event=new EventEmitter();
// const mycode=require("./d0208-1");
// mycode.event.on("Logged",()=>{
//     console.log("Event Handled");
// })

// mycode.log();

const Logger=require("./d0208-1");
const log=new Logger();
log.on("Logged",()=>{
    console.log("Event Handled");
})
log.log();