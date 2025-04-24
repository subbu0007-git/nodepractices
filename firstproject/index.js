const express = require("express");
const { connectMongodb } = require("./connection")
const Userrouter = require("./routes/user")


const app = express();
const port = 8000
connectMongodb('mongodb://localhost:27017/admin').then(() => console.log("Mongo db is connwec ted"))



// middleware - pulgin
app.use(express.urlencoded({ extended: false }))

app.use("/api/users", Userrouter);

app.listen(port, () => { console.log(`FirstPROJECt app listening on port ${port}`) })