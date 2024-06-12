const express = require("express");
const router = express.Router();
const diariesController = require("../controllers/diariesController");
router.get("/diaries", diariesController.fetchAlldiaries);
router.get("/diaries/:id", diariesController.fetchDiaryById);

module.exports = router;
