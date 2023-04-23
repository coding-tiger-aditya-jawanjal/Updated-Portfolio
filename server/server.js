const express = require("express");
const  dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./db/conn");
const router = require("./routes/route");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use("",router);
app.use(express.static(__dirname + "/images"));

connectDB();

app.listen(process.env.PORT , ()=>{
  console.log(`Server is listening on PORT : ${process.env.PORT}`);
});

