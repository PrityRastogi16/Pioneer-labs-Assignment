const express = require("express");
const axios = require('axios');
const { model } = require("mongoose");
// const apiRouter = express.Router();
const getDataFromApi =  async(req,res)=>{
    try{
       const response = await axios.get('https://api.publicapis.org/entries');
       const apiData = response.data;
       let filteredData = apiData.entries;
       const category = req.query.category;
       if(category){
        filteredData = filteredData.filter(e => e.Category.toLowerCase() === category.toLowerCase());
       }
       const limit = parseInt(req.query.limit);
       if(!isNaN(limit)){
        filteredData = filteredData.slice(0, limit);
       }
       res.json(filteredData);
    }
    catch (error) {
        console.error('Error', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = {getDataFromApi};