const express = require("express");
const { Router } = require("express");
const ReviewRouter = express.Router();

const Reviews = require("../models/reviewModel");
const CustomError = require("../utils/CustomError");

ReviewRouter.get("/getall", async (req, res, next) => {
  try {
    const reviews = await Reviews.find({ clinic: req.body.clinicId });
    res.status(200).json(reviews);
  } catch (error) {
    next(new CustomError('Unable to get reviews', 400))
  }
});

ReviewRouter.get("/getOne/:id", async (req, res, next) => {
  try {
    const review = await Reviews.findById(req.params.id);
    res.status(200).json(review);
  } catch (error) {
    next(new CustomError('Unable to locate review by id', 400))
  }
});

ReviewRouter.get("/getlimit/:limit", async (req, res) => {
  try {
    const reviews = await Reviews.find({ clinic: req.body.clinicId }).limit(
      req.params.limit
    );
    res.status(200).json(reviews);
  } catch (error) {
    next(new CustomError('Unable to get limited query', 400))
  }
});

module.exports = ReviewRouter;
