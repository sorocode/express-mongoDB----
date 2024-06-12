const express = require("express");
const router = express.Router();
const diaryController = require("../controllers/diaryController");
router.get("/diary", diaryController.getDiary);
// router.get("/diary/:id", diaryController.getDiaryById);
router.post("/diary", diaryController.postDiary);
module.exports = router;
