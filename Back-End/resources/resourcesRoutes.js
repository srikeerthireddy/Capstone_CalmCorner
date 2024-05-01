const express=require('express');
const router=express.Router();
const resourceModel=require('./resourcesSchema');
router.post('/create', async (req,res)=>{
    const resource=new resourceModel({
        question:req.body.question,
        answer:req.body.answer
    });
    try{
        const newResource=await resource.save();
        res.status(201).json({message:"Resource created successfully",resource:newResource});

    }catch(error){
        res.status(400).json({message:error.message});
    }
});
router.get('/read',async (req,res)=>{
    try{
        const resources=await resourceModel.find();
        res.status(201).json({message:"Resources retrieving from the database",resources});
    }catch(error){
        res.status(400).json({message:error.message});
    }
})
module.exports=router;