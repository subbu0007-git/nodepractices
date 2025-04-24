const http = require('http')
const express = require('express')


const app = express();

app.get("/", (req, res) => {
    return res.send("Hi subbu learn clean about node js")
})


app.get("/about", (req, res) => {
    return res.send("Hi subbu this about us page " + req?.query?.name + " what do you want???")
})

app.listen(8000, () => console.log("subbu server started"))