// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';

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
      <h1>Mood Entries</h1>
      <ul>
        {moodEntries && moodEntries.map((entry) => (
          <li key={entry._id}>
            <p><strong>Name:</strong> {entry.Name}</p>
            <p><strong>Location:</strong> {entry.Location}</p>
            <p><strong>Date:</strong> {entry.Date}</p>
            <p><strong>Time:</strong> {entry.Time}</p>
            <fieldset>
              <legend>Mood Selection:</legend>
              <label>
                Happy
                <input type="checkbox" name="Happy" checked={entry.MoodSelection.Happy} readOnly />
              </label>
              <label>
                Sad
                <input type="checkbox" name="Sad" checked={entry.MoodSelection.Sad} readOnly />
              </label>
              <label>
                Anxious
                <input type="checkbox" name="Anxious" checked={entry.MoodSelection.Anxious} readOnly />
              </label>
              <label>
                Stressed
                <input type="checkbox" name="Stressed" checked={entry.MoodSelection.Stressed} readOnly />
              </label>
              <label>
                Neutral
                <input type="checkbox" name="Neutral" checked={entry.MoodSelection.Neutral} readOnly />
              </label>
              <label>
                Excited
                <input type="checkbox" name="Excited" checked={entry.MoodSelection.Excited} readOnly />
              </label>
            </fieldset>
            <p><strong>Emotion Echo:</strong> {entry.EmotionEcho}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayMoodEntries;

