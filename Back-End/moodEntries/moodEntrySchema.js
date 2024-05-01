const mongoose=require('mongoose');

const moodEntrySchema=mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Location:{
        type:String,
        required:true
    },
    Date:{
        type:String,
        required:true
    },
    Time: {
        type: String,
        required: true
    },
    MoodSelection: {
        type: {
            Happy: Boolean,
            Sad: Boolean,
            Anxious: Boolean,
            Stressed: Boolean,
            Neutral: Boolean,
            Excited: Boolean
        },
        required: true
    },
    EmotionEcho: {
        type: String,
        required: true
    }
});
const moodEntryModel=mongoose.model('moodEntries',moodEntrySchema);
module.exports=moodEntryModel;