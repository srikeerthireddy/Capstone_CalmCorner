const express=require('express');
const router=express.Router();
const resourcesModel=require('./resourcesSchema');
router.get('/resources',async (req,res)=>{
    try{
     const resources=await resourcesModel.find();
     res.json(resources);
    }catch(error){
        res.status(500).json({message:error.message});
    }
});
router.post('/resources', async (req,res)=>{
    const resource=new resourcesModel({
        question:req.body.question,
        answer:req.body.answer
    });
    try{
        const newResource=await resource.save();
        res.status(201).json(newResource);

    }catch(error){
        res.status(400).json({message:error.message});
    }
});
module.exports=router;