import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Calendar, Clock, MapPin, Pencil, Trash2, AlertCircle } from 'lucide-react';

export default function TrackMood() {
  const [moodEntries, setMoodEntries] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchMoodEntries = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5226/api/moodEntry/userEntry",
          {
            withCredentials: true,

          }
        );
        const data = response.data;
        setMoodEntries(data.moodEntry || []);
      } catch (error) {
        setError(error.message || "Failed to fetch mood entries");
      }
    };

    fetchMoodEntries();
  }, []);

  const handleUpdate = (entry) => {
    navigate('/wellnesshub/update', { state: entry });
  };

  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:5226/api/moodEntry/EntryDelete/${id}`,
        {
          withCredentials: true,

        }
      );
      if (response.status !== 200) {
        throw new Error('Failed to delete entry');
      }
      setMoodEntries(moodEntries.filter(entry => entry._id !== id));
    } catch (error) {
      setError(error.message || "Error deleting mood entry");
    }
  };

  if (error) {
    return (
      <div className="max-w-md mx-auto mt-8 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center">
        <AlertCircle className="h-4 w-4 mr-2" />
        <span>Error: {error}</span>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-teal-600">
          Mood Entry Tracker
        </h1>
        <p className="text-slate-600 mt-2">Track and manage your mood entries over time</p>
      </div>

      {moodEntries.length === 0 ? (
        <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-slate-100">
            <Calendar className="h-8 w-8 text-slate-400" />
          </div>
          <h3 className="text-xl font-medium text-slate-700">No mood entries yet</h3>
          <p className="text-slate-500 mt-2 mb-6">Start tracking your moods to see them here</p>
          <button
            onClick={() => navigate('/wellnesshub/mood')}
            className="bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white px-6 py-2 rounded-full font-medium transition-colors"
          >
            Create New Entry
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {moodEntries.map((entry) => (
            <div
              key={entry._id}
              className="bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="p-4 border-b border-slate-100">
                <h3 className="text-lg font-semibold text-slate-800 truncate">{entry.Name}</h3>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-slate-500">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{entry.Location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{entry.Date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{entry.Time}</span>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {getSelectedMoods(entry.MoodSelection).map((mood, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-50 text-purple-700 border border-purple-200"
                      >
                        {mood}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">{entry.EmotionEcho}</p>
                </div>

                <div className="flex justify-end gap-2">
                  <button
                    onClick={() => handleUpdate(entry)}
                    className="group flex items-center px-3 py-1.5 bg-purple-50 text-purple-700 hover:bg-purple-100 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    <Pencil className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" />
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(entry._id)}
                    className="group flex items-center px-3 py-1.5 bg-red-50 text-red-700 hover:bg-red-100 rounded-lg text-sm font-medium transition-colors duration-200"
                  >
                    <Trash2 className="h-4 w-4 mr-1 group-hover:scale-110 transition-transform" />
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
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
  return selectedMoods;
}

function getEmojiForMood(mood) {
  switch (mood) {
    case 'Happy':
      return '😄 Happy';
    case 'Sad':
      return '😔 Sad';
    case 'Anxious':
      return '😰 Anxious';
    case 'Stressed':
      return '🥵 Stressed';
    case 'Neutral':
      return '😌 Neutral';
    case 'Excited':
      return '🤩 Excited';
    default:
      return '';
  }
}