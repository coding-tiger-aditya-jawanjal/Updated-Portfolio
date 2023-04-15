const Profile = require("../models/profile-model");
const cloudinary = require("cloudinary").v2;

exports.updateAbout = async (req, res) => {
  try {
    const { title, description } = req.body;
    const data = await Profile.findById(req.user.id);
    if (data) {
      await cloudinary.uploader.destroy(title);
      const result = await cloudinary.uploader.upload(req.file.path, {
        public_id: title,
      });
      const updatedAbout = await Profile.findByIdAndUpdate(req.user.id, {
        about: {
          title: title,
          description: description,
          resume: result.secure_url,
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
    await cloudinary.uploader.destroy(name);
    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: name,
    });
    await Profile.findOneAndUpdate(
      { _id: req.user.id, "skills._id": `${req.params.id}` },
      {
        $set: {
          "skills.$.name": name,
          "skills.$.logo": result.secure_url,
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
    const { title, href } = req.body;
    await cloudinary.uploader.destroy(title);
    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: title,
    });
    await Profile.findOneAndUpdate(
      { _id: req.user.id, "contacts._id": `${req.params.id}` },
      {
        $set: {
          "contacts.$.title": title,
          "contacts.$.href": href,
          "contacts.$.logo": result.secure_url,
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
    const { name, github, link } = req.body;
    await cloudinary.uploader.destroy(name);
    const result = await cloudinary.uploader.upload(req.file.path, {
      public_id: name,
    });
    await Profile.findOneAndUpdate(
      { _id: req.user.id, "projects._id": `${req.params.id}` },
      {
        $set: {
          "projects.$.name": name,
          "projects.$.github": github,
          "projects.$.link": link,
          "projects.$.image": result.secure_url,
        },
      }
    );
    res.status(201).json("Project Updated.");
  } catch (err) {
    res.status(400).json(`The error in updateProject is ${err}`);
  }
};
