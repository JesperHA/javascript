require('dotenv').config();
import express from "express";
import path from "path";


const app = express();
var cors = require('cors')
let myCors = require("./middlewares/my-cors")
let logger = require('./middlewares/simpleLogger')


app.use(express.static(path.join(process.cwd(),"public")))
app.use(express.json())
let userAPIRouter = require('./routes/userApi');


app.use(cors())
app.use(logger)

app.use("/api/users",userAPIRouter);

app.get("/api/dummy", (req, res) => {
  res.json({ msg: "Hello" })
})

const PORT = process.env.PORT || 3333;
const server = app.listen(PORT)
console.log(`Server started, listening on port: ${PORT}`)
module.exports.server = server;


