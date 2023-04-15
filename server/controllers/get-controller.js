const Profile = require("../models/profile-model");

exports.getProfile = async (req, res) => {
  try {
    const data = await Profile.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(400).json(`The error in getProfile is : ${err}`);
  }
};
