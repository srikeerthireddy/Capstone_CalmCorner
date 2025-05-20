// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./UpdateEntry.css";

const UpdateRender = () => {
  const location = useLocation();
  const initialData = location.state;

  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData);
  const [error, setError] = useState('');

  if (!initialData) {
    return <div>No data to update</div>;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      MoodSelection: {
        ...prevState.MoodSelection,
        [name]: checked,
      },
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://s61-srikeerthi-capstone-calmcorner-5.onrender.com/api/moodEntry/EntryUpdate/${formData._id}`, formData)
      .then((res) => {
        console.log("Entity updated successfully", res.data);
        navigate('/wellnesshub/track-mood');
      })
      .catch((err) => {
        console.log("Error updating entity:", err);
        setError('There was a problem updating the entity. Please try again.');
      });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleUpdate} className="mood-entry-form">
        <h1>UPDATE MOOD ENTRY</h1>
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
          <input type="text" name="Date" value={formData.Date} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>🕛Time:</label>
          <input type="text" name="Time" value={formData.Time} onChange={handleChange} required />
        </div>
        <fieldset className="form-group">
          <legend>Mood Selection:</legend>
          <label>
            😄 Happy
            <input
              type="checkbox"
              name="Happy"
              checked={formData.MoodSelection.Happy}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            😔 Sad
            <input
              type="checkbox"
              name="Sad"
              checked={formData.MoodSelection.Sad}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            😰 Anxious
            <input
              type="checkbox"
              name="Anxious"
              checked={formData.MoodSelection.Anxious}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            🥵 Stressed
            <input
              type="checkbox"
              name="Stressed"
              checked={formData.MoodSelection.Stressed}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            😌 Neutral
            <input
              type="checkbox"
              name="Neutral"
              checked={formData.MoodSelection.Neutral}
              onChange={handleCheckboxChange}
            />
          </label>
          <label>
            🤩 Excited
            <input
              type="checkbox"
              name="Excited"
              checked={formData.MoodSelection.Excited}
              onChange={handleCheckboxChange}
            />
          </label>
        </fieldset>
        <div className="form-group">
          <label>Emotion Echo:</label>
          <textarea name="EmotionEcho" value={formData.EmotionEcho} onChange={handleChange} required />
        </div>
        <div className='button-con'>
          <button type="submit" className="submit-button">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateRender;