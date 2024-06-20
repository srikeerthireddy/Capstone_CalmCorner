/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./MoodEntry.css";
import axiosInstance from "../axios/axios";
import Cookies from "js-cookie";
// import { set } from "mongoose";
import { jwtDecode } from "jwt-decode";

function MoodEntryForm() {
  const token = Cookies.get("token");
  const decodedToken = jwtDecode(token);
  const [formData, setFormData] = useState({
    Name: "",
    Location: "",
    Date: "",
    Time: "",
    MoodSelection: {
      Happy: false,
      Sad: false,
      Anxious: false,
      Stressed: false,
      Neutral: false,
      Excited: false,
    },
    EmotionEcho: "",
    userId: decodedToken.userId,
  });

  // setFormData((prevState)=>({ ...prevState, userId:  }));
  const [error, setError] = useState("");
  // console.log(formData)
  // const getCookie = (name) => {
  //   const value = `; ${document.cookie}`;
  //   const parts = value.split(`; ${name}=`);
  //   if (parts.length === 2) return parts.pop().split(";").shift();
  // };

  // const decodeToken = (token) => {
  //   const base64Url = token.split(".")[1];
  //   const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  //   const jsonPayload = decodeURIComponent(
  //     atob(base64)
  //       .split("")
  //       .map((c) => {
  //         return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  //       })
  //       .join("")
  //   );

  //   return JSON.parse(jsonPayload);
  // };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        MoodSelection: {
          ...prevState.MoodSelection,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData)
    try {
      const response = await axiosInstance.post(
        "http://localhost:5226/api/moodEntry/EntryCreate",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // if (!response.data.success) {
      //   throw new Error(response.data.message || "Failed to add mood entry");
      // }
      console.log("Mood entry added successfully", response.data);

      setFormData({
        Name: "",
        Location: "",
        Date: "",
        Time: "",
        MoodSelection: {
          Happy: false,
          Sad: false,
          Anxious: false,
          Stressed: false,
          Neutral: false,
          Excited: false,
        },
        EmotionEcho: "",
      });
      setError("");
    } catch (error) {
      console.error("Error adding the mood entry", error);
      setError(
        error.response?.data?.message ||
          "There was a problem submitting your mood entry. Please try again."
      );
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="mood-entry-form">
        <h1>Daily Mood Entry</h1>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label>👉🏻 Name:</label>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>🗾Location:</label>
          <input
            type="text"
            name="Location"
            value={formData.Location}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>🗓 Date:</label>
          <input
            type="date"
            name="Date"
            value={formData.Date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>🕛Time:</label>
          <input
            type="time"
            name="Time"
            value={formData.Time}
            onChange={handleChange}
            required
          />
        </div>
        <fieldset className="form-group">
          <legend>Mood Selection:</legend>
          {Object.keys(formData.MoodSelection).map((mood) => (
            <label key={mood}>
              {mood === "Happy" && "😄 Happy"}
              {mood === "Sad" && "😔 Sad"}
              {mood === "Anxious" && "😰 Anxious"}
              {mood === "Stressed" && "🥵 Stressed"}
              {mood === "Neutral" && "😌 Neutral"}
              {mood === "Excited" && "🤩 Excited"}
              <input
                type="checkbox"
                name={mood}
                checked={formData.MoodSelection[mood]}
                onChange={handleChange}
              />
            </label>
          ))}
        </fieldset>
        <div className="form-group">
          <label>Emotion Echo:</label>
          <textarea
            name="EmotionEcho"
            value={formData.EmotionEcho}
            onChange={handleChange}
            required
          />
        </div>
        <div className="button-con">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default MoodEntryForm;
