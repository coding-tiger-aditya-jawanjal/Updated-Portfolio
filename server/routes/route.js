const express = require("express");
const {
  updateAbout,
  loginUser,
  addSkill,
  addContact,
  addProject,
  removeProject,
  removeContact,
  removeSkills,
  updateSkill,
  getProfile,
  updateContact,
  updateProject,
  test,
  addProfile,
} = require("../controllers/profile-controller");
const { auth } = require("../middlewares/auth");
const { upload } = require("../middlewares/config");
const router = express.Router();

// router.post("/test",upload.single("file") , test );

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
