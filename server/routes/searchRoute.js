const express = require("express");
const router = express.Router();

const searchController = require("../controllers/searchController");

router.get("/search/:query", searchController.searchAll);

module.exports = router;
