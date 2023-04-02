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

connectDB();

app.get("/",async (req,res)=>{
  try {
    const notes = await Notes.find({});
    res.status(200).json(notes);
  } catch (err) {
    console.log(`The error in get is : ${err}`);
  }
});

app.listen(process.env.PORT , ()=>{
  console.log(`Server is listening on PORT : ${process.env.PORT}`);
});

