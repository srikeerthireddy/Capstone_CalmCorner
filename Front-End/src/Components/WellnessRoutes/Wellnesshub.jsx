import { useContext } from "react";
import { NavLink, Routes, Route, Link } from "react-router-dom";
import MoodEntry from "../WellnessHub/MoodEntry/MoodEntry";
import TrackMood from "../WellnessHub/TrackMood/TrackMood";
import Resources from "../WellnessHub/Resources/Resources";
import WellnessTips from "../WellnessHub/WellnessTips/WellnessTips";
import UpdateRender from "../WellnessHub/UpdateEntry/UpdateEntry";
import AuthContext from "../AuthContext/AuthContext";
import { LogIn, Sparkles } from "lucide-react";

function Wellnesshub() {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <div className="relative min-h-screen bg-slate-50 flex flex-col bg-[linear-gradient(135deg,_#e0c3fc_0%,_#8ec5fc_100%)]">
      <div className="flex flex-col flex-1">
        <div className="bg-[linear-gradient(135deg,_#e0c3fc_0%,_#8ec5fc_100%)] border-b border-slate-200 p-4">
          <div className="flex justify-center gap-4">
            <NavLink
              to="mood"
              className={({ isActive }) =>
                `px-4 py-2 font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-purple-700 to-teal-700 text-white shadow-md"
                    : "text-slate-800 hover:bg-white/30 hover:text-slate-900"
                }`
              }
            >
              MOOD ENTRY
            </NavLink>
            <NavLink
              to="track-mood"
              className={({ isActive }) =>
                `px-4 py-2 font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-purple-700 to-teal-700 text-white shadow-md"
                    : "text-slate-800 hover:bg-white/30 hover:text-slate-900"
                }`
              }
            >
              TRACK MOOD
            </NavLink>
            <NavLink
              to="resources"
              className={({ isActive }) =>
                `px-4 py-2 font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-purple-700 to-teal-700 text-white shadow-md"
                    : "text-slate-800 hover:bg-white/30 hover:text-slate-900"
                }`
              }
            >
              RESOURCES
            </NavLink>
            <NavLink
              to="wellness-tips"
              className={({ isActive }) =>
                `px-4 py-2 font-medium rounded-md transition-colors ${
                  isActive
                    ? "bg-gradient-to-r from-purple-700 to-teal-700 text-white shadow-md"
                    : "text-slate-800 hover:bg-white/30 hover:text-slate-900"
                }`
              }
            >
              WELLNESS TIPS
            </NavLink>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className={`p-8 min-h-full ${!isLoggedIn ? "blur-sm pointer-events-none select-none" : ""}`}>
            <Routes>
              <Route index element={<MoodEntry />} />
              <Route path="mood" element={<MoodEntry />} />
              <Route path="track-mood" element={<TrackMood />} />
              <Route path="resources" element={<Resources />} />
              <Route path="wellness-tips" element={<WellnessTips />} />
              <Route path="update" element={<UpdateRender />} />
            </Routes>
          </div>

          {!isLoggedIn && (
            <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
              <div className="pointer-events-auto w-full max-w-md px-8">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-200/50 p-8 text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-teal-500 text-white mb-6">
                    <Sparkles className="w-7 h-7" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-800 mb-2">
                    Welcome to Wellness Hub
                  </h2>
                  <p className="text-slate-600 mb-6 text-sm leading-relaxed">
                    Log in to track your mood, manage your entries, and access your personalized wellness content.
                  </p>
                  <Link
                    to="/login"
                    state={{ from: "/wellnesshub" }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-teal-600 hover:from-purple-700 hover:to-teal-700 text-white font-medium rounded-xl shadow-lg shadow-purple-500/25 transition-all hover:shadow-xl hover:shadow-purple-500/30"
                  >
                    <LogIn className="w-5 h-5" />
                    Log in to continue
                  </Link>
                  <p className="mt-4 text-slate-500 text-sm">
                    Don&apos;t have an account?{" "}
                    <Link to="/signin" className="text-purple-600 hover:text-purple-700 font-medium">
                      Sign up
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Wellnesshub;