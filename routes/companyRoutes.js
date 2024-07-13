const express = require("express");
const router = express.Router();

const {sellCompany,createCompany,deleteCompany,getAllCompaniesData} = require("../controllers/companyController");
const { createDomain,getAllDomains } = require("../controllers/createDomain");

router.put("/company/sellCompany",sellCompany);
router.post("/company/createCompany",createCompany);
router.post("/company/createDomain",createDomain);
router.delete("/company/deleteCompany/:id",deleteCompany);
router.get("/company/getAllCompanies",getAllCompaniesData);

router.get("/company/getAllDomains",getAllDomains);

module.exports = router;

