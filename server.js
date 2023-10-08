require("dotenv").config();
const express = require('express')
const app = express()
const portifolioController = require("./controllers/portifolioController")
const PORT = process.env.PORT || 6060
const morgan = require('morgan')

app.use(morgan("tiny"))
app.use(express.urlencoded({extended:true}))
app.use("/portifolio", portifolioController)
app.listen(() => console.log('give some love', PORT));