const express = require("express");
const { auth } = require("../middlewares/auth");
const { upload } = require("../middlewares/config");
const { getProfile } = require("../controllers/get-controller");
const {
  loginUser,
  addSkill,
  addContact,
  addProject,
} = require("../controllers/post-controller");
const {
  removeProject,
  removeContact,
  removeSkills,
} = require("../controllers/delete-controller");
const {
  updateAbout,
  updateSkill,
  updateContact,
  updateProject,
} = require("../controllers/put-controller");
const router = express.Router();

router.get("/", getProfile);

router.post("/login", loginUser);
router.post("/skills", auth, upload.single("file"), addSkill);
router.post("/contacts", auth, upload.single("file"), addContact);
router.post("/projects", auth, upload.single("file"), addProject);

router.delete("/projects/:id", auth, removeProject);
router.delete("/contacts/:id", auth, removeContact);
router.delete("/skills/:id", auth, removeSkills);

router.put("/about", auth, upload.single("file"), updateAbout);
router.put("/skills/:id", auth, upload.single("file"), updateSkill);
router.put("/contacts/:id", auth, upload.single("file"), updateContact);
router.put("/projects/:id", auth, upload.single("file"), updateProject);

module.exports = router;
