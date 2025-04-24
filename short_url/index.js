const express = require("express");
const { connectMongodb } = require("./connection")
const Urlrouter = require("./routes/url")


const app = express();
const port = 8001
connectMongodb('mongodb://localhost:27017/short-url').then(() => console.log("Mongo db is connwec ted"))

app.use(express.json())

app.use("/url", Urlrouter);

app.listen(port, () => { console.log(`short_url app listening on port ${port}`) })