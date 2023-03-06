const mongoose = require("mongoose");
const imgSliderSchema = new mongoose.Schema({
    imageUrl:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true
    },
    category:{
    type:String,
    required:true
   },
      
})

module.exports = mongoose.model('imgSlider',imgSliderSchema );
