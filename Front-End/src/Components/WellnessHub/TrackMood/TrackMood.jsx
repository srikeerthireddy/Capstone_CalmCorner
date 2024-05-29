// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './TrackMood.css';

function DisplayMoodEntries() {
  const [moodEntries, setMoodEntries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMoodEntries = async () => {
      try {
        const response = await fetch('http://localhost:5226/api/moodEntry/EntryRead');
        const data = await response.json();
        console.log("from fetch", data);
        if (!Array.isArray(data.moodEntries)) {
          throw new Error('Unexpected data format');
        }
        setMoodEntries(data.moodEntries);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchMoodEntries();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1 className='mood-h1'>Mood Entry Tracker</h1>
      <div className="mood-entries-container">
        {moodEntries && moodEntries.map((entry) => (
          <div className="mood-entry" key={entry._id}>
            <p className='name'>{entry.Name} </p>
            <div className='one-line'>
            <div className='location-flex'>
            <p className='location'>{entry.Location}</p>
            </div>
            
            
            <div className='track-flex'>
              
            <p>{entry.Date} </p>
            <p>{entry.Time} </p>
            </div>
            </div>
           
            <div className='mood-flex'>
            <div className="mood-selection">
              <p>{getSelectedMoods(entry.MoodSelection)}</p>
            </div>
            <p className='emotion'>{entry.EmotionEcho} </p>
            </div>
           
          </div>
        ))}
      </div>
    </div>
  );
}
function getSelectedMoods(moodSelection) {
  const selectedMoods = [];
  for (const mood in moodSelection) {
    if (moodSelection[mood]) {
      selectedMoods.push(getEmojiForMood(mood));
    }
  }
  return selectedMoods.join(' ');
}

function getEmojiForMood(mood) {
  switch (mood) {
    case 'Happy':
      return '😄Happy  ';
    case 'Sad':
      return '😔Sad  ';
    case 'Anxious':
      return '😰Anxious ';
    case 'Stressed':
      return '🥵Stressed ';
    case 'Neutral':
      return '😌Neutral ';
    case 'Excited':
      return '🤩Excited ';
    default:
      return '';
  }
}

export default DisplayMoodEntries;
