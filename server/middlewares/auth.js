const jwt = require("jsonwebtoken");

const auth = async (req,res,next) =>{
    try {
        const token = req.headers["Authorization"];
        const decode = jwt.verify(token , process.env.JWT_SECRET);
        console.log(decode);
    } catch (err) {
        res.status(400).json(`The error in auth is : ${auth}`);
    }
}
module.exports = auth;