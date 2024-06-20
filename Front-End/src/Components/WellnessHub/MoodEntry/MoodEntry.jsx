// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axiosInstance from '../axios/axios'; // Ensure this is the correct path to your axios instance
import './MoodEntry.css';

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

  const [error, setError] = useState('');

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
      const response = await axiosInstance.post('/moodEntry/EntryCreate', formData);
      if (response.status !== 200) {
        throw new Error('Failed to add mood entry');
      }
      console.log('Mood entry added successfully', response.data);

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
      setError('');
    } catch (error) {
      console.error('Error adding the mood entry', error);
      setError('There was a problem submitting your mood entry. Please try again.');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="mood-entry-form">
        <h1>Daily Mood Entry</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label>👉🏻 Name:</label>
          <input type="text" name="Name" value={formData.Name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>🗾Location:</label>
          <input type="text" name="Location" value={formData.Location} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>🗓 Date:</label>
          <input type="date" name="Date" value={formData.Date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>🕛Time:</label>
          <input type="time" name="Time" value={formData.Time} onChange={handleChange} required />
        </div>
        <fieldset className="form-group">
          <legend>Mood Selection:</legend>
          <label>
           😄 Happy
            <input type="checkbox" name="Happy" checked={formData.MoodSelection.Happy} onChange={handleChange} />
          </label>
          <label>
           😔  Sad
            <input type="checkbox" name="Sad" checked={formData.MoodSelection.Sad} onChange={handleChange} />
          </label>
          <label>
            😰 Anxious
            <input type="checkbox" name="Anxious" checked={formData.MoodSelection.Anxious} onChange={handleChange} />
          </label>
          <label>
           🥵  Stressed
            <input type="checkbox" name="Stressed" checked={formData.MoodSelection.Stressed} onChange={handleChange} />
          </label>
          <label>
            😌 Neutral
            <input type="checkbox" name="Neutral" checked={formData.MoodSelection.Neutral} onChange={handleChange} />
          </label>
          <label>
           🤩  Excited
            <input type="checkbox" name="Excited" checked={formData.MoodSelection.Excited} onChange={handleChange} />
          </label>
        </fieldset>
        <div className="form-group">
          <label>Emotion Echo:</label>
          <textarea name="EmotionEcho" value={formData.EmotionEcho} onChange={handleChange} required />
        </div>
        <div className='button-con'>
        <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default MoodEntryForm;
