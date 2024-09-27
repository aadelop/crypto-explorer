const express = require("express")
const {application } = require("express")

const ap = express()

ap.listen(3333)

ap.get("/", async(req,res) =>{
    res.send("hello from route /")
})