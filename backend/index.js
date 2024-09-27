const express = require("express")
const {application } = require("express")
const INFURA_MAINNET = "https://mainnet.infura.io/v3/75bc45b8eac4415497742ad30526545b"
const { Web3 } = require('web3');
const web3 = new Web3(INFURA_MAINNET)

const ap = express()
ap.listen(3333)

BigInt.prototype.toJSON = function () {
    return this.toString();
};

ap.get("/", async(req,res) =>{
    const bloque = await web3.eth.getBlockNumber();
    res.send({bloque})
})