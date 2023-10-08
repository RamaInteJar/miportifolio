const express = require('express');
const Portifolio = require('../models/Portifolio');
const router = express()

router.post('/', async(req, res)=>{
    try{
        res.json(await Portifolio.create(req.body))
    }catch(error){
        res.status(400).json(error)
    }
})
module.exports = router;