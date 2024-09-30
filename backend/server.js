const cors = require('cors')
const express = require("express")
const {appplication } = require("express")
const INFURA_MAINNET = "https://mainnet.infura.io/v3/75bc45b8eac4415497742ad30526545b"
const { Web3 } = require('web3');
const web3 = new Web3(INFURA_MAINNET)

const app = express()
app.listen(3333)
app.use(cors())

BigInt.prototype.toJSON = function () {
    return this.toString();
};

app.get("/", async(req,res) =>{
    const bloque = await web3.eth.getBlockNumber();
    res.send({bloque})
})

app.get("/block/:blockNumber", async(req,res) =>{
    try {
        const block = await web3.eth.getBlock(req.params.blockNumber)
        res.send(block)
    } catch (error) {
        res.status(500).send({message: error.message})
    }

})

app.get("/tx/:tx", async (req,res) => {
    try {
        const tx = await web3.eth.getTransaction(req.params.tx)
        res.send(tx)
    } catch (error) {
        res.status(500).send({message: error.message})
    }

})

app.get("/balance/:address", async (req,res) =>{
    try {
        let  balance = await web3.eth.getBalance(req.params.address)
        balance = Number(balance)
        res.send({balance, ethers:balance / 1e18, ethers2:web3.utils.fromWei(balance,'ether')})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
})