const express = require('express')
const { Router } = require('express')
const DataController = express.Router()

const svgData = require('../db/svgData.json')

const CustomError = require('../utils/CustomError')

DataController.get('/getSVGs', (req, res) => {
    try{
        res.status(200).json(svgData)
    } catch (error){
        console.error;
    }
})

module.exports = DataController