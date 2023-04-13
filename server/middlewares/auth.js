const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
    try {
      const decoded = jwt.verify(
        req.headers.authorization || req.headers.Authorization,
        process.env.JWT_SECRET
      );
      if (decoded) {
        req.user = decoded;
        next();
      } else {
        res.status(400).json("Error in decoding token.");
      }
    } catch (err) {
      res.status(400).json(`The error in verifyToken is : ${err}`);
    }
  };