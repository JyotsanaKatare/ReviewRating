
const express = require('express')
const router = express.Router()
const { upload } = require('../middlewares/imageStorage')
const companyController = require('../controllers/compControllers')
const validation = require('../validation/company/compValidation')


router.post("/addCompany", upload.single("company_logo"), validation.compValidation, companyController.addCompany)
router.get("/getCompany", companyController.getCompany)
router.get("/comp_review_detail/:id", companyController.compReviewDetail)
router.get("/search_comp", companyController.compSearch)

module.exports = router;
