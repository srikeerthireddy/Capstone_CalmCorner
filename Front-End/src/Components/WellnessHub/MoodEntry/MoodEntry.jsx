import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { Calendar, Clock, MapPin, User, Send, AlertCircle, Smile, Frown, Meh, Zap, ThermometerSun } from 'lucide-react';
import AuthContext from "../../AuthContext/AuthContext";

export default function MoodEntryForm() {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const decodedToken = token ? jwtDecode(token) : { userId: "" };
  const { user } = useContext(AuthContext);

  // Get current date and time in required format
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const getCurrentTime = () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const [formData, setFormData] = useState({
    Name: user?.username || "",
    Date: getCurrentDate(),
    Time: getCurrentTime(),
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

  // Update name when user data is loaded
  useEffect(() => {
    if (user?.username) {
      setFormData(prev => ({
        ...prev,
        Name: user.username
      }));
    }
  }, [user]);

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
    setError("");

    try {
      const {
        Name,
        Date,
        Time,
        MoodSelection,
        EmotionEcho
      } = formData;

      console.log("Submitting mood entry:", {
        Name,
        Date,
        Time,
        MoodSelection,
        EmotionEcho,
      });

      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/moodEntry/EntryCreate`,
        {
          Name,
          Location: "N/A", // Temporary: send placeholder until backend is updated
          Date,
          Time,
          MoodSelection,
          EmotionEcho,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          }
        }
      );

      console.log("Mood entry added successfully", response.data);

      // reset form
      setFormData({
        Name: user?.username || "",
        Date: getCurrentDate(),
        Time: getCurrentTime(),
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

      // Navigate to track mood page
      navigate('/wellnesshub/track-mood');
    } catch (error) {
      console.error("Error adding the mood entry", error);
      console.error("Error response:", error.response?.data);
      setError(
        error.response?.data?.message ||
        error.message ||
        "There was a problem submitting your mood entry. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full h-full">
      <div className="bg-white border border-slate-200 rounded-xl shadow-lg h-full">
        <div className="bg-gradient-to-r from-purple-600/10 to-teal-600/10 p-6 rounded-t-xl border-b border-slate-200">
          <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-600">
            Daily Mood Entry
          </h2>
          <p className="text-slate-600 mt-2">
            Track your mood and emotions to better understand your mental well-being
          </p>
        </div>
        
        <div className="p-8">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center">
              <AlertCircle className="h-5 w-5 mr-3 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-purple-600" />
                Personal Information
              </h3>
              <div className="space-y-2">
                <label htmlFor="Name" className="flex items-center text-slate-700 font-medium">
                  <User className="h-4 w-4 mr-2 text-slate-500" />
                  Name
                </label>
                <input
                  id="Name"
                  name="Name"
                  value={formData.Name}
                  readOnly
                  disabled
                  className="w-full border border-slate-300 rounded-lg p-3 bg-slate-100 text-slate-600 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Date and Time Section */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-teal-600" />
                Date & Time
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="Date" className="flex items-center text-slate-700 font-medium">
                    <Calendar className="h-4 w-4 mr-2 text-slate-500" />
                    Date
                  </label>
                  <input
                    id="Date"
                    name="Date"
                    type="date"
                    value={formData.Date}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-lg p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="Time" className="flex items-center text-slate-700 font-medium">
                    <Clock className="h-4 w-4 mr-2 text-slate-500" />
                    Time
                  </label>
                  <input
                    id="Time"
                    name="Time"
                    type="time"
                    value={formData.Time}
                    onChange={handleChange}
                    required
                    className="w-full border border-slate-300 rounded-lg p-3 focus:border-teal-500 focus:ring-2 focus:ring-teal-200 focus:outline-none transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Mood Selection Section */}
            <div className="bg-gradient-to-br from-purple-50 to-teal-50 p-6 rounded-lg border border-purple-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                How are you feeling today?
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {Object.keys(formData.MoodSelection).map((mood) => (
                  <div key={mood} className="relative">
                    <input
                      id={mood}
                      type="checkbox"
                      checked={formData.MoodSelection[mood]}
                      onChange={() => handleCheckboxChange(mood)}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={mood}
                      className="flex flex-col items-center justify-center p-4 bg-white border-2 border-slate-200 rounded-lg cursor-pointer hover:bg-purple-50 hover:border-purple-300 transition-all peer-checked:bg-gradient-to-br peer-checked:from-purple-100 peer-checked:to-teal-100 peer-checked:border-purple-500 peer-checked:shadow-md"
                    >
                      {mood === "Happy" && <Smile className="w-8 h-8 mb-2 text-purple-600" />}
                      {mood === "Sad" && <Frown className="w-8 h-8 mb-2 text-blue-600" />}
                      {mood === "Anxious" && <AlertCircle className="w-8 h-8 mb-2 text-orange-600" />}
                      {mood === "Stressed" && <ThermometerSun className="w-8 h-8 mb-2 text-red-600" />}
                      {mood === "Neutral" && <Meh className="w-8 h-8 mb-2 text-slate-600" />}
                      {mood === "Excited" && <Zap className="w-8 h-8 mb-2 text-yellow-600" />}
                      <span className="text-sm font-medium text-slate-700">{mood}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Emotion Echo Section */}
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-800 mb-4">
                Emotion Echo
              </h3>
              <div className="space-y-2">
                <label htmlFor="EmotionEcho" className="text-slate-600 text-sm">
                  Describe your feelings in detail. What's on your mind?
                </label>
                <textarea
                  id="EmotionEcho"
                  name="EmotionEcho"
                  value={formData.EmotionEcho}
                  onChange={handleChange}
                  required
                  placeholder="Share your thoughts and feelings here... The more details you add, the better you can track your emotional patterns."
                  rows="6"
                  className="w-full border border-slate-300 rounded-lg p-4 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all resize-none"
                />
                <p className="text-xs text-slate-500 mt-1">
                  This is a safe space to express yourself freely.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white rounded-lg font-semibold transition-all shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                <Send className="h-5 w-5" />
                {isSubmitting ? "Submitting..." : "Submit Mood Entry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
