require("dotenv").config();
const express = require('express')
const app = express()
const PORT = process.env.PORT || 6060

app.listen(() => console.log('give some love', PORT));