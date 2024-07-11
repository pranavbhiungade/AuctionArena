const express = require("express");
const router = express.Router();

const {sellCompany,createCompany,deleteCompany} = require("../controllers/companyController");
const { createDomain } = require("../controllers/createDomain");

router.put("/company/sellCompany/",sellCompany);
router.post("/company/createCompany",createCompany);
router.post("/company/createDomain",createDomain);
router.delete("/company/deleteCompany/:id",deleteCompany);

module.exports = router;

