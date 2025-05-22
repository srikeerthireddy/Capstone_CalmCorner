import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Calendar, Clock, MapPin, User, Send, AlertCircle } from 'lucide-react';

export default function MoodEntryForm() {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const decodedToken = token ? jwtDecode(token) : { userId: "" };
  
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
  
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        MoodSelection: { ...prevState.MoodSelection, [name]: checked },
      }));
    } else {
      setFormData((prevState) => ({ ...prevState, [name]: value }));
    }
  };

  const handleCheckboxChange = (mood) => {
    setFormData((prevState) => ({
      ...prevState,
      MoodSelection: {
        ...prevState.MoodSelection,
        [mood]: !prevState.MoodSelection[mood],
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await axios.post(
        "https://s61-srikeerthi-capstone-calmcorner-5.onrender.com/api/moodEntry/EntryCreate",
        formData,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
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
        userId: decodedToken.userId,
      });
      
      setError("");
      navigate('/wellnesshub/track-mood');
    } catch (error) {
      console.error("Error adding the mood entry", error);
      setError(
        error.response?.data?.message ||
        "There was a problem submitting your mood entry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8  ">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm">
          <div className="bg-gradient-to-r from-purple-600/10 to-teal-600/10 p-6 rounded-t-xl">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-600">
              Daily Mood Entry
            </h2>
            <p className="text-slate-600 mt-1">
              Track your mood and emotions to better understand your mental well-being
            </p>
          </div>
          <div className="p-6">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6 flex items-center">
                <AlertCircle className="h-4 w-4 mr-2" />
                <span>{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="Name" className="flex items-center text-slate-700">
                    <User className="h-4 w-4 mr-2" />
                    Name
                  </label>
                  <input
                    id="Name"
                    name="Name"
                    value={formData.Name}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-200 rounded-md p-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="Location" className="flex items-center text-slate-700">
                    <MapPin className="h-4 w-4 mr-2" />
                    Location
                  </label>
                  <input
                    id="Location"
                    name="Location"
                    value={formData.Location}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-200 rounded-md p-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="Date" className="flex items-center text-slate-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      Date
                    </label>
                    <input
                      id="Date"
                      name="Date"
                      type="date"
                      value={formData.Date}
                      onChange={handleChange}
                      required
                      className="w-full border border-slate-200 rounded-md p-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="Time" className="flex items-center text-slate-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      Time
                    </label>
                    <input
                      id="Time"
                      name="Time"
                      type="time"
                      value={formData.Time}
                      onChange={handleChange}
                      required
                      className="w-full border border-slate-200 rounded-md p-2 focus:border-purple-500 focus:outline-none"
                    />
                  </div>
                </div>
                
                <div className="space-y-3 pt-2">
                  <span className="text-slate-700 block mb-2">Mood Selection</span>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {Object.keys(formData.MoodSelection).map((mood) => (
                      <div key={mood} className="flex items-center space-x-2">
                        <input
                          id={mood}
                          type="checkbox"
                          checked={formData.MoodSelection[mood]}
                          onChange={() => handleCheckboxChange(mood)}
                          className="h-4 w-4 text-purple-600 border-slate-200 rounded focus:ring-purple-500"
                        />
                        <label htmlFor={mood} className="cursor-pointer">
                          {mood === "Happy" && "😄 Happy"}
                          {mood === "Sad" && "😔 Sad"}
                          {mood === "Anxious" && "😰 Anxious"}
                          {mood === "Stressed" && "🥵 Stressed"}
                          {mood === "Neutral" && "😌 Neutral"}
                          {mood === "Excited" && "🤩 Excited"}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 pt-2">
                  <label htmlFor="EmotionEcho" className="text-slate-700">
                    Emotion Echo
                  </label>
                  <textarea
                    id="EmotionEcho"
                    name="EmotionEcho"
                    value={formData.EmotionEcho}
                    onChange={handleChange}
                    required
                    placeholder="Describe how you're feeling in more detail..."
                    className="w-full min-h-[120px] border border-slate-200 rounded-md p-2 focus:border-purple-500 focus:outline-none"
                  />
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white py-2 rounded-md font-medium transition-colors"
              >
                <Send className="inline mr-2 h-4 w-4" />
                {isSubmitting ? "Submitting..." : "Submit Entry"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}