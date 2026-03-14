const express = require("express");
const router = express.Router();

const researcherController = require("../controllers/researchercontroller");

router.post("/create", researcherController.createResearcherProfile);

module.exports = router;