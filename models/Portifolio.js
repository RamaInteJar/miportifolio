const mongoose = require('../database/connection')

const portifolioSchema = new mongoose.Schema({
    Name: String,
    Aboutme: String,
    contact: String,
});

const Portifolio = mongoose.model("Portifolio", portifolioSchema)
module.exports = Portifolio;