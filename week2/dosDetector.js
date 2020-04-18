const eventEmitter = require('events')

const myEmitter = new eventEmitter()

myEmitter.on('DOS', (data => console.log(data)))

class DOS_Detector {
    constructor(timeValue){
    //   super();
      this.urls = new Map();
      this.TIME_BETWEEN_CALLS = timeValue;
    }
    addUrl = (url) =>{
      const time = new Date().getTime();
      if(this.urls.has(url)){
        const deltaTime = time - this.urls.get(url) 
        if(deltaTime < this.TIME_BETWEEN_CALLS){
          // console.log(({url:url,timeBetweenCalls:deltaTime}))
          myEmitter.emit('DOS', {url,timeBetweenCalls: deltaTime})
          
          //Add this info to the event {url:url,timeBetweenCalls:deltaTime}
        }
      }
      this.urls.set(url,time);
    }
 }
 // Export the class using nodes CommonJS module system (require/exports)

 module.exports = DOS_Detector


 