const express=require('express');
const router=express.Router();
const authenticate=require('../middleware/authenticate');
const moodEntryModel=require('./moodEntrySchema');
router.post('/EntryCreate', authenticate, async (req, res) => {
  try {
      const { Name, Location, Date, Time, MoodSelection, EmotionEcho } = req.body;
      const userId = req.user.userId; // Get userId from the authenticated user

      // Create a new mood entry
      const newMoodEntry = new moodEntryModel({
          Name,
          Location,
          Date,
          Time,
          MoodSelection,
          EmotionEcho,
          userId
      });

      // Save the mood entry to the database
      await newMoodEntry.save();

      res.status(201).json({ message: 'Mood entry created successfully', moodEntry: newMoodEntry });
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});
router.get('/EntryRead',async (req,res)=>{
    try{
        const moodEntries=await moodEntryModel.find();
        res.status(201).json({message:"MoodEntries retrieved successfully",moodEntries});
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