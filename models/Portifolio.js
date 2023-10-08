const mongoose = require('../database/connection')

const portifolioSchema = new mongoose.Schema({
    name: String,
    Aboutme: String,
    Projects: Array
});

const Portifolio = mongoose.model("Portifolio", portifolioSchema)
module.exports = Portifolio;