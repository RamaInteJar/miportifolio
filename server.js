require("dotenv").config();
const express = require('express');
const app = express();
const portifolioController = require("./controllers/portifolioController"); // Corrected the spelling of "portfolioController"
const PORT = process.env.PORT || 6060;
const morgan = require('morgan');

app.use(morgan("tiny"));
app.use(express.urlencoded({extended:true}));
app.get('/', (req, res)=>{
    res.send('sanity check')
})
app.use("/Portfolio", portifolioController); // Corrected the path for portfolioController
app.listen(PORT, () => console.log('Give some love at port', PORT)); // Corrected the syntax for app.listen