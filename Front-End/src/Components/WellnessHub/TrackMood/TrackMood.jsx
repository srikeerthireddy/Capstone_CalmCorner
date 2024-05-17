// eslint-disable-next-line no-unused-vars
import React ,{useState,useEffect}from 'react'
// import axios from 'axios';
function TrackMood() {
  // const [moodEntries,setMoodEntries]=useState([]);

  // useEffect(()=>{
  //   axios.get("http://localhost:5226/api/moodEntry/EntryRee")
  //   .then(response=>{
  //     setMoodEntries(response.data.moodEntries)
  //   }).catch(error=>{
  //     console.log("Error fetching mood entries",error);
  //   })
  // },[]);
  return (
    <div>
      <h1>Track Mood</h1>
      {/* <div className='mood-entries-container'>
      {moodEntries.map(entry=>(
        <div key={entry._id} className='mood-entry'>
          <h2>Name:{entry.Name}</h2>
          <p>Location:{entry.Location}</p>
          <p>Date:{entry.Date}</p>
          <p>Time:{entry.Time}</p>
          <p>Emotion Echo: {entry.MoodSelection.EmotionEcho}</p>
        </div>
      ))}
      </div> */}
      
    </div>
    
  )
}

export default TrackMood;
