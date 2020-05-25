

const loggerMiddleware = ((req: any, res: Response, next: Function) =>{

    console.log("Time: " + Date.now())
    console.log("Request type: " + req.method)
    console.log("Request URL: " + req.originalUrl)
    next()
  
  })

  module.exports = loggerMiddleware