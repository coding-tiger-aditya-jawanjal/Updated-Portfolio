const Profile = require("../models/profile-model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

exports.test = async (req, res) => {
  console.log(req.body);
  const result = await cloudinary.uploader.upload(req.file.path, {
    public_id: req.body.name,
  });
  res.send(result.secure_url);
  // res.send(req.user.id);
};
//GET
exports.getProfile = async (req, res) => {
  try {
    const data = await Profile.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(`The error in getProfile is : ${err}`);
  }
};

//POST

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
  // console.log(req.file);
  try {
    const data = await Profile.findById(req.user.id);
    if (data) {
      // console.log(req.file);
      // res.send(req.file);
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
        $push: { contacts: { title: title, href: href, logo: result.secure_url } },
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
        public_id: req.body.name,
      });
       await Profile.findByIdAndUpdate(req.user.id, {
        $push: {
          projects: { name: name, github: github, link: link, image: result.secure_url },
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

//DELETE
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
//data._id and id from req.body in findbyId
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

exports.removeSkills = async (req, res) => {
  try {
    const data = await Profile.findById(req.user.id);
    if (data) {
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

//Update
exports.updateAbout = async (req, res) => {
  try {
    const { title, description } = req.body;
    const data = await Profile.findById(req.user.id);
    if (data) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        public_id: req.body.title,
      });
      const updatedAbout = await Profile.findByIdAndUpdate(req.user.id, {
        about: {
          title: title,
          description: description,
          resume:result.secure_url
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

exports.updateSkill = async (req, res) => {
  try {
    const { name, logo } = req.body;
    await Profile.findOneAndUpdate(
      { _id: req.user.id, "skills._id": `${req.params.id}` },
      {
        $set: {
          "skills.$.name": name,
          "skills.$.logo": logo,
        },
      }
    );
    res.status(201).json("Skill Updated.");
  } catch (err) {
    res.status(400).json(`The error in updateSkill is ${err}`);
  }
};

exports.updateContact = async (req, res) => {
  try {
    const { title, href, logo } = req.body;
    await Profile.findOneAndUpdate(
      { _id: req.user.id, "contacts._id": `${req.params.id}` },
      {
        $set: {
          "contacts.$.title": title,
          "contacts.$.href": href,
          "contacts.$.logo": logo,
        },
      }
    );
    res.status(201).json("Contact Updated.");
  } catch (err) {
    res.status(400).json(`The error in updateContact is ${err}`);
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { name, github, link, image } = req.body;
    await Profile.findOneAndUpdate(
      { _id: req.user.id, "projects._id": `${req.params.id}` },
      {
        $set: {
          "projects.$.name": name,
          "projects.$.github": github,
          "projects.$.link": link,
          "projects.$.image": image,
        },
      }
    );
    res.status(201).json("Project Updated.");
  } catch (err) {
    res.status(400).json(`The error in updateProject is ${err}`);
  }
};
