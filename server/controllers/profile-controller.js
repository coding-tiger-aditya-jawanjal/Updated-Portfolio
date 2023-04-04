const Profile = require("../models/profile-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

exports.updateAbout = async (req, res) => {
  try {
    const { title, description, id } = req.body;
    const data = await Profile.findById(id);
    if (data) {
      const updatedAbout = await Profile.findByIdAndUpdate(data._id, {
        about: {
          title: title,
          description: description,
        },
      });
      res.status(201).json(updatedAbout);
    } else {
      res.status(400).json("No User");
    }
  } catch (err) {
    res.status(400).json(`The error in updateAbout is ${err}`);
  }
};

exports.addSkill = async (req, res) => {
  try {
    const { name, logo, id } = req.body;
    const data = await Profile.findById(id);
    if (data) {
      const newSkill = await Profile.findByIdAndUpdate(data._id, {
        $push: { skills: { name: name, logo: logo } },
      });
      res.status(201).json(newSkill);
    } else {
      res.status(400).json("no user");
    }
  } catch (err) {
    res.status(400).json(`The error in updateSkills is ${err}`);
  }
};

exports.addContact = async (req, res) => {
  try {
    const { title, href, logo, id } = req.body;
    const data = await Profile.findById(id);
    if (data) {
      const newContact = await Profile.findByIdAndUpdate(data._id, {
        $push: { contacts: { title: title, href: href, logo: logo } },
      });
      res.status(201).json(newContact);
    } else {
      res.status(400).json("no user");
    }
  } catch (err) {
    res.status(400).json(`The error in addContact is ${err}`);
  }
};

exports.addProject = async (req, res) => {
  try {
    const { name, github, link, image, id } = req.body;
    const data = await Profile.findById(id);
    if (data) {
      const newProject = await Profile.findByIdAndUpdate(data._id, {
        $push: {
          projects: { name: name, github: github, link: link, image: image },
        },
      });
      res.status(201).json(newProject);
    } else {
      res.status(400).json("no user");
    }
  } catch (err) {
    res.status(400).json(`The error in addProject is ${err}`);
  }
};
