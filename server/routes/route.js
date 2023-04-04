const express = require("express");
const {
  updateAbout,
  loginUser,
  addSkill,
  addContact,
  addProject,
} = require("../controllers/profile-controller");
const router = express.Router();

router.post("/login", loginUser);

router.post("/skills", addSkill);
router.post("/contacts", addContact);
router.post("/projects", addProject);

router.put("/about", updateAbout);

module.exports = router;
