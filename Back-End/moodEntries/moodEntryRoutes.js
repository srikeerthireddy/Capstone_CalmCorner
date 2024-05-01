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
router.get('/EntryRead',async (req,res)=>{
    try{
        const moodEntries=await moodEntryModel.find();
        res.status(201).json({message:"MoodEntries retrieved successfully"});
    }catch(error){
        res.status(400).json({message:error.message});
    }
});
router.put('/EntryUpdate/:id',async (req,res)=>{
    const {id}=req.params;
    try{
        const updateMoodEntry=await moodEntryModel.findByIdAndUpdate(id,req.body,{new:true});
        if(!updateMoodEntry){
            return res.status(404).json({message:"Mood Entry not found"});
        }
        res.status(200).json({message:"Mood entry updated succeessfully",moodEntry:updateMoodEntry});
    }catch(error){
        res.status(400).json({message:error.message});
    }
});
router.delete('/EntryDelete/:id',async (req,res)=>{
    const {id}=req.params;
    try{
        const deleteMoodEntry=await moodEntryModel.findByIdAndDelete(id);
        if(!deleteMoodEntry){
            return res.status(404).json({message:"Mood entry not found"});
        }
        res.status(200).json({message:"Mood entry deleted successfully",moodEntry:deleteMoodEntry});
    }catch(error){
        res.status(400).json({message:error.message});
    }
});
module.exports=router;