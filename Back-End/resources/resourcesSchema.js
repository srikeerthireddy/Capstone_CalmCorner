const mongoose=require('mongoose');

const resourceSchema= new mongoose.Schema({
      question:{
        type:String,
        required:true
      },
      answer:{
        type:String,
        required:true
      }

});

const resourcesModel=mongoose.model("resources",resourceSchema);
module.exports=resourcesModel;