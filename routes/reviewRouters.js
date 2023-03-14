
const express = require('express')
const router = express.Router()
const validation = require('../validation/review/reviewValidation');
const reviewController = require('../controllers/reviewControllers');


router.post("/add_review", validation.reviewValidation, reviewController.addReview)
router.patch("/update_review/:_id", reviewController.updateReview)
router.delete("/delete_review/:_id", reviewController.deleteReview)
router.get("/list_review", reviewController.listReview)
router.get("/detail_review/:_id", reviewController.detailReview)

module.exports = router;
