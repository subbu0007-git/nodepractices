const express = require("express");
const { connectMongodb } = require("./connection")
const Urlrouter = require("./routes/authroutes")


const app = express();
const port = 8002
connectMongodb('mongodb://localhost:27017/auth').then(() => console.log("Mongo db is connwec ted"))

app.use(express.json())

app.use("/authentication", Urlrouter);

app.listen(port, () => { console.log(`short_url app listening on port ${port}`) })