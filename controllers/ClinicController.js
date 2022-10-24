const express = require("express");
const { Router } = require("express");
const ClinicRouter = express.Router();

const Clinics = require("../models/clinicModel");
const CustomError = require("../utils/CustomError");

ClinicRouter.get("/id/:ID", async (req, res, next) => {
  try {
    const clinic = await Clinics.findById(req.params.ID);
    res.status(200).json(clinic);
  } catch (error) {
    next(new CustomError('No clinic found', 404))
  }
});

ClinicRouter.get("/state/:stateName", async (req, res, next) => {
  try {
    const clinics = await Clinics.find({
      "address.state": req.params.stateName,
    });
    res.status(200).json(clinics);
  } catch (error) {
    next(new CustomError('No clinic found', 404))
  }
});

module.exports = ClinicRouter;
