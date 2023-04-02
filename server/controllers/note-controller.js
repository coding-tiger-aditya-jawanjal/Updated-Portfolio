const Note = require("../models/note-model");

exports.addNote = async (req,res) =>{
    try {
        const note = new Note({
          name:req.body.name,
          email:req.body.email,
          
        });
        const result = await note.save();
        res.send(result);
      } catch (err) {
        console.log(`The error in post is : ${err}`);
      }
}