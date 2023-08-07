const EventEmitter= require("events");
const Logger=require("./D3107-1");

const logger=new Logger();
logger.on("Clicked",function(){
    console.log("Event Handled");
})
logger.log();

// const event=new EventEmitter();
// event.on('Clicked',function(e){

//     console.log("Event Handled",e);

// })
// log();


//event.emit('Clicked',{id:1,message:"Clicked event "});


///event.emit('Clicked',{id:2,message:"Second "});
