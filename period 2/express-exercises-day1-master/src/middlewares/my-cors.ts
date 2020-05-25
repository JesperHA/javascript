import { response } from "express"


const myCorsMiddleware = ((req: any, res: Response, next: Function) =>{

    response.header("Access-Control-Allow-Origin", "*")
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
  
  })

  module.exports = myCorsMiddleware