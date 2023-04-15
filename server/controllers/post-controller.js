const Profile = require("../models/profile-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await Profile.findOne({ email: email });
    if (userExists) {
      const matchedPassword = await bcrypt.compare(
        password,
        userExists.password
      );
      if (matchedPassword) {
        const token = jwt.sign({ id: userExists._id }, process.env.JWT_SECRET, {
          expiresIn: "30d",
        });
        res.status(200).json(token);
      } else {
        res.status(400).json("Incorrect Password !");
      }
    } else {
      res.status(400).json("User not exists !");
    }
  } catch (err) {
    res.status(400).json(`The error in loginUser is : ${err}`);
  }
};

exports.addSkill = async (req, res) => {
  try {
    const data = await Profile.findById(req.user.id);
    if (data) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        public_id: req.body.name,
      });
      await Profile.findByIdAndUpdate(req.user.id, {
        $push: { skills: { name: req.body.name, logo: result.secure_url } },
      });
      res.status(201).json("Skill Added.");
    } else {
      res.status(400).json("no user");
    }
  } catch (err) {
    res.status(400).json(`The error in addSkill is ${err}`);
  }
};

exports.addContact = async (req, res) => {
  try {
    const { title, href } = req.body;
    const data = await Profile.findById(req.user.id);
    if (data) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        public_id: req.body.title,
      });
      await Profile.findByIdAndUpdate(req.user.id, {
        $push: {
          contacts: { title: title, href: href, logo: result.secure_url },
        },
      });
      res.status(201).json("newContact added.");
    } else {
      res.status(400).json("no user");
    }
  } catch (err) {
    res.status(400).json(`The error in addContact is ${err}`);
  }
};

exports.addProject = async (req, res) => {
  try {
    const { name, github, link } = req.body;
    const data = await Profile.findById(req.user.id);
    if (data) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        public_id: name,
      });
      await Profile.findByIdAndUpdate(req.user.id, {
        $push: {
          projects: {
            name: name,
            github: github,
            link: link,
            image: result.secure_url,
          },
        },
      });
      res.status(201).json("newProject added.");
    } else {
      res.status(400).json("no user");
    }
  } catch (err) {
    res.status(400).json(`The error in addProject is ${err}`);
  }
};
