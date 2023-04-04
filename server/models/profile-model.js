const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    about: {
      title: {
        type: String,
      },
      description: {
        type: String,
      },
      resume: {
        type: String,
      },
    },
    skills: [
      {
        name: {
          type: String,
        },
        logo: {
          type: String,
        },
      },
    ],
    contacts: [
      {
        title: {
          type: String,
        },
        href: {
          type: String,
        },
        logo: {
          type: String,
        },
      },
    ],
    projects: [
      {
        name: {
          type: String,
        },
        github: {
          type: String,
        },
        link: {
          type: String,
        },
        image: {
          type: String,
        },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("profile", profileSchema);
