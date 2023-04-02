const express = require("express");
const { addNote } = require("../controllers/note-controller");
const router = express.Router();

router.route("/").post(addNote);

module.exports = router;