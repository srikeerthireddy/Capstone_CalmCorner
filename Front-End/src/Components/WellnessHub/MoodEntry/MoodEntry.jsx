// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

function MoodEntryForm() {
  const [formData, setFormData] = useState({
    Name: '',
    Location: '',
    Date: '',
    Time: '',
    MoodSelection: {
      Happy: false,
      Sad: false,
      Anxious: false,
      Stressed: false,
      Neutral: false,
      Excited: false
    },
    EmotionEcho: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        MoodSelection: {
          ...prevState.MoodSelection,
          [name]: checked
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5226/api/moodEntry/EntryCreate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to add mood entry');
      }
      const data = await response.json();
      console.log('Mood entry added successfully', data);

      setFormData({
        Name: '',
        Location: '',
        Date: '',
        Time: '',
        MoodSelection: {
          Happy: false,
          Sad: false,
          Anxious: false,
          Stressed: false,
          Neutral: false,
          Excited: false
        },
        EmotionEcho: ''
      });
    } catch (error) {
      console.error('Error adding the mood entry', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Mood Entry</h1>
        </div>
        <div>
          <label>Name:</label>
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} required />
        </div>
        <div>
          <label>Location:</label>
          <input type="text" name="Location" value={formData.Location} onChange={handleChange} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="text" name="Date" value={formData.Date} onChange={handleChange} required />
        </div>
        <div>
          <label>Time:</label>
          <input type="text" name="Time" value={formData.Time} onChange={handleChange} required />
        </div>
        <fieldset>
          <legend>Mood Selection:</legend>
          <label>
            Happy
            <input type="checkbox" name="Happy" checked={formData.MoodSelection.Happy} onChange={handleChange} />
          </label>
          <label>
            Sad
            <input type="checkbox" name="Sad" checked={formData.MoodSelection.Sad} onChange={handleChange} />
          </label>
          <label>
            Anxious
            <input type="checkbox" name="Anxious" checked={formData.MoodSelection.Anxious} onChange={handleChange} />
          </label>
          <label>
            Stressed
            <input type="checkbox" name="Stressed" checked={formData.MoodSelection.Stressed} onChange={handleChange} />
          </label>
          <label>
            Neutral
            <input type="checkbox" name="Neutral" checked={formData.MoodSelection.Neutral} onChange={handleChange} />
          </label>
          <label>
            Excited
            <input type="checkbox" name="Excited" checked={formData.MoodSelection.Excited} onChange={handleChange} />
          </label>
        </fieldset>
        <div>
          <label>Emotion Echo:</label>
          <textarea name="EmotionEcho" value={formData.EmotionEcho} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default MoodEntryForm;
