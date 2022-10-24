const express = require("express");
const { Router } = require("express");
const ReviewRouter = express.Router();

const Reviews = require("../models/reviewModel");

ReviewRouter.get("/getall", async (req, res) => {
  try {
    const reviews = await Reviews.find({ clinic: req.body.clinicId });
    res.json(reviews);
  } catch (error) {
    console.error;
  }
});

ReviewRouter.get("/getOne/:id", async (req, res) => {
  try {
    const review = await Reviews.findById(req.params.id);
    res.json(review);
  } catch (error) {
    console.error;
  }
});

ReviewRouter.get("/getlimit/:limit", async (req, res) => {
  try {
    const reviews = await Reviews.find({ clinic: req.body.clinicId }).limit(
      req.params.limit
    );
    res.json(reviews);
  } catch (error) {
    console.error;
  }
});

module.exports = ReviewRouter;
