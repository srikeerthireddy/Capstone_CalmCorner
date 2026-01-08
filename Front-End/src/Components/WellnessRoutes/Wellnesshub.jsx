import { useContext, useState, useEffect } from "react";
import { NavLink, Routes, Route, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Edit3, BarChart3, BookOpen, Lightbulb } from 'lucide-react';
import AuthContext from "../AuthContext/AuthContext";
import MoodEntry from "../WellnessHub/MoodEntry/MoodEntry";
import TrackMood from "../WellnessHub/TrackMood/TrackMood";
import Resources from "../WellnessHub/Resources/Resources";
import WellnessTips from "../WellnessHub/WellnessTips/WellnessTips";
import UpdateRender from "../WellnessHub/UpdateEntry/UpdateEntry";

function Wellnesshub() {
  const { isLoggedIn, token, user, refreshAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    
    const cookieToken = Cookies.get("token");
    if (cookieToken && !isLoggedIn) {
      refreshAuth();
    }
    
    setIsModalOpen(!isLoggedIn);
  }, [isLoggedIn, token, user, refreshAuth]);

  useEffect(() => {
    refreshAuth();
  }, [refreshAuth]);

  const handleLoginRedirect = () => {
    setIsModalOpen(false);
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen bg-slate-50 bg-[linear-gradient(135deg,_#e0c3fc_0%,_#8ec5fc_100%)]">
      <div className={`flex min-h-screen ${!isLoggedIn ? "pointer-events-none opacity-50" : ""}`}>
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-white/90 backdrop-blur-sm border-r border-slate-200">
          <div className="p-6">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-700 to-teal-700 mb-6">
              Wellness Hub
            </h2>
            <nav className="space-y-2">
              <NavLink
                to=""
                end
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 font-medium rounded-lg transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-purple-700 to-teal-700 text-white shadow-md"
                      : "text-slate-700 hover:bg-purple-50 hover:text-purple-700"
                  }`
                }
              >
                <Edit3 className="w-5 h-5 mr-3" />
                Mood Entry
              </NavLink>
              <NavLink
                to="track-mood"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 font-medium rounded-lg transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-purple-700 to-teal-700 text-white shadow-md"
                      : "text-slate-700 hover:bg-purple-50 hover:text-purple-700"
                  }`
                }
              >
                <BarChart3 className="w-5 h-5 mr-3" />
                Track Mood
              </NavLink>
              <NavLink
                to="resources"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 font-medium rounded-lg transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-purple-700 to-teal-700 text-white shadow-md"
                      : "text-slate-700 hover:bg-purple-50 hover:text-purple-700"
                  }`
                }
              >
                <BookOpen className="w-5 h-5 mr-3" />
                Resources
              </NavLink>
              <NavLink
                to="wellness-tips"
                className={({ isActive }) =>
                  `flex items-center px-4 py-3 font-medium rounded-lg transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-purple-700 to-teal-700 text-white shadow-md"
                      : "text-slate-700 hover:bg-purple-50 hover:text-purple-700"
                  }`
                }
              >
                <Lightbulb className="w-5 h-5 mr-3" />
                Wellness Tips
              </NavLink>
            </nav>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto">
          <div className="p-8">
            <Routes>
              <Route index element={<MoodEntry />} />
              <Route path="mood" element={<MoodEntry />} />
              <Route path="track-mood" element={<TrackMood />} />
              <Route path="resources" element={<Resources />} />
              <Route path="wellness-tips" element={<WellnessTips />} />
              <Route path="update" element={<UpdateRender />} />
            </Routes>
          </div>
        </main>
      </div>
      {!isLoggedIn && isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-opacity-30" />
          <div className="relative bg-white p-6 rounded-lg shadow-xl max-w-sm w-full pointer-events-auto">
            <h2 className="text-xl font-semibold text-slate-800 mb-4">
              Login Required
            </h2>
            <p className="text-slate-600 mb-6">
              You need to be logged in to access the Wellness Hub.
            </p>
            <div className="flex justify-end gap-4">
              <button
                onClick={handleLoginRedirect}
                className="px-4 py-2 bg-gradient-to-r from-purple-700 to-teal-700 text-white font-medium rounded-md hover:from-purple-800 hover:to-teal-800 transition-colors"
              >
                Go to Login
              </button>
            </div>
          </div>
        </div>
      )}
      

    </div>
  );
}

export default Wellnesshub;