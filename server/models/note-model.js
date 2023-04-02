const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
    name:{
      Type:String
    },
    email:{
      Type:String
    },
    
  },{timestamps:true});
 module.exports = mongoose.model("Note",notesSchema);