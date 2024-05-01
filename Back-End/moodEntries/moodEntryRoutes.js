const express=require('express');
const router=express.Router();
const moodEntryModel=require('./moodEntrySchema');
router.post('/EntryCreate',async (req,res)=>{
    const {
        Name,
        Location,
        Date,
        Time,
        MoodSelection,
        EmotionEcho
    }=req.body;
    try{
        const moodEntry=new moodEntryModel({
           Name,
           Location,
           Date,
           Time,
           MoodSelection,
           EmotionEcho
        });
        const newMoodEntry=await moodEntry.save();
        res.status(201).json({message:"Mood Entry created successfully",moodEntry:newMoodEntry});
    }catch(error){
        res.status(400).json({message:error.message});
    }
    
});
module.exports=router;