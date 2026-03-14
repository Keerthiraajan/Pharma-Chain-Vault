const express = require("express");
const router = express.Router();

const companyController = require("../controllers/companycontroller");

router.post("/create", companyController.createCompanyProfile);

module.exports = router;