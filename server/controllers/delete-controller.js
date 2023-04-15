const Profile = require("../models/profile-model");
const cloudinary = require("cloudinary").v2;

exports.removeSkills = async (req, res) => {
  try {
    const data = await Profile.findById(req.user.id);
    if (data) {
      await cloudinary.uploader.destroy()
      await Profile.findByIdAndUpdate(req.user.id, {
        $pull: {
          skills: { _id: req.params.id },
        },
      });
      res.status(201).json("Skill Deleted successfully.");
    } else {
      res.status(400).json("no user");
    }
  } catch (err) {
    res.status(400).json(`The error in removeSkills is ${err}`);
  }
};

exports.removeContact = async (req, res) => {
  try {
    const data = await Profile.findById(req.user.id);
    if (data) {
      await Profile.findByIdAndUpdate(req.user.id, {
        $pull: {
          contacts: { _id: req.params.id },
        },
      });
      res.status(201).json("Contact Deleted successfully.");
    } else {
      res.status(400).json("no user");
    }
  } catch (err) {
    res.status(400).json(`The error in removeContact is ${err}`);
  }
};

exports.removeProject = async (req, res) => {
  try {
    const data = await Profile.findById(req.user.id);
    if (data) {
      await Profile.findByIdAndUpdate(req.user.id, {
        $pull: {
          projects: { _id: req.params.id },
        },
      });
      res.status(201).json("Project Deleted successfully.");
    } else {
      res.status(400).json("no user");
    }
  } catch (err) {
    res.status(400).json(`The error in removeProject is ${err}`);
  }
};
